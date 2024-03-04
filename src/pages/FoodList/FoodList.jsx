import { useEffect, useState } from "react"
import { foodCall } from "../../services/foodServices"
import FoodCard from "../FoodCard/FoodCard"
import './FoodList.css'

const FoodList = () => {
 const[foods, setFoods] = useState([])
 useEffect(() =>{

     const getFoods = async() => {
         const {result} = await foodCall()
         setFoods(result)
        }
        getFoods()
    }, [])
    const foodList = () =>{
      const result = foods.map((food)=>{
        
        return <FoodCard id={food.id} title={food.title} image={food.image} diet={food.diet} description={food.description}/>
      })
      return result
    }
  return (

    <div id="list">
      {foodList()}
      </div>
  )
}


export default FoodList