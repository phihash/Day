"use client";
import  HomeTitle  from "@/components/HomeTitle";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const MAX_YEAR = 2024;
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const changeYear = (delta: number) => {
    const newYear = currentYear + delta;
    if (newYear <= MAX_YEAR) {
      setCurrentYear(newYear);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeYear(1),
    onSwipedRight: () => changeYear(-1),
  });
  return (
    <>
      <main {...handlers}>
        <HomeTitle date={currentYear} />
      </main>
    </>
  );
}
