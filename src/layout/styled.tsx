import { Box } from '@pangolindex/components'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 100px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0px 20px;
  `};

  overflow-x: hidden;
`

export const Body = styled(Box)`
  width: 100%;
  flex-grow: 1;
`
