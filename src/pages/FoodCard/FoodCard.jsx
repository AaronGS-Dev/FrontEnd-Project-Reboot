import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



const FoodCard = ({title, image, diet, description}) => {

  return (
    <Card  elevation={5} sx={{ width: 250, position: 'relative', p: 1, borderRadius: 8}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" height={60}>

            <Box display="flex" flexDirection="column">
              <Typography variant="h6" component="div" textAlign="center" id='titlecard'>{title}</Typography>
            </Box>
        </Box>
      <CardMedia
    component="img"
    height="140"
    image={image}        
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
                <Box sx={{height:140, overflowY:"auto", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none','-ms-overflow-style': 'none'}}>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </Box>
            </Grid>
          
        </Grid>
      </CardContent>

      <CardActions>
      <Box>
      <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#9adc90ff' }} startIcon={<ShoppingBasketIcon style={{color: 'white' }}/>}>Add to Cart</Button>
      </Box>
      </CardActions>
    </Card>
  );
};

export default FoodCard;