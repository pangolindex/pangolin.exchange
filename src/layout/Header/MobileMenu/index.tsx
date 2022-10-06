import { Box } from '@pangolindex/components'
import React from 'react'
import MenuItems from '../MenuItems'
import { MenuIcon } from './MenuIcon'
import { Slider, Wrapper } from './styled'

interface Props {
  active: boolean
  onChange: () => void
}

export default function MobileMenu({ active, onChange }: Props) {
  return (
    <Wrapper>
      <Slider active={active}>
        <MenuIcon active={active} onClick={onChange} />
        <Box bgColor="color2" paddingLeft="20px">
          <MenuItems />
        </Box>
      </Slider>
    </Wrapper>
  )
}
