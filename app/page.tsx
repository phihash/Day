"use client"
import { HomeTitle } from '@/components/HomeTitle';
import axios from 'axios';

interface HomeProps {
  year: number;
  month: number;
  day: number;
  rokuyou: string;
}


export default function Home () {

  return (
    <>
    <main className="h-screen">
    <HomeTitle />

      <div className="h-1/2">
        {/* 下半分のコンテンツをここに追加 */}
      </div>
    </main>
    </>

  );
}
