import { Box, Button } from "@pangolindex/components";
import styled from "styled-components";

export const Links = styled(Box)`
  display: flex;
  gap: 40px;
  align-items center;
`;

export const Link = styled((props) => (
  <Button
    {...props}
    as="a"
    variant={props.variant ? props.variant : "plain"}
    color={props.variant === "primary" ? "eerieBlack" : "text1"}
    target="_self"
    width="max-content"
    padding={props.variant === "primary" ? "0px 40px" : undefined}
  />
))`
  font-size: 18px;
`;
