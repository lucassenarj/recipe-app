import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import { NavLink } from "react-router-dom";

export const Base = styled.div`
  flex-grow: 1;
`

export const NavBar = styled(Toolbar)`
  ${({ theme }) => `
    justify-content: space-between;

    ${theme.breakpoints.down("sm")} {
      justify-content: start;
    }
  `}
`;

export const NavMenu = styled(MenuList)`
  ${({ theme }) => `
    li {
      display: inline-block;
    }

    ${theme.breakpoints.down("sm")} {
      display: none;
    }
  `}
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #FFFFFF;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export const MenuButton = styled(IconButton)`
  ${({ theme }) => `
    ${theme.breakpoints.up("md")} {
      display: none;
    }
  `}
`;