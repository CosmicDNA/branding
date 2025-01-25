import React from 'react'
import { Logo } from './Logo'

type Props = {
  date: string
  year: string
  link1: React.ReactNode
  link2: React.ReactNode
}

export function Footer({ date, year, link1, link2 }: Props) {
  return (
    <div className="cosmicdna-menu">
      <div>
        <Logo style={{ width: 42, height: 42 }} />
      </div>
      <div>
        <span>
          <b>cosmicdna</b>
        </span>
        <a href="https://www.cosmicdna.co.uk">www.cosmicdna.co.uk</a>
        <a href="https://x.com/ukCosmicDNA">@ukCosmicDNA</a>
      </div>
      <div>
        <span>{date}</span>
        <span>{year}</span>
      </div>
      {/* <div>
        <span>Open Source</span>
        <span>Developer collective</span>
      </div> */}
      <div style={{ width: '100%' }} />
      <div>
        <b>{link1}</b>
        {link2}
      </div>
    </div>
  )
}
