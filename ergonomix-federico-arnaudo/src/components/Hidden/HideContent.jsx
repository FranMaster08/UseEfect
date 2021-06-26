import React from "react";
import { withWidth, Typography, Hidden } from "@material-ui/core";

const HideContent = ({ width }) => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        {width}
      </Typography>

      <Hidden></Hidden>
    </div>
  );
};

export default withWidth()(HideContent);
