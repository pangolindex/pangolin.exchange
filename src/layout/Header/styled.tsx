import React from 'react'
import { Box, Button } from '@pangolindex/components'
import styled from 'styled-components'

export const Links = styled(Box)`
  display: flex;
  gap: 40px;
  align-items center;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `};
`

export const Link = styled(props => (
  <Button
    {...props}
    as="a"
    variant={props.variant ?? 'plain'}
    color={props.variant === 'primary' ? 'eerieBlack' : 'text1'}
    target="_self"
    width="max-content"
    padding={props.variant === 'primary' ? '0px 40px' : undefined}
  />
))`
  font-size: 18px;
`

export const Wrapper = styled(Box)`
  padding: 50px 0px;
  width: 100%;
  heigth: 15vh;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 50px 0px 50px 0px;
  `};
`
