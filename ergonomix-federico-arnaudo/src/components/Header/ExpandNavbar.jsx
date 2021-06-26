import React from "react";
import Lista from "../List/Lista";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const ExpandNavBar = ({ variant, open, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose ? onClose : null}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <Lista />
    </Drawer>
  );
};

export default ExpandNavBar;
