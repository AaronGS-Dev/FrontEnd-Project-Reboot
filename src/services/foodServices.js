import api from './config.js'

export const foodCall = async () => {
    const { data } = await api.get('/foods') 
    console.log(data)
return data
}


export const getOneFood = async (id) =>{
    const {data: {food}} = await api.get(`/foods/${id}`)
    console.log(food)
    return food
}