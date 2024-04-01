import React from "react";
export const Footer = () => {
  return (
    <footer className="py-6 bg-black/90
                       text-white/95 font-dmsans 
                       lg:text-[18px] text-[16px]">
        <div className="flex gap-6 justify-center py-2
                        cursor-pointer">
            <p>About</p>
            <p>Store locator</p>
            <p>FAQs</p>
            <p>News</p>
            <p>Careers</p>
            <p>Contact Us</p>
        </div>
    </footer>
  );
};
