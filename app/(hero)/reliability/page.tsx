import React from 'react'
import reliabilitySrc from '@/public/homeSrc.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reliability'
}

export default function Reliability() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt='Reliability Image' content='Reliability Reliability Reliability'/>
  )
}

