import React from "react";
import Box from "@mui/material/Box";
import ExpandIcon1 from "../assets/folder-open.png";

function ExpandIcon() {
  return (
    <div>
      <Box
        component="img"
        sx={{
          height: 20,
          width: 20,
          maxHeight: { xs: 20, md: 20 },
          maxWidth: { xs: 20, md: 20 },
        }}
        src={`${ExpandIcon1}`}
      />
    </div>
  );
}

export default ExpandIcon;
