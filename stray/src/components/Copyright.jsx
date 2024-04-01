import React from 'react'

export const Copyright = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <section className="flex flex-col gap-5 bg-black/90
                        pb-8 font-dmsans 
                      justify-center items-center footer
                     text-slate-200/50 text-sm">
        <div className="flex gap-5">
            <p className="v-line ">Privacy Policy</p>

            <p className="v-line">Terms and Conditions </p>
            <p>Cookies</p>
        </div>
        <p>&copy; {currentYear}. All rights reserved </p>
        <p className="text-center">Design by haash03</p>

    </section>
  )
}
