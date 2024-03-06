import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signUp.css'
import { signUp } from '../../services/signupServices';
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
  const navigate =useNavigate()
  const handleSubmit =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        direction: data.get('direction'),
        postal_code: data.get('postal_code')
    };
   
    await signUp(credentials)
    navigate('/layout')

  };

  return (
    <div id='todo'>
    <ThemeProvider theme={defaultTheme}>
      <Container  id='form' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Link className='linkLogo' to='/layout'>
        <img src="\img\logo.png" alt="Logo" className='logoSign' style={{ maxWidth: '10rem' }} />
        </Link>
         
          <Typography  component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              className="field"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              className="field"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

        
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              className="field"
              autoComplete="current-password"
            />

              <TextField
              margin="normal"
              required
              fullWidth
              className="field"
              label="Direction"
              name="direction"
              autoComplete="direction"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              className="field"
              label="Postal Code"
              name="postal_code"
              autoComplete="postal-code"
              autoFocus
           
/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              id='buttonSign'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <div>
            <h3 id='message'>Do have an account? Sign in</h3>
            <Button
              type="submit"
              id='buttonSignUp'
              fullWidth
              href="/" 
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}