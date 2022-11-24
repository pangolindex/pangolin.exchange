import React from 'react'
import { Link, Links } from './styled'

export default function MenuItems() {
  return (
    <Links>
      <Link href="https://docs.pangolin.exchange/pangolin/all-chains/team" id="menu-about-us">
        About us
      </Link>
      <Link href="https://app.pangolin.exchange" id="menu-exchange">
        Exchange
      </Link>
      <Link href="https://info.pangolin.exchange/" id="menu-analytics">
        Analytics
      </Link>
      <Link href="https://docs.pangolin.exchange/" id="menu-docs">
        Docs
      </Link>
      <Link variant="primary" href="https://app.pangolin.exchange" id="menu-launch-app">
        Launch App
      </Link>
    </Links>
  )
}
