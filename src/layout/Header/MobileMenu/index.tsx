import React from 'react'
import MenuItems from '../MenuItems'
import { MenuIcon } from './MenuIcon'
import { Menu, Slider, Wrapper } from './styled'

interface Props {
  active: boolean
  onChange: () => void
}

export default function MobileMenu({ active, onChange }: Props) {
  return (
    <Wrapper>
      <Slider active={active}>
        <MenuIcon active={active} onClick={onChange} />
        <Menu active={active}>
          <MenuItems />
        </Menu>
      </Slider>
    </Wrapper>
  )
}
