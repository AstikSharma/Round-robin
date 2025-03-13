import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        mb: 10,
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF1E56" }}>
          LOGO
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <HelpOutlineIcon sx={{ color: "black" }} />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ display: { xs: "block", sm: "none" }, color: "black", fontWeight: 400, fontSize:"0.8rem" }}
          >
            Open Requests
          </Typography>
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              width="20"
              style={{ marginRight: 5 }}
            />
            Deutsch | EUR
          </Button>
          <IconButton sx={{ backgroundColor: "#f5f5f5", borderRadius: "20px", padding: "5px 10px" }}>
            <AccountCircleIcon sx={{ color: "black", marginRight: "5px" }} />
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
