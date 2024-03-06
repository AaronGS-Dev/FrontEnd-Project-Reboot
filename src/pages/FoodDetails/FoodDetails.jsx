import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';

import './FoodDetails.css'
import { Link } from 'react-router-dom';


const FoodDetails = ({cart}) => {
  return (
    <Card id="princiCard" elevation={5} sx={{ width: 500, position: 'relative', p: 1, borderRadius: 8}}>
        <Box display="flex" justifyContent="space-between">
          
            <Box id="titlebox">
              <Typography variant="h1" component="div" textAlign="center" id='titlecard'>Your shopping Cart</Typography>
            </Box>
        </Box>
        <CardMedia
      id='imagen'
    component="img"
 
    image="https://res.cloudinary.com/dlpa6nbtu/image/upload/v1709679810/eawell_tpy89w.jpg   "     
      />
      <CardContent>
          <Grid item xs={8}>
                <Box sx={{height:140, overflowY:"auto", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none','-ms-overflow-style': 'none'}}>
                    <Typography variant="body2" color="text.secondary">
                        Total meals: {cart.quantity} 
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                    Total Price = {cart.quantity * 4}€
                    </Typography>
                </Box>
            </Grid>
          
       
      </CardContent>

      <CardActions>
      <Box id='box-button'>
     
        <Link to={"/layout"}>
        <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#85c983ff' }}>Return Back</Button>
        </Link> 
        <Link to={"https://www.paypal.com/signin"}>
        <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#85c983ff' }}>Buy</Button>
        </Link> 
      </Box>
      </CardActions>
    </Card>
  );
};


export default FoodDetails