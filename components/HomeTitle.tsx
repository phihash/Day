"use client"
import {lato} from "../font";
import { Button } from "../components/Button";


export const HomeTitle :React.FC<HomeTitleProps> =  ({date}) => {

  return (
<div  className="h-screen text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {String(date)}年
        </h1>
        <Button />
      </div>
  )
}

interface HomeTitleProps {
  date: Number;
}
