"use client";
import { lato } from "../font";
import { Button } from "../components/Button";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { FaAngellist } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";

export default function HomeTitle({ date }: HomeTitleProps) {
  return (
    <div className="h-screen text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
      <h1 className={`text-4xl font-bold ${lato.className}`}>
        {String(date)}年
      </h1>
      <Link href={`/person/${date}`}>
        <Button name="人物" icon={<IoPerson />} />
      </Link>
      <Link href={`/marriage/${date}`}>
        <Button name="結婚" icon={<GiBigDiamondRing />} />
      </Link>
      <Link href={`/music/${date}`}>
        <Button name="音楽" icon={<IoMdMusicalNotes />} />
      </Link>
    </div>
  );
}

interface HomeTitleProps {
  date: Number;
}
