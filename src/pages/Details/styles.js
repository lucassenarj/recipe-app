import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const Content = styled(Container)`
  margin: -80px auto 20px;
`;

export const Thumbnail = styled(Card)`
  border: none !important;
  border-radius: 0px !important;
`;

export const Text = styled(Typography)`
  margin: 10px auto !important;
`;