
import { escapeMongoOperator } from "../utils/senitizeInput"
import { baseService } from "./baseService"

export const todoService = {
    getAllTodo: async ()=>{
        return baseService.get('/todo')
    },

    postTodo: async(name,isChecked,id) => {

        const senitizeName = escapeMongoOperator(name);
        const data = {
            name:senitizeName,
            isChecked: isChecked
        }

        const url = id == null ? '/todo': `/todo/${id}`
        return baseService.post(url,data)
    },

    updateTodo: async(name,isCheck,id) => {

        const senitizeName = escapeMongoOperator(name);
        const data = {
            name:senitizeName,
            isCheck: isCheck
        } 
        
        const url = id == null ? '/todo': `/todo/${id}`
        return baseService.put(url,data)
    }
}
