import React, { useState,useEffect } from "react";
import { Grid } from "@material-ui/core";
import Item from "../Items/Item";
import axios from "axios"

const ItemList = () => {
  const [ products,setProduct]=useState([])
  useEffect(()=>{
 
    let config = {
      method: 'get',
      url: 'https://run.mocky.io/v3/a32a8025-5011-4b2c-b6b9-2caca3e32ebf',
     
    };
    
    axios(config)
    .then( response=> {
      let destacados=response.data.filter(x=>x.ondemand==true)
      setProduct(destacados)
     
    })
    .catch(error=> {
      console.log(error);
    });   

  })
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ItemList;
