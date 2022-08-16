import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import {Link }from 'react-router-dom'
import {getBasketTotal} from './../reducer'
import { useStateValue, dispatch }   from '../StateProvider';



export default function Total() {
    
    const [{basket}]=useStateValue();
    return (
        <div>

<h5>TOTAL :</h5>  
{accounting.formatMoney(getBasketTotal(basket),"$")}
           
          <Link style={{textDecoration:"none", color:"white"}} to={'/Pago01'}>
      <Button size="small">Continuar</Button>
           </Link>

         
        </div>
        

    )
}