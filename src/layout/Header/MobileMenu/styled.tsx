import { Box } from '@pangolindex/components'
import { MEDIA_WIDTHS } from 'src/theme'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
  display: flex;
  width: 50px;
`

export const Slider = styled(Box)<{ active: boolean }>`
  z-index: 2;
  position: absolute;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0px 20px;
  `};

  transform: ${({ active }) => (active ? 'translate(-90px, 0)' : 'translate(0, 0)')};

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    transform: ${({ active }) => (active ? 'translate(-190px, 0)' : 'translate(0, 0)')};
  }

  transition: transform 0.8s;

  display: flex;
`

export const Menu = styled(Box)<{ active: boolean }>`
  background-color: ${({ theme }) => theme.color2};
  height: 100vh;
  width: 200px;

  margin-left: ${({ active }) => (active ? '10px' : '120px')};

  @media (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    margin-left: ${({ active }) => (active ? '10px' : '30px')};
  }

  transition: margin 0.8s;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    left: 0px;
  `};
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

  top: 12px;

  &.clicked {
    left: 0px;
  }

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
