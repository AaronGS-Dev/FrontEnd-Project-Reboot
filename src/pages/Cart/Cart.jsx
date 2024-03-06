import { useEffect, useState } from "react"
import { cartCall } from "../../services/cartServices"
import './Cart.css'
import FoodDetails from "../FoodDetails/FoodDetails"

const Cartlist = () => {
    const[carts, setCarts] = useState([])
    useEffect(() =>{

        const getCart = async() => {
            const {result} = await cartCall()
            setCarts(result)
        }
        getCart()
    }, [])
    const CartBuy =() =>{
        const result = carts.map((cart)=>{
            return <FoodDetails cart={cart}/>
        })
       console.log(result)
        return result
    }
    return (
    <div>
        {CartBuy()}
    </div>
  )
}

export default Cartlist