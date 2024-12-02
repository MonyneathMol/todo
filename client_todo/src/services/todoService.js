
import { baseService } from "./baseService"

export const todoService = {
    getAllTodo: async ()=>{
        return baseService.get('/todo')
    },

    postTodo: async(name,isChecked,id) => {
        const data = {
            name:name,
            isChecked: isChecked
        } 
        const url = id == null ? '/todo': `/todo/${id}`
        return baseService.post(url,data)
    },

    updateTodo: async(name,isCheck,id) => {
        const data = {
          
            name:name,
            isCheck: isCheck
        } 
        const url = id == null ? '/todo': `/todo/${id}`
        return baseService.put(url,data)
    }
}
