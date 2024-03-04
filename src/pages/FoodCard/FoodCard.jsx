import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './FoodCard.css'
import { Link } from 'react-router-dom';


const FoodCard = ({id, title, image, diet, description}) => {

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
          
       
      </CardContent>

      <CardActions>
      <Box id='box-button'>
      <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#9adc90ff' }} startIcon={<ShoppingBasketIcon style={{color: 'white' }}/>}>Add to Cart</Button>
      <Link to={`/layout/food/${id}`}>
      <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#85c983ff' }}>details</Button>
      </Link>
      </Box>
      </CardActions>
    </Card>
  );
};

export default FoodCard;