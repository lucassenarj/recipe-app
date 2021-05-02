import styled from "styled-components";

export const NoResult = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 800px;
    ${theme.breakpoints.down("xs")} {
      min-height: 700px;
    }
  `}
`;
