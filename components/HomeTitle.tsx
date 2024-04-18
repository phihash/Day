"use client"
import { calculateRokuyou } from "../libs/calculateRokuyou"
import {lato, potta_One } from "../font";


export const HomeTitle = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const rokuyou = calculateRokuyou(year, month, day);

  return (
<div className="h-1/2 text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {year}/{month}/{day}
        </h1>
        <p className={`text-2xl ${potta_One.className} tracking-widest`}>
          {rokuyou}
        </p>
      </div>
  )
}
