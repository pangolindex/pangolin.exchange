import React from 'react'
import { Link, Links } from './styled'
import { LaunchAppButton } from 'src/components/LaunchAppButton'

export default function MenuItems() {
  return (
    <Links>
      <Link href="https://docs.pangolin.exchange/intro/dao" id="menu-about-dao">
        About DAO
      </Link>
      <Link href="https://app.pangolin.exchange" id="menu-exchange">
        Exchange
      </Link>
      <Link href="https://docs.pangolin.exchange/" id="menu-docs">
        Docs
      </Link>
      {/* <Link variant="primary" href="https://app.pangolin.exchange" id="menu-launch-app">
        Launch App
      </Link> */}
      <LaunchAppButton />
    </Links>
  )
}
