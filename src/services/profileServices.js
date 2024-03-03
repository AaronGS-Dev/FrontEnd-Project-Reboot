import api from './config.js'

export const profileEdit = async (credentials, id) => {
    const { data } = await api.put(`/user/${id}`, credentials) 
    console.log(data)
    localStorage.setItem('token', data.result )
   
}