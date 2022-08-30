import { Request } from "express"
import { routesRes } from "../../types"

export const get = async(req: Request): Promise<routesRes> => {
    const token = req.params.token
    return {
        errors: [],
        data: "token-GET="+token
    }
}
export const post = async(req: Request): Promise<routesRes> => {
    const token = req.params.token
    return {
        errors: [],
        data: "token-POST="+token
    }
}
export const del = async(req: Request): Promise<routesRes> => {
    const token = req.params.token
    return {
        errors: [],
        data: "token-DEL="+token
    }
}