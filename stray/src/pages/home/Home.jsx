import React from 'react'
import {Hero} from './components/Hero'
import { Featured } from './components/Featured'
import { Brands } from './components/Brands'
import { NewsLetter } from './components/NewsLetter'

export const Home = () => {
  return (
    <>
    <Hero />
    <Featured />
    <Brands/>
    <NewsLetter />
    </>
  )
}

