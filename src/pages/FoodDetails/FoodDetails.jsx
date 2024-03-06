import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from 'react-router-dom';
// import { addFoodToCart } from '../../services/cartServices';
// import { foodCall } from '../../services/foodServices';
import './FoodDetails.css'


const FoodDetails = ({id, title, image, diet, description}) => {


  return (
    <Card  elevation={5} sx={{ width: 250, position: 'relative', p: 1, borderRadius: 8}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" height={60}>
          
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" component="div" textAlign="center" id='titlecard'>{title}</Typography>
            </Box>
        </Box>
      <CardMedia
      id='imagen'
    component="img"
    height="140"
    image={image}        
      />
      <CardContent>
          <Grid item xs={8}>
                <Box sx={{height:140, overflowY:"auto", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none','-ms-overflow-style': 'none'}}>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <br />
                    <Typography id='diet' variant="body2" color="text.secondary">
                        {diet}
                        
                    </Typography>
                </Box>
            </Grid>
          
            <CardActions>
      
      </CardActions>
      
      </CardContent>
      
    </Card>
  
  );
};

export default FoodDetails