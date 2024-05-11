import React from 'react'
import {HeadSection} from '../categories/aboutUs/HeadSection'
import { GoalsSection } from '../categories/aboutUs/GoalsSection'
import { OurValues } from '../categories/aboutUs/OurValues'


 export const AboutUs = () => {
  return (
    <section className="bg-[#242919]">
    <HeadSection />
    <GoalsSection />
    <OurValues />
    </section>
  )
}
