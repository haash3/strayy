import React from 'react'
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";


export const Button = ({to, label}) => {
  return (
    <Link
    to={to}
        className="bg-white text-black w-36
                    px-3 py-1 my-4 font-robo tracking-wide
                    border border-black text-[15px]
                    flex gap-2 items-center 
                    shadow-[5px_5px_0px_0px_black] uppercase">
          {label} <ArrowRight size={36} />
     </Link>
  )
}
