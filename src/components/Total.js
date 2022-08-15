import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

}))

const Total =() =>{
    

    return (
        <div>

          {accounting.formatMoney(50,"$")}
          <Button>
            Pagar
          </Button>

        </div>

    )
}