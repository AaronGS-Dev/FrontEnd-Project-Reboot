import api from "./config";

export const getCartFood = async () => {
   try {
       const response = await api.get('/cart/food');
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error('Error getting cart food', error);
       throw error;
   }
};

export const getAllCarts = async () => {
   try {
       const response = await api.get('/cart/');
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error('Error getting all carts', error);
       throw error;
   }
};

export const getCartsByUser = async (userId) => {
   try {
       const response = await api.get(`/cart/user/${userId}`);
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error(`Error getting carts for user ${userId}`, error);
       throw error;
   }
};

export const createCart = async (cartData) => {
   try {
       const response = await api.post('/cart/', cartData);
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error('Error creating cart', error);
       throw error;
   }
};

export const updateCart = async (id, cartData) => {
   try {
       const response = await api.put(`/cart/${id}`, cartData);
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error('Error updating cart', error);
       throw error;
   }
};

export const addFoodToCart = async (foodId) => {
   try {
       const userId = localStorage.getItem('userId');
       console.log(userId, foodId)
       const response = await api.put(`/cart/${userId}/${foodId}`);
       return response.data;
   } catch (error) {
       console.error('Error adding food to cart', error);
       throw error;
   }
};

export const deleteCart = async (id) => {
   try {
       const response = await api.delete(`/cart/${id}`);
       console.log(response.data);
       return response.data;
   } catch (error) {
       console.error('Error deleting cart', error);
       throw error;
   }
};
