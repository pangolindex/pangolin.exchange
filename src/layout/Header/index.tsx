import React, { useState } from 'react'
import { useMedia } from 'react-use'
import { Box, Button } from '@pangolindex/components'
import { ReactComponent as Logo } from 'src/assets/svg/Logo.svg'
import MobileMenu from './MobileMenu'
import MenuItems from './MenuItems'
import { Wrapper } from './styled'
import { MEDIA_WIDTHS } from 'src/theme'

export default function Header() {
  const [activeMobile, setActiveMobile] = useState(false)

  const isMobile = useMedia(`(max-width: ${MEDIA_WIDTHS.upToMedium}px)`)

  return (
    <Wrapper>
      <Box mr="20px">
        <Button variant="plain" as="a" href="/" target="_self">
          <Logo />
        </Button>
      </Box>
      {isMobile ? <MobileMenu active={activeMobile} onChange={() => setActiveMobile(!activeMobile)} /> : <MenuItems />}
    </Wrapper>
  )
}
