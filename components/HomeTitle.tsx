"use client"
import { calculateRokuyou } from "../libs/calculateRokuyou"
import {lato, potta_One } from "../font";
import { useSwipeable } from 'react-swipeable';


export const HomeTitle :React.FC<HomeTitleProps> =  ({date,onSwipeLeft,onSwipeRight}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const rokuyou = calculateRokuyou(year, month, day);
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(),
    onSwipedRight: () => onSwipeRight(),
  });

  return (
<div  {...handlers}  className="h-1/2 text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {year}/{month}/{day}
        </h1>
        <p className={`text-2xl ${potta_One.className} tracking-widest`}>
          {rokuyou}
        </p>
      </div>
  )
}

interface HomeTitleProps {
  date: Date;
  onSwipeLeft() :void;
  onSwipeRight() :void;
}
