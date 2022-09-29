import { Box, Text } from "@pangolindex/components";
import styled from "styled-components";

export const Root = styled(Box)`
  display: grid;
  gap: 40px;
  align-items: center;
  height: 100%;
`;

export const Main = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  height: 55vh;
`

export const CTAText = styled(Text)`
  color: ${({theme}) => theme.text1};
  font-size: 26px;
  height: fit-content;
  align-self: center;
`