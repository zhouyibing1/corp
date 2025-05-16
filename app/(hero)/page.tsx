import React from 'react'
import homeSrc from '@/public/homeSrc.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Home Image' content='Professinal Cloud Hosting'/>
  )
}
