import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}>
          <Menu/>
        </IconButton>
        <Typography variant='h6' color='inherit' component='div'>
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
