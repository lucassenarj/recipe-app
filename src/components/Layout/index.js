import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer } from "./../";
import { Base, NavMenu } from "./styles";
import { menuItems } from "./../../utils/constants";

function Layout({ children, title }) {
  const [display, setDisplay] = useState(false);

  return (
    <Base>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton onClick={() => setDisplay(!display)} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <NavMenu>
              {
                menuItems.map(({ path, title }) => (
                  <Link key={title} to={path}>
                    <MenuItem>{ title }</MenuItem>
                  </Link>
                ))
              }
            </NavMenu>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer display={display} handle={() => setDisplay(!display)} />
      { children }
    </Base>
  );
};

export default Layout;
