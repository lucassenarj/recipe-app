import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
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

export const Video = styled(CardMedia)`
  ${({ theme }) => `
    height: 200px;
    ${theme.breakpoints.up("sm")} {
      height: 450px;
    }
  `}
`;

export const VideoCard = styled(Card)`
  margin: 20px auto;
`;