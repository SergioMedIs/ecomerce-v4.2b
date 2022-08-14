import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Copyright(props: any) {
  return (
    <Typography  variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CiberZilla
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
    <Box sx={{ width: '100' }}>
      
          <ThemeProvider   theme={theme}>
        
      <Container   paddingTop={15}  component="main" maxWidth="xs">
        <CssBaseline />
  
        <Grid   paddingTop={35} container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid   item xs={6}>
      
          <Item > 
            <TextField
            
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="Nombre/s"
              name="name"
              autoComplete="name"
              autoFocus
            />
            </Item>
            <Item>  <TextField
              margin="normal"
              required
              fullWidth
              id=" password"
              label="Numero de Tarjeta"
              name="key"
              autoComplete="card"
              autoFocus
            />
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <TextField 
          
              margin="normal"
              required
              fullWidth
              id="secondName"
              label="segundo Nombre"
              name="secondName"
              autoComplete="name"
              autoFocus
            />
            </Item>
            <Item>
            <TextField 
          
              margin="normal"
              required
              fullWidth
              id="code"
              label="CVC"
              name="key"
              autoComplete="null"
              autoFocus
            />
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <TextField 
          
          margin="normal"
          required
          fullWidth
          id="date"
          label="Fecha de Expiracion"
          name="date"
          autoComplete="null"
          autoFocus
        />
        </Item>
        </Grid>

      </Grid>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Box>
  );
}