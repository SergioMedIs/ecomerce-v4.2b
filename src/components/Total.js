import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/core';
import {Link }from 'react-router-dom'

const useStyles = makeStyles((theme)=>({

}))

export default function Total() {
    

    return (
        <div>

          {accounting.formatMoney(50,"$")}
           
          <Link style={{textDecoration:"none", color:"white"}} to={'/Pago01'}>
      <Button size="small">Continuar</Button>
           </Link>

         
        </div>
        

    )
}