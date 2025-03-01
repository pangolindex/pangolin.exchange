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
      Please be advised that $PNG has reached its final circulating supply of 230 million and standard farms are no longer in force or emitting PNG rewards.
          We invite you to visit our new app, currently in Beta, to discover any ongoing SuperFarms. These are temporary farms that issue dual rewards.{' '}
          <APRWarningLink href="https://beta.pangolin.exchange/superfarmsv2" target="_blank" rel="noreferrer">
            Explore SuperFarms
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
