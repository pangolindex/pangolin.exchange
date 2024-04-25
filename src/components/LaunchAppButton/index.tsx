import { Button } from '@pangolindex/components'
import React, { useState } from 'react'
import { Link } from 'src/layout/Header/styled'
import styled from 'styled-components'

const StyledLaunchAppWrapper = styled.div`
  position: relative;
`

const StyledLaunchAppButton = styled(props => (
  <Button
    {...props}
    as="button"
    variant={props.variant ?? 'plain'}
    color={props.variant === 'primary' ? 'eerieBlack' : 'text1'}
    width="max-content"
    padding={props.variant === 'primary' ? '0px 40px' : undefined}
  />
))`
  font-size: 18px;
`

const StyledLaunchAppDropdown = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.eerieBlack};
  border-radius: 4px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 12px 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;

  ${({ isActive }) => !isActive && 'opacity: 0; visibility: hidden; pointer-events: none; top: 200%;'}
`

const StyledLink = styled(Link)`
  font-size: 14px;
  height: auto;
  padding: 8px 0;
  transition: color 0.4s;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`

const Badge = styled.div`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  padding: 4px 8px;
  margin-left: 10px;
  position: relative;
`

const Pulse = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.primary1};
  border-radius: 50%;
  top: 50%;
  left: -22px;
  transform: translateY(-50%);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.8) translateY(-50%);
    }
    50% {
      transform: scale(1) translateY(-50%);
    }
    100% {
      transform: scale(0.8) translateY(-50%);
    }
  }
`

export const LaunchAppButton = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <StyledLaunchAppWrapper>
      <StyledLaunchAppButton variant="primary" onClick={toggleOpen}>
        Launch app
      </StyledLaunchAppButton>

      <StyledLaunchAppDropdown isActive={open}>
        <StyledLink variant="plain" color="primary" href="https://app.pangolin.exchange">
          Pangolin app
        </StyledLink>
        <StyledLink variant="plain" color="primary" href="https://beta.pangolin.exchange">
          <Pulse />
          New version <Badge>Beta</Badge>
        </StyledLink>
      </StyledLaunchAppDropdown>
    </StyledLaunchAppWrapper>
  )
}
