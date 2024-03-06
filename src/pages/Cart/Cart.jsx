
import { useEffect, useState } from 'react';
import './Cart.css';
import { getCartsByUser } from '../../services/cartServices';
import FoodCard from '../FoodCard/FoodCard';
import FoodDetails from '../FoodDetails/FoodDetails';
function CartList() {
  const [listData, setListData] = useState([]);
  console.log(listData)

  useEffect(() => {
    loadUserList()
  }, []);

  const loadUserList = async () => {
    try {
      const userId = await localStorage.getItem('userId')
      const data = await getCartsByUser(userId);
      console.log(data)
      setListData(data.result[0]);
    } catch (error) {
      console.error('Failed to load user list', error);
    }
  };

  // if (!listData) {
  //   return <div>Add from the Dashboard</div>;
  // }

  return (
    <div id='h1cart'>
      <h1 id='h1h1'>Your Shopping Cart</h1>
      <div id='list'>
        {listData?.foods?.map((food, index) => (
          <FoodDetails 
            key={index} 
            id={food.id} 
            title={food.title} 
            image={food.image} 
            diet={food.diet} 
            description={food.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default CartList;