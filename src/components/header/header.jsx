
import { AppBar, Toolbar, Typography, Button, Box, Icon} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="sticky"  elevation={0} sx={{backgroundColor: 'white', color: '#253f3fff', top:'0', zIndex: 1100}}>
      <Toolbar sx={{display: "flex", justifyContent: "center", alignItems: 'center', gap:12}}>
        <Box>
          <img src="\img\logo.png" alt="Logo" style={{ maxWidth: '100px' }} />
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', px: 2}}>
          <Typography sx={{fontWeight: 300}} variant="body1">about us</Typography>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Typography sx={{fontWeight: 300}}variant="body1">our experts</Typography>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Typography sx={{fontWeight: 300}}variant="body1">nutrition</Typography>
          <Typography sx={{fontWeight: 800, color: '#fea07bff'}}>•</Typography>
          <Typography sx={{fontWeight: 300}}variant="body1">contact</Typography>
        </Box>
        <Box sx={{width: 250,height:30, backgroundColor: "#9adc90ff",borderRadius: 8}} display="flex" alignItems="center">
        <Icon sx={{pl: 2}}><SearchIcon/></Icon>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1}}>
        <Button variant="outlined" sx={{color: '#fea07bff', borderColor: '#fea07bff'}} startIcon={<AccountCircleIcon />}>Login</Button>
        <Button variant='contained' sx={{backgroundColor: '#fea07bff', color: 'white'}}>Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default Header;