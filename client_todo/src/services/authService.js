
import { baseService } from "./baseService"

export const authService = {
    login: async(username,password) => {
        const data = {
            username:username,
            password:password
        }
        return baseService.post('/auth/login',data)
    },
    
    register: async(username,password) => {
        const data = {
            username:username,
            password:password
        }
        return baseService.post('/auth/register',data)
    }
}