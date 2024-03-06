    import api from './config.js'

    export const foodCall = async () => {
        try {
            const foodC = await api.get('/foods');
            
            return foodC.data   
            } catch (error) {
                console.log('food not found', error);
                throw error;
            }
    }


    export const getOneFood = async (id) =>{
        const {data: {food}} = await api.get(`/foods/${id}`)
        console.log(food)
        return food
    }

    // export const foodService = async () => {
    //     try {
    //     const foodC = await api.get('/foods');
        
    //     return foodC.data   
    //     } catch (error) {
    //         console.log('food not found', error);
    //         throw error;
    //     }
    // }