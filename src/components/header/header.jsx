
import { AppBar, Toolbar, Typography, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <AppBar position="sticky"  elevation={0} sx={{backgroundColor: 'white', color: '#253f3fff', top:'0', zIndex: 1100}}>
      <Toolbar sx={{display: "flex", justifyContent: "center", alignItems: 'center', gap:12}}>
        <Box>
        <Link className='navbar' to='/layout'>
          <img src="\img\logo.png" alt="Logo" className='logo' style={{ maxWidth: '9rem' }} />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', px: 2}}>
          <Link className='navbar' to='/layout/aboutus'>
          <Typography sx={{fontWeight: 300}} variant="body1">About us</Typography>
          </Link>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Link className='navbar' to='/layout'>
          <Typography sx={{fontWeight: 300}}variant="body1">Foods</Typography>
          </Link>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Link className='navbar' to='/profile/'>
          <Typography sx={{fontWeight: 300}}variant="body1">Profile</Typography>
          </Link>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Link className='navbar' to='/layout/cart'>
          <Typography sx={{fontWeight: 300}}variant="body1">Cart</Typography>
          </Link>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Link className='navbar' to='/'>
          <Typography sx={{fontWeight: 300}}variant="body1">Log Out</Typography>
          </Link>
          
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1}}>
      
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default Header;