import React from 'react'

export const Copyright = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <section className="flex flex-col gap-5 bg-black/90
                        py-10 font-dmsans  border-t border-gray-600
                      justify-center items-center footer
                     text-slate-200/50 text-sm">
        <div className="flex gap-5">
            <p className="v-line ">Privacy Policy</p>

            <p className="v-line">Terms and Conditions </p>
            <p>Cookies</p>
        </div>
        <p>&copy; {currentYear}. All rights reserved </p>
    </section>
  )
}
