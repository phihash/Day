import { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify";
import { client } from "@/libs/client";
import {  zen_maru_gothic } from "@/font";

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;
  return {
    metadataBase: new URL(`https://day-rosy.vercel.app/music/${year}`),
    title: `${year}年`,
    description: `${year}年の音楽`,
    openGraph: {
      title: `${year}年`,
      description: `${year}年の結婚ニュース`,
      url: `https://day-rosy.vercel.app/music/${year}`,
      siteName: `${year}年の音楽`,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "", // Must be an absolute URL
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [""],
    },
    icons: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "../../../public/icon.png",
      },
    ],
  };
}

async function YearPage({ params }: { params: { year: string } }) {
  const { year } = params;
  const review = await getContent(year);
  const sanitizedContent = DOMPurify.sanitize(review.music);
  return (
    <div className={`${zen_maru_gothic.className} w-max mx-auto  text-xl px-3`}>
      {year}年の音楽
      <div
        className={`pt-12 leading-loose pb-28 font-semibold ${zen_maru_gothic.className} `}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
}

async function getContent(year: string) {
  try {
    const content = await client.get({
      endpoint: "year",
      contentId: year,
    });
    return content;
  } catch (error) {
    console.error("Error fetching review:", error);
    throw new Error("Failed to fetch content");
  }
}

export default YearPage;
