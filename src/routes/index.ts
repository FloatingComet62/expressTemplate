import { Request } from "express"
import { routesRes } from "../types"

export const get = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "GET"
    }
}
export const post = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "POST"
    }
}
export const del = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "DEL"
    }
}