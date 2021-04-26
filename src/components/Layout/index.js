import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Drawer } from "./../";
import { Base } from "./styles";

function Layout({ children, title }) {
  const [display, setDisplay] = useState(false);

  return (
    <Base>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setDisplay(!display)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer display={display} handle={() => setDisplay(!display)} />
      <Container>
        { children }
      </Container>
    </Base>
  );
};

export default Layout;
