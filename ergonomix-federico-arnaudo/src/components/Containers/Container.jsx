import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import ItemList from "../List/ItemList";
import ExpandNavbar from "../Header/ExpandNavbar";
import { makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Hidden xsDown>
        <ExpandNavbar variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <ExpandNavbar
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
        />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <ItemList />
      </div>
    </div>
  );
};

export default Container;
