import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Signup from '../pages/SignUp/signUp'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
   
])

export default router