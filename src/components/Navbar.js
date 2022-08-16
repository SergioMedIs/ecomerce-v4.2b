import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import SingUp from './SingIn';
import CarCheck from './CarCheck';
/* import { makeStyles } from '@material-ui/core'; */
import { styled } from '@mui/material/styles';
import { useStateValue } from './../StateProvider';


export default function Navbar() {
  const [{basket},dispatch]=useStateValue();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="fixed" 
      color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{textDecoration:"none", color:"white"}} to='/home'>CyberZilla</Link> 
          </Typography>
         
          <IconButton> <Link style={{textDecoration:"none", color:"white"}} to={"/SignUp"} >
          <Typography color={'whitesmoke'} variant="h6" component="div" sx={{ flexGrow: -1}}>
         SignUp
          </Typography>
          </Link>
          </IconButton>
          <Button color="inherit">
          </Button>
          <IconButton aria-label='show cart items' color='inherit'>
           <Link style={{textDecoration:"none", color:"white"}} to={"/carrito"} >
                  <Badge badgeContent={basket?.length} color='secondary'>
                    <ShoppingCart fontSize='large' color='white' />
                  </Badge>
                  </Link>
                </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
