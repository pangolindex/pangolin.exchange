import React from 'react'
import { Box, Button, Text } from '@pangolindex/components'
import { Item, Main, PartnersSection, Root, Section, SectionText } from './styled'
import homeImage from 'src/assets/images/home.png'
import { useGetPartners } from 'src/hooks'
import { chainUrl, directusBaseURL } from 'src/constants'
import { ALL_CHAINS } from '@pangolindex/sdk'

export default function Home() {
  const { data: partners } = useGetPartners()

  const LauchAppButton = () => (
    <Button
      as="a"
      variant="primary"
      color="eerieBlack"
      target="_self"
      width="max-content"
      padding="0px 60px"
      href="https://app.pangolin.exchange"
      id="lauch-app"
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
              Your Digital Asset Gateway
            </Text>
            <Text color="text1" fontSize={[14, 18]}>
              Pangolin is a multichain decentralized digital assets exchange (DEX). Through advanced tooling, deep
              liquidity, and smooth onboarding, Pangolin offers easy swaps and great tools for projects and traders.
            </Text>
          </Box>
        </Box>
        <img src={homeImage} alt="Charts" />
      </Main>
      <Section>
        <SectionText fontSize={[18, 26]} textAlign="center">
          You have to see it to believe it
        </SectionText>
        <LauchAppButton />
      </Section>
      <Box width="100%" display="grid">
        <Text color="text1" fontSize="32px" fontWeight="700" textAlign="center">
          Backed By World-Class Partner
        </Text>
        <PartnersSection>
          {partners &&
            partners.map((partner, index) => (
              <Item href={partner.url} key={index} id={`partner-${partner.name.toLowerCase()}`}>
                <img
                  src={`${directusBaseURL}/assets/${partner.logo}`}
                  style={{ height: '100px', marginRight: '10px', borderRadius: '50%' }}
                />
                <Text color="text1" fontWeight="700" fontSize="24px">
                  {partner.name}
                </Text>
              </Item>
            ))}
        </PartnersSection>
      </Box>
      <Box width="100%" display="grid">
        <Text color="text1" fontSize="32px" fontWeight="700" textAlign="center">
          We are live on these networks
        </Text>
        <PartnersSection>
          {ALL_CHAINS.filter(chain => chain.pangolin_is_live && chain.mainnet).map((chain, index) => (
            <Item href={chainUrl[chain.chain_id]} key={index} id={`chain-${chain.name.toLowerCase()}`}>
              <img src={chain.logo} style={{ height: '100px', marginRight: '10px', borderRadius: '50%' }} />
              <Text color="text1" fontWeight="700" fontSize="24px">
                {chain.name}
              </Text>
            </Item>
          ))}
        </PartnersSection>
      </Box>
    </Root>
  )
}
