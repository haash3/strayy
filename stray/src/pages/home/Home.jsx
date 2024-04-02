import React from 'react'
import {Hero} from './components/Hero'
import { Featured } from './components/Featured'
import { Brands } from './components/Brands'
import { NewsLetter } from './components/NewsLetter'
import { Banner1 } from './components/Banner1'

export const Home = () => {
  return (
    <>
    <Hero />
    <Featured />
    <Brands/>
    <Banner1 />
    <NewsLetter />
    
    </>
  )
}

