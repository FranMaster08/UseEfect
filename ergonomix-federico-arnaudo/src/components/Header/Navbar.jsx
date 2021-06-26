import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    textAlign: "center",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}));

const Navbar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ergonomix
          </Typography>

          <Button variant="text" color="default">
            <ShoppingCartIcon
              aria-label="cart icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            ></ShoppingCartIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
