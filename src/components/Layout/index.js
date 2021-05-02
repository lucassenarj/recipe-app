import React, { useEffect, useReducer, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Drawer } from "./../";
import { Link, MenuButton, NavBar, NavMenu } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FavoritesContext from "./../../store/context/favorites";
import favoritesReducer from "./../../store/reducers/favorites";
import { Helmet } from "react-helmet";
import { favoritesSetList } from "./../../store/actions/favorites";
import { menuItems } from "./../../utils/constants";


function Layout({ children, title }) {
  const theme = useTheme();
  const [display, setDisplay] = useState(false);
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
      favoritesSetList(favorites, dispatch);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <FavoritesContext.Provider value={{ favorites, dispatch }}>
          <Helmet>
            <title>{ title } | Recipe App</title>
          </Helmet>
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
        </FavoritesContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Layout;
