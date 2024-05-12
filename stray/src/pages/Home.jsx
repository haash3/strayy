import React from 'react'
import {Hero} from '../categories/home/Hero'
import {Collections} from '../categories/home/Collections'
// import { NewsLetter } from '../categories/home/NewsLetter'
import { AboutUsSection } from '../categories/home/AboutUsSection'
import { CapCollections } from '../categories/home/CapCollections'
import { NewArrivals } from '../categories/home/NewArrivals'
import { DeliveryFeatures } from '../categories/home/DeliveryFeatures'
import '../index.css'
import hero from "../assets/images/sectionBgs/1-1.png"

export const Home = () => {
  return (
    <>
    <Hero
    text="Starting at $499"
    img={hero}
    />
    <Collections />
    <CapCollections />
    <NewArrivals />
    <AboutUsSection />
    <DeliveryFeatures />
    
    </>
  )
}

