import React from 'react'
import { ourBrands } from '../index'

export const Brands = () => {
  return (
    <section className="padding-x  bg-black/5  padding-y">
        <div
        className="font-poppins text-[32px]">
        Our Top Brands
      </div>
      <div className="mt-10 grid
                        sm:grid-cols-3  grid-cols-1
                         sm:gap-20 gap-10 font-extrabold">
          {ourBrands.map((brand) => (
            <div className="h-20" key={brand.name}>
              <div className="text-[40px] zoom-out-text tracking-wide
                                font-poppins mb-2 p-2 border-b
                               border-black 
                                 flex gap-3 items-center">
                <img src={brand.logo} width={75} />
                {brand.name}

              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
