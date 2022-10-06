import { Box } from '@pangolindex/components'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
  display: flex;
  width: 50px;
`

export const Slider = styled(Box)<{ active: boolean }>`
  z-index: 2;
  position: absolute;
  transform: ${({ active }) => (active ? 'translate3d(-200px, 0, 0)' : 'translate3d(0, 0, 0)')};
  transition: transform 0.8s;

  display: flex;

  > * {
    &:first-child {
      margin-right: ${({ active }) => (active ? '0px' : '25px')};
    }
  }
`

//https://codepen.io/tt0113243/pen/oexJzE
export const IconMenu = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 30px;
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
