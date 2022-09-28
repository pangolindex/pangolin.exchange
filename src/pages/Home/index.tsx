import { Box, Button, Text } from "@pangolindex/components";
import { Main, Root } from "./styled";
import homeImage from "src/assets/images/home.png";

export default function Home() {
  return (
    <Root>
      <Main>
        <Box>
          <Text color="primary" fontWeight="700" fontSize="70px">
            Your Gateway to A Multi-Chain Future
          </Text>
          <Text color="text1" fontSize="18px">
            Pangolin is a multichain decentralized cryptocurrency exchange
            (DEX). Through advanced tooling, deep liquidity, and smooth
            onboarding, Pangolin offers easy swaps and great tools for projects
            and traders.
          </Text>
        </Box>
        <img src={homeImage} alt="Charts" />
      </Main>
      <Box
        bgColor="color3"
        display="flex"
        padding="40px"
        justifyContent="space-between"
        borderRadius="20px"
      >
        <Text color="text1" fontSize="36px">Try our one of a kind multi-chain experience in all Defi!</Text>
        <Button
          as="a"
          variant="primary"
          color="eerieBlack"
          target="_self"
          width="max-content"
          padding="20px 60px"
        >
          Lauch App
        </Button>
      </Box>
    </Root>
  );
}
