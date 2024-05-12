import React from 'react'

export const Copyright = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <section className="copyright">
        <div>
            <p>Privacy Policy</p>
            <p>Terms and Conditions </p>
            <p>Cookies</p>
        </div>
        <p>&copy; {currentYear}. All rights reserved </p>
        <p className="text-center">Design by harshitha03</p>

    </section>
  )
}
