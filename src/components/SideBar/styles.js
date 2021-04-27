import styled from "styled-components";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Recipes = styled(List)`
`;

export const Recipe = styled(Chip)`
  margin: 5px !important;
`;