import { Box, Text } from '@pangolindex/components'
import styled from 'styled-components'

export const Root = styled(Box)`
  display: grid;
  gap: 40px;
  align-items: center;
  height: 100%;
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
  aligh-items: center;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: grid;
    gap: 20px;
    justify-items: center;
  `}
`
