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
Discover the all-new Pangolin V3 with SuperPools and boosted rewards, now available.{' '}
        <APRWarningLink href="https://x.com/pangolindex/status/1947364720140275797?s=46&t=KzeLAMw_LZJm6gZHHNtlrQ" target="_blank" rel="noreferrer">
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
