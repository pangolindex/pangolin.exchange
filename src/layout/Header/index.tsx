import React, { useState } from 'react'
import { useMedia } from 'react-use'
import { Box, Button } from '@pangolindex/components'
import logoUrl from 'src/assets/svg/new-logo-dark.svg'
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
          <img src={logoUrl} alt="Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </Button>
      </Box>
      {isMobile ? <MobileMenu active={activeMobile} onChange={() => setActiveMobile(!activeMobile)} /> : <MenuItems />}
    </Wrapper>
  )
}
