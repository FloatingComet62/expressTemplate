import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { routesRes } from './types'

export function getFiles(dir: string, done: Function) {
    let results: string[] = []
    fs.readdir(dir, function(err, list) {
      if (err) return done(err)
      let i = 0;
      (function next() {
        let file = list[i++]
        if (!file) return done(null, results)
        file = path.resolve(dir, file)
        fs.stat(file, (_, stat) => {
          if (stat && stat.isDirectory()) {
            getFiles(file, (_: Error, files: string[]) => {
              results = results.concat(files)
              next()
            })
          } else {
            results.push(file)
            next()
          }
        })
      })()
    })
}

export async function handleReq(req: Request, res: Response, statusCode: number, router: Function) {
  const response: routesRes = await router(req)
  if(response.errors.length > 0) {
    res.status(400)
  }else{
    res.status(statusCode)
  }
  res.send(response)
}