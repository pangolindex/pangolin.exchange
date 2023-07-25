import React from 'react'
import { Box, Button, Text } from '@pangolindex/components'
import styled from 'styled-components'

export const Root = styled(Box)`
  display: grid;
  gap: 40px;
  align-items: center;
  height: 100%;
  margin-bottom: 50px;
`

export const Main = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  min-height: 55vh;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 1fr;
    justify-items: center;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    img {
      width: 100%;
    }
  `}
`

export const SectionText = styled(Text)`
  color: ${({ theme }) => theme.text1};
  height: fit-content;
  align-self: center;
`

export const Section = styled(Box)`
  background-color: ${({ theme }) => theme.color3};
  display: flex;
  padding: 40px;
  justify-content: space-between;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
    a {
      margin-top: 20px;
    }
  `}
`

export const PartnersSection = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
  justify-content: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: repeat(auto-fit, 300px);
  `}
`

export const Item = styled(props => (
  <Button {...props} width="400px" as="a" variant="plain" target="_self">
    {props.children}
  </Button>
))`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: ${({ theme }) => theme.color3};
  padding: 20px;
  border-radius: 10px;
  height: max-content;
`

export const ItemText = styled(Text)`
  color: ${({ theme }) => theme.color1};
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  flex-grow: 1;
`
