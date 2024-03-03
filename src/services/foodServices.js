import api from './config.js'

export const foodCall = async () => {
    const { data } = await api.get('/foods') 
    console.log(data)
return data
}