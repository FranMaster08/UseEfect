import React, { useState } from "react";
import { Button, ButtonGroup, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


const ItemCount = ({ stock }) => {
  const [num, setnum] = useState(0);

  const onAdd = () => {
  
    if (num<stock) 
      setnum(num + 1);
    
  };

  const onRemove = () => {

    if (num > 0) 
      setnum(num - 1);
    
  };
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button onClick={onRemove} color="secondary">
          <RemoveIcon />
        </Button>
        <Box
          component="div"
          display="inline"
          p={1}
          m={1}
          bgcolor="background.paper"
          textAlign="center"
          value={stock}
        >
          {num}
        </Box>
        <Button onClick={onAdd} color="primary">
          <AddIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
