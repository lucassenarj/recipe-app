import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;
