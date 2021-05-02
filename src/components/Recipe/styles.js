import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

export const Actions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled(Card)`
  margin-bottom: 30px;
  min-height: 259px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  text-align: center;
  margin: 0px;
  line-height: 1.2rem;
`;