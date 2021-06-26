import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import ItemCount from "./ItemCount";
import useStyles from "./styles.js";

const Item = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
        <ItemCount stock={product.stock} />
      </CardActions>
    </Card>
  );
};

export default Item;
