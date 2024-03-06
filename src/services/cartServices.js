 import api from "./config";

export const cartCall = async() =>{
   const { data } = await api.get('/cart') 
   console.log(data)
   return data
}

export const cartPost = async() =>{
    const { data } = await api.post('/cart') 
    console.log(data)
    return data
 }

 export const cartDelete = async(id) =>{
    const { data } = await api.get(`/cart/${id}`) 
    console.log(data)
    return data
 }