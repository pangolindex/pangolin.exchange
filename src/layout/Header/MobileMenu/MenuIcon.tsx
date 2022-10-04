import React from 'react'
import { IconMenu } from './styled'

interface Props {
  active: boolean
  onClick: () => void
}

export const MenuIcon: React.FC<Props> = ({ active, onClick }) => {
  return (
    <IconMenu className={active ? 'clicked' : undefined} onClick={onClick}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </IconMenu>
  )
}
