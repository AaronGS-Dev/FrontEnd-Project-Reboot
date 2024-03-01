import api from './config.js'

export const logIn = async (credentials) => {
    const { data } = await api.post('/auth/login', credentials) 
    console.log(data)
    localStorage.setItem('token', data.result )
   
}