import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpIcon from "@material-ui/icons/Help";

const Lista = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Store" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Q&A" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Lista;
