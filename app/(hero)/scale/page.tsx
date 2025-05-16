import React from 'react'
import scaleSrc from '@/public/homeSrc.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Scale'
}

export default function Scale() {
  return (
    <Hero imgUrl={scaleSrc} altTxt='Scale Image' content='Scale Scale Scale'/>
  )
}
