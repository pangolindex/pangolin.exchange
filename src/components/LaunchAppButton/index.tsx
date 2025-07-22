import { Button } from '@pangolindex/components'
import React from 'react'
import styled from 'styled-components'

const StyledLaunchAppWrapper = styled.div`
  position: relative;
`

const StyledLaunchAppButton = styled(props => (
  <Button
    {...props}
    as="a"
    href="https://app.pangolin.exchange"
    target="_blank"
    variant={props.variant ?? 'plain'}
    color={props.variant === 'primary' ? 'eerieBlack' : 'text1'}
    width="max-content"
    padding={props.variant === 'primary' ? '0px 40px' : undefined}
  />
))`
  font-size: 18px;
`

export const LaunchAppButton = () => {
  return (
    <StyledLaunchAppWrapper>
      <StyledLaunchAppButton variant="primary">
        Launch app
      </StyledLaunchAppButton>
    </StyledLaunchAppWrapper>
  )
}
