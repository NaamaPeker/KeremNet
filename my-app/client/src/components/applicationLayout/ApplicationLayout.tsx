import React, { ReactNode } from "react";
import { Button, AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./ApplicationLogo.png"; // ✅ Adjust if needed
import HomeIcon from "@mui/icons-material/Home";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const ApplicationLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout-container">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <img src={logo} alt="Logo" className="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KeremNet
          </Typography>
          <Button component={Link} to="/" color="inherit">
            <HomeIcon />
          </Button>
          <Button component={Link} to="/posts" color="inherit">
            Posts
          </Button>
        </Toolbar>
      </AppBar>

      <Container className="layout-content">{children}</Container>
    </Box>
  );
};

export default ApplicationLayout;