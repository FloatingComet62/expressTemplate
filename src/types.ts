import { Request } from "express"

interface Err {
    type: number
    message: string
}

export interface routesRes {
    errors: Err[]
    data?: any
}

export interface Routes {
    get(req: Request): Promise<routesRes>
    post(req: Request): Promise<routesRes>
    del(req: Request): Promise<routesRes>
}

export type method = 'GET' | 'POST' | 'DELETE'