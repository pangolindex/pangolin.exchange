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

//https://codepen.io/tt0113243/pen/oexJzE
export const IconMenu = styled.div`
  right: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 29px;
  height: 29px;
  border-radius: 29px;
  padding: 8px;
  background-color: ${({ theme }) => theme.primary1};
  cursor: pointer;

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 3px;
    background-color: ${({ theme }) => theme.black};
    border-radius: 3px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: margin 0.4s ease 0.4s, width 0.4s ease;
    -moz-transition: margin 0.4s ease 0.4s, width 0.4s ease;
    -o-transition: margin 0.4s ease 0.4s, width 0.4s ease;
    transition: margin 0.4s ease 0.4s, width 0.4s ease;
  }

  .dot:nth-of-type(1) {
    margin-top: -6px;
    margin-left: -6px;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    -o-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .dot:nth-of-type(2) {
    margin-top: -6px;
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -moz-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    -o-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .dot:nth-of-type(3) {
    margin-top: -6px;
    margin-left: 6px;
  }

  .dot:nth-of-type(4) {
    margin-left: -6px;
  }

  .dot:nth-of-type(6) {
    margin-left: 6px;
  }
  .dot:nth-of-type(7) {
    margin-top: 6px;
    margin-left: -6px;
  }

  .dot:nth-of-type(8) {
    margin-top: 6px;
  }

  .dot:nth-of-type(9) {
    margin-top: 6px;
    margin-left: 6px;
  }

  &.clicked .dot {
    -webkit-transition: margin 0.4s ease, width 0.4s ease 0.4s;
    -moz-transition: margin 0.4s ease, width 0.4s ease 0.4s;
    -o-transition: margin 0.4s ease, width 0.4s ease 0.4s;
    transition: margin 0.4s ease, width 0.4s ease 0.4s;
    margin-left: 0;
    margin-top: 0;
  }

  &.clicked .dot:nth-of-type(1) {
    width: 23px;
  }

  &.clicked .dot:nth-of-type(2) {
    width: 23px;
  }
`
