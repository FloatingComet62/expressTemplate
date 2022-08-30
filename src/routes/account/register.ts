import { Request } from "express"
import { routesRes } from "../../types"

export const get = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "register-GET"
    }
}
export const post = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "register-POST"
    }
}
export const del = async(req: Request): Promise<routesRes> => {
    return {
        errors: [],
        data: "register-DEL"
    }
}