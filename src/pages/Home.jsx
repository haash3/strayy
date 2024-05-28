import React from 'react'
import {Hero} from '../categories/home/Hero'
import {CategoriesMini} from '../categories/home/CategoriesMini'
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
    <CategoriesMini />
    <CapCollections />
    <NewArrivals />
    <AboutUsSection />
    <DeliveryFeatures />
    
    </>
  )
}

