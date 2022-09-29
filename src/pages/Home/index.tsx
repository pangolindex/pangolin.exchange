import React from 'react'
import { Box, Button, Text } from '@pangolindex/components'
import { CTAText, Main, Root } from './styled'
import homeImage from 'src/assets/images/home.png'

export default function Home() {
  return (
    <Root>
      <Main>
        <Box>
          <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
            <Text color="primary" fontWeight="700" fontSize="50px">
              Your Gateway to A Multi-Chain Future
            </Text>
            <Text color="text1" fontSize="18px">
              Pangolin is a multichain decentralized cryptocurrency exchange (DEX). Through advanced tooling, deep
              liquidity, and smooth onboarding, Pangolin offers easy swaps and great tools for projects and traders.
            </Text>
          </Box>
        </Box>
        <img src={homeImage} alt="Charts" />
      </Main>
      <Box
        bgColor="color3"
        display="flex"
        padding="40px"
        justifyContent="space-between"
        borderRadius="20px"
        alighItems="center"
      >
        <CTAText>Try our one of a kind multi-chain experience in all Defi!</CTAText>
        <Button
          as="a"
          variant="primary"
          color="eerieBlack"
          target="_self"
          width="max-content"
          padding="0px 60px"
          href="https://app.pangolin.exchange"
        >
          <Text color="eerieBlack" fontSize="18px">
            Lauch App
          </Text>
        </Button>
      </Box>
    </Root>
  )
}
