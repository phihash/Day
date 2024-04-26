"use client"
import {lato, potta_One } from "../font";

export const HomeTitle :React.FC<HomeTitleProps> =  ({date}) => {

  return (
<div  className="h-screen text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {String(date)}年
        </h1>
      </div>
  )
}

interface HomeTitleProps {
  date: Number;
}
