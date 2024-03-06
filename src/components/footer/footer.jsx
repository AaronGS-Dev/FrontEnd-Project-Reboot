
import Box from '@mui/material/Box';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <Box>
      <div id='footer'>
      <div className='copyrightContainer'>
           <p>EATWELL 2024 - All Rights Reserved</p> 
          
        </div>
        <img src="\img\logo.png" alt="Logo" className='logo' style={{ maxWidth: '9rem' }} />

          <div className='iconsContainer'>
            <Link to='#'><XIcon className='icon' /></Link>
            <Link to='#'><InstagramIcon className='icon' /></Link>
            <Link to='#'><FacebookIcon className='icon' /></Link>
            <Link to='#'><LinkedInIcon className='icon' /></Link>
            </div> 
          
      </div>
    </Box>
  );
}