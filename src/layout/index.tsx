import React from 'react'
import Header from './Header'
import { Body, Wrapper } from './styled'
import styled from 'styled-components'

const APRWarning = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.black};
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`

const APRWarningLink = styled.a`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  text-decoration: underline;
`

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <APRWarning>
        Please be advised that $PNG farming rewards have ceased and the APRs shown are inaccurate. Pangolin V3 will be
        launching soon.{' '}
        <APRWarningLink href="https://x.com/pangolindex/status/1788647901607985647" target="_blank" rel="noreferrer">
          See more details here
        </APRWarningLink>
        .
      </APRWarning>
      <Wrapper>
        <Header />
        <Body>{children}</Body>
      </Wrapper>
    </>
  )
}

export default Layout
