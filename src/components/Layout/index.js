import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Drawer } from "./../";
import { Base, Link, MenuButton, NavBar, NavMenu } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { menuItems } from "./../../utils/constants";


function Layout({ children, title }) {
  const theme = useTheme();
  const [display, setDisplay] = useState(false);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Base>
          <CssBaseline />
          <AppBar position="static">
            <Container maxWidth="lg">
              <NavBar>
                <Hidden mdUp implementation="css">
                  <MenuButton
                    onClick={() => setDisplay(!display)}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </MenuButton>
                </Hidden>
                <Typography variant="h6" noWrap>
                  { title }
                </Typography>
                <NavMenu>
                  {
                    menuItems.map(({ path, title }) => (
                      <Link key={title} to={path}>
                        <MenuItem>{ title }</MenuItem>
                      </Link>
                    ))
                  }
                </NavMenu>
              </NavBar>
            </Container>
          </AppBar>
          <Drawer display={display} handle={() => setDisplay(!display)} />
          { children }
        </Base>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Layout;
