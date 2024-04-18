"use client"
import { HomeTitle } from '@/components/HomeTitle';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';


export default function Home () {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSwipeLeft = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const handleSwipeRight = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });
  return (
    <>
    <main {...handlers}  className="h-screen">
    <HomeTitle
            date={currentDate}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
    />

      <div className="h-1/2">
      </div>
    </main>
    </>

  );
}
