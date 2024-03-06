import api from './config.js'

export const logIn = async (credentials) => {
    const { data } = await api.post('/auth/login', credentials) 
    localStorage.setItem('token', data.result )
    localStorage.setItem('userId', data.userId)
   
}