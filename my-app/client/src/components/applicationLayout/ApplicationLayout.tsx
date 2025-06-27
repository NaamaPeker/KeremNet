import React, { ReactNode, useState } from "react";
import { TextField,Button, AppBar, Toolbar, Typography, Box, Container, Stack } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "./ApplicationLogo.png";
import HomeIcon from "@mui/icons-material/Home";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const ApplicationLayout: React.FC<LayoutProps> = ({ children }) => {
  const [inputId, setInputId] = useState<number>(0);
  const [inputAuthor, setInputAuthor] = useState<string>('');
  const [showIdInput, setShowIdInput] = useState<boolean>(false);
  const [showAuthorInput, setShowAuthorInput] = useState<boolean>(false);
  const navigate = useNavigate();
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
      <Stack direction={"row"} spacing={2}>
        <Link to="/posts"><button>see all Posts</button></Link>
        {!showIdInput ? (
  <button onClick={() => setShowIdInput(true)}>See Post by id</button>
) : (
  <>
    <TextField
      label="Post ID"
      value={inputId}
      onChange={(e) => setInputId(Number(e.target.value))}
    />
    <button
      onClick={() => {
        navigate(`/post/${inputId}`);
        setShowIdInput(false);
      }}
    >
      Submit
    </button>
  </>
)}

{!showAuthorInput ? (
  <button onClick={() => setShowAuthorInput(true)}>See Post by Author</button>
) : (
  <>
    <TextField
      label="Author name"
      value={inputAuthor}
      onChange={(e) => setInputAuthor(e.target.value)}
    />
    <button
      onClick={() => {
        navigate(`/posts/${inputAuthor}`);
        setShowAuthorInput(false);
        setInputAuthor('');
      }}
    >
      Submit
    </button>
  </>
)}
      <Link to="/authors"><button>see all authors</button></Link>
        <Link to="/Running"><button>check if server is up</button></Link>
      </Stack>
      <Container className="layout-content">{children}</Container>
    </Box>
  );
};

export default ApplicationLayout;