import React from 'react'
import { Box, Button, Text } from '@pangolindex/components'
import { Main, Root, Section, SectionText } from './styled'
import homeImage from 'src/assets/images/home.png'

export default function Home() {
  const LauchAppButton = () => (
    <Button
      as="a"
      variant="primary"
      color="eerieBlack"
      target="_self"
      width="max-content"
      padding="0px 60px"
      href="https://app.pangolin.exchange"
    >
      <Text color="eerieBlack" fontSize={[14, 18]}>
        Lauch App
      </Text>
    </Button>
  )

  return (
    <Root>
      <Main>
        <Box>
          <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
            <Text color="primary" fontWeight="700" fontSize={[36, 50]}>
              Your Gateway to A Multi-Chain Future
            </Text>
            <Text color="text1" fontSize={[14, 18]}>
              Pangolin is a multichain decentralized cryptocurrency exchange (DEX). Through advanced tooling, deep
              liquidity, and smooth onboarding, Pangolin offers easy swaps and great tools for projects and traders.
            </Text>
          </Box>
        </Box>
        <img src={homeImage} alt="Charts" />
      </Main>
      <Section>
        <SectionText fontSize={[18, 26]} textAlign="center">
          Try our one of a kind multi-chain experience in all Defi!
        </SectionText>
        <LauchAppButton />
      </Section>
    </Root>
  )
}
