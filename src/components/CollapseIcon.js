import React from "react";
import Box from "@mui/material/Box";
import CollapseFolder from "../assets/folder-closed.png";

function CollapseIcon() {
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
        src={`${CollapseFolder}`}
      />
    </div>
  );
}

export default CollapseIcon;
