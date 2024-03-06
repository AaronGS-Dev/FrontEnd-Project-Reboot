import api from './config.js'


export const foodCall = async () => {
    const { data } = await api.get('/foods') 
    console.log(data)
return data
}


export const profileEdit = async (credentials, id) => {
    const { data:{profile} } = await api.put(`/user/${id}`, credentials) 
    console.log(profile)
    return localStorage.setItem('token', profile )
   
}