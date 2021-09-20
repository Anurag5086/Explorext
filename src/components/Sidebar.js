import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import FileTree from "./FileTree";
import { Button } from "@mui/material";
import Logo from "../assets/logo.png";

const drawerWidth = 300;

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2c2d31",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            padding: "20px",
          }}
        >
          <img
            src={Logo}
            alt=""
            width="40px"
            height="40px"
            style={{ alignContent: "center" }}
          />
          <span
            style={{ marginLeft: "40px", fontSize: "25px", fontWeight: "700" }}
          >
            ExploreXT
          </span>
        </div>
        <FileTree />
        <Button variant="contained">Lock</Button>
      </Drawer>
    </Box>
  );
}
