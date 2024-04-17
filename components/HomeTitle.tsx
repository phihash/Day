"use client"
import { calculateRokuyou } from "../libs/calculateRokuyou"

import {lato, potta_One } from "../font";

const getDateData = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const rokuyou = calculateRokuyou(year, month, day);

  return {
    props: {
      year,
      month,
      day,
      rokuyou,
    },
  };
};


export const HomeTitle = async () => {
  const { props } = await getDateData();

  return (
<div className="h-1/2 text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {props.year}/{props.month}/{props.day}
        </h1>
        <p className={`text-2xl ${potta_One.className} tracking-widest`}>
          {props.rokuyou}
        </p>
      </div>
  )
}
