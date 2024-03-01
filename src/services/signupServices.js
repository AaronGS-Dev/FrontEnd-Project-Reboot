import api from './config.js'

export const signUp = async (credentials) => {
    const { data } = await api.post('/auth/signup', credentials) 
    console.log(data)
    localStorage.setItem('token', data.result )

}