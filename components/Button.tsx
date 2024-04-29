"use client";
import { ReactNode } from "react";
import {  zen_maru_gothic } from "@/font";


interface ButtonProps {
  name: string;
  icon: ReactNode;
}
export const Button = ({ name, icon }: ButtonProps) => {
  return (
    <div className={`${zen_maru_gothic.className} hover:opacity-75 active:opacity-60`}>
      <button className={`py-4 px-8 border rounded-xl mx-auto`}>
        <div className="text-3xl block w-max mx-auto my-2">
        {icon}
        </div>
        <div className="text-xl">
        {name}
        </div>
      </button>
    </div>
  );
};
