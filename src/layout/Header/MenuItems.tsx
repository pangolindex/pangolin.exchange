import React from 'react'
import { Link, Links } from './styled'

export default function MenuItems() {
  return (
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
}
