import React from "react";
import { Grid } from "@material-ui/core";
import Item from "../Items/Item";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image: "https://dummyimage.com/300",
    stock: 5,
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$10",
    image: "https://dummyimage.com/300",
    stock: 0,
  },
];

const ItemList = () => {
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
