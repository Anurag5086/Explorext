import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}
