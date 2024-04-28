"use client"
import {lato} from "../font";
import { Button } from "../components/Button";
import Link from "next/link";


export default function HomeTitle  ({date} : HomeTitleProps) {
  return (
<div  className="h-screen text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {String(date)}年
        </h1>
        <Link href={`/person/${date}`}>
         <Button />
        </Link>
        <Link href={`/person/${date}`}>
         <Button />
        </Link>
        <Link href={`/person/${date}`}>
         <Button />
        </Link>
      </div>
  )
}


interface HomeTitleProps {
  date: Number;
}
