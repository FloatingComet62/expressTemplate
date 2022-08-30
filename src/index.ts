import express, { Request, Response } from 'express'
import { method, Routes } from './types'
import { getFiles, handleReq } from './util'
import dotenv from 'dotenv'
dotenv.config()
// import { Database } from "./database"

const app = express()
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))

getFiles('./dist/routes', (err: Error, results: string[]) => {
    if (err) throw err
    let has404 = false
    const routes: string[] = results.filter(file => {
        if(file.includes('404')) {
            has404 = true
            return
        }
        return file.endsWith('.js')
    })
    
    for(let i=0; i<routes.length; i++) {
        const route = routes[i]
        const routeModule: Routes = require(route)
        const parsedRoute = 
            route.split('routes')[1]
            .replace('index.js', '')
            .replace('.js', '')
            .replace(';', ':')
            .replace(/\\/g, '/')
        console.log(parsedRoute)
        
        app.all(parsedRoute, async(req: Request, res: Response) => {
            const method = req.method.toUpperCase() as method

            if(method==='GET') handleReq(req, res, 200, routeModule.get)
            else if(method==='POST') handleReq(req, res, 201, routeModule.post)
            else if(method==='DELETE') handleReq(req, res, 200, routeModule.del)
        })
    }

    // 404
    if(has404) {
        console.log('/404')
        app.all('*', (req: Request, res: Response) => {
            const routeModule: Routes = require('./routes/404')
            const method = req.method.toUpperCase() as method

            if(method==='GET') handleReq(req, res, 200, routeModule.get)
            else if(method==='POST') handleReq(req, res, 201, routeModule.post)
            else if(method==='DELETE') handleReq(req, res, 200, routeModule.del)
        })
    }
})