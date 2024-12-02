import axios from "axios";


const apiClient = axios.create({
    baseURL:'http://localhost:3001',
    headers:{
        "Content-Type":"application/json"
    }
})

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error) => Promise.reject(error))

export const baseService = {
    get:  async (url,config = {}) => {
        return apiClient.get(url,config)
    },
    post: async(url,data,config ={}) => {
        return apiClient.post(url,data,config)
    },
    put: async(url,data,config ={}) => {
        return apiClient.put(url,data,config)
    },
    delete: async(url,config ={}) => {
        return apiClient.delete(url,config)
    },
}

export default baseService