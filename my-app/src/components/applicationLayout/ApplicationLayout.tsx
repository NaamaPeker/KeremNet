import React, { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import "./layout.css";
import logo from "../applicationLayout/ApplicationLogo.png"; 

interface LayoutProps {
  children: ReactNode;
}

const ApplicationLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout-container">
      <AppBar position="static" className="appbar" >
        <Toolbar>
          <img src={logo} alt="App Logo" className="logo" />
          <Typography variant="h6" component="div">
            KeremNet
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="layout-content">
        {children}
      </Container>
    </Box>
  );
};

export default ApplicationLayout;