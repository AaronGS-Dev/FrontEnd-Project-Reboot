import { useEffect, useState } from "react"
import { getOneFood } from "../../services/foodServices"
import {useParams } from "react-router-dom"
import {  CardMedia,Button  } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './FoodComponent.css'

const FoodComponent = () => {
  const[food, setFood] = useState([])

  const {foodId} = useParams()
  useEffect(() =>{
 
      const getFood = async() => {
          const result = await getOneFood(foodId)
          setFood(result)
         }
         getFood()
     }, [])
  return (
      <main id="containerFoodDet">
        <CardMedia
        id='imag'
        component="img"
        height="550vh"
        image={food.image}        
        />
        <div id="tittleandButton">
            <h1 id="titlefood">{food.title}</h1>
            <Button id="buttonprice" size="large" variant= "contained" color="primary" style={{backgroundColor: '#9adc90ff' }} startIcon={<ShoppingBasketIcon style={{color: 'white' }}/>}>Price={food.price}€</Button>
        </div>
        <div>
          <div id="description">
           <p>The plate is a {food.description}</p> 
          </div>
          <div id="dietfood">
          {food.diet}
          </div>
          <div id="ingredientss">
            <h2 id="h2class">Ingredients</h2>
             <p id="ingredientsp">{food.ingredients}</p>
          </div>
          <div>
  <h2 id="values">Nutritional values</h2>
  <div className="tablenut">
  <table className="nutritional-table">
    <tr>
      <td>Proteins</td>
      <td>{food.protein}u</td>
    </tr>
    <tr>
      <td>Carbohydrates</td>
      <td>{food.hydrate}u</td>
    </tr>
    <tr>
      <td>Fat</td>
      <td>{food.fat}u</td>
    </tr>
    <tr>
      <td>Saturated fat</td>
      <td>{food.saturated_fat}u</td>
    </tr>
    <tr>
      <td>Sugar</td>
      <td>{food.sugar}u</td>
    </tr>
    <tr>
      <td>Salt</td>
      <td>{food.salt}u</td>
    </tr>
  </table>
</div>
</div>
          
        </div>

      </main>
        
  )
}

export default FoodComponent