import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
import { accounting } from 'accounting';
import { render } from '@testing-library/react';
import products from './../product-data';



export default function Product({
  product: { id, name, productType, image, price, rating, description },
}) {

  return (
    
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="product"
        height="140"
        image= {image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
    {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {description} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {accounting.formatMoney(price, "$")}
       </Typography>
      </CardContent>
      <CardActions>
{/*         <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
      
    </Card>
  );
}
