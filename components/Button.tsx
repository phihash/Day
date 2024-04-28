"use client";
import { IoPerson } from "react-icons/io5";
import { ReactNode } from "react";
import { FaAngellist } from "react-icons/fa";

interface ButtonProps {
  name: string;
  icon: ReactNode;
}
export const Button = ({ name, icon }: ButtonProps) => {
  return (
    <div className="">
      <button className={`text-3xl  p-6 border rounded-xl`}>
        {icon}
        {name}
      </button>
    </div>
  );
};
