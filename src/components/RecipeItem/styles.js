import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

export const Actions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;