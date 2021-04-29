import styled from "styled-components";
import MenuList from "@material-ui/core/MenuList";
import { NavLink } from "react-router-dom";

export const Base = styled.div`
  flex-grow: 1;
`
export const NavMenu = styled(MenuList)`
  li {
    display: inline-block;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #FFFFFF;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;
