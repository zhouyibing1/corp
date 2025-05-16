import React from 'react'
import performanceSrc from '@/public/homeSrc.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performance'
}

export default function Performance() {
  return (
    <Hero imgUrl={performanceSrc} altTxt='Performance Image' content='Performance Performance Performance'/>
  )
}
