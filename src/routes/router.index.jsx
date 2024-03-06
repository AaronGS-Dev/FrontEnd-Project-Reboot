import {createBrowserRouter} from 'react-router-dom'
import { redirect } from 'react-router-dom'

import Home from '../pages/home/home'
import Layout from '../layouts/layouts.index'
import Login from '../pages/login/login'
import Signup from '../pages/SignUp/signUp'
import AboutUs from '../pages/aboutUs/aboutUs'
import Profile from '../components/profile/profile'
import FoodComponent from '../components/CallFoodList/FoodComponent'
import Cartlist from '../pages/Cart/Cart'
const router = createBrowserRouter([

{
    path: '/layout',
    element: <Layout/>,
    children: [
        {
            path: '/layout',
            element: <Home/>,
            loader: () => {
                if (!localStorage.getItem('token')) {
                    return redirect('/')
                } else {
                    return null
                }
            }
           
        },
        {
            path: '/layout/aboutus',
            element:<AboutUs/>
        },
        {
            path: '/layout/profile/',
            element:<Profile/>
        },
        {
            path: '/layout/food/:foodId/',
            element:<FoodComponent/>
        },
        {
            path:'/layout/cart',
            element:<Cartlist/>
        }
       
    ]
    
},
{
    path: '/',
    element: <Login/>
},
{
    path: '/signup',
    element: <Signup/>
},
{
    path: '/profile/',
    element:<Profile/>
},
   
])

export default router