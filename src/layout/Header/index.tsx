import React, { useState } from 'react'
import { useMedia } from 'react-use'
import { Box, Button } from '@pangolindex/components'
import { ReactComponent as Logo } from 'src/assets/svg/Logo.svg'
import { Link, Links } from './styled'
import { MenuIcon } from './MenuIcon'

export default function Header() {
  const [activeMobile, setActiveMobile] = useState(false)

  const isMobile = useMedia(`(max-width: 1020px)`)

  const Menu = () => (
    <Links>
      <Link href="https://docs.pangolin.exchange/pangolin/all-chains/team">About us</Link>
      <Link href="https://app.pangolin.exchange">Exchange</Link>
      <Link href="https://info.pangolin.exchange/">Analytics</Link>
      <Link href="https://docs.pangolin.exchange/">Docs</Link>
      <Link variant="primary" href="https://app.pangolin.exchange">
        Lauch App
      </Link>
    </Links>
  )

  const MobileMenu = () => (
    <Box display="flex">
      <MenuIcon active={activeMobile} handleMobileMenu={() => setActiveMobile(!activeMobile)} />
    </Box>
  )

  return (
    <Box width="100%" display="flex" justifyContent="space-between" paddingY="50px" height="15vh">
      <Box height="max-content">
        <Button variant="plain" as="a" href="/" target="_self">
          <Logo />
        </Button>
      </Box>
      {isMobile ? <MobileMenu /> : <Menu />}
    </Box>
  )
}
