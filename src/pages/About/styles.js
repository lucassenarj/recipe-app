import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const Content = styled(Container)`
  margin: 40px auto;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-between;
  height: 100%;
`;
