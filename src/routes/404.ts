import { Request } from "express"
import { routesRes } from "../types"

export const get = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "404-GET"
    }
}
export const post = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "404-POST"
    }
}
export const del = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "404-DEL"
    }
}