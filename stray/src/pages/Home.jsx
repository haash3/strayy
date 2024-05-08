import React from 'react'
import {Hero} from '../categories/home/Hero'
import {Collections} from '../categories/home/Collections'
// import { Brands } from '../categories/home/Brands'
// import { NewsLetter } from '../categories/home/NewsLetter'
import { ToteBagsSection } from '../categories/home/ToteBagsSection'
import { NewArrivals } from '../categories/home/NewArrivals'

export const Home = () => {
  return (
    <>
    <Hero />
    <Collections />
    <NewArrivals />
    <ToteBagsSection />
    {/* <Brands/>
    <Banner1 />
    
    <NewsLetter /> */}
    
    </>
  )
}

