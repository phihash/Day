import { noto_sans_jp } from "@/font";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;
  return {
    metadataBase: new URL(`https://day-rosy.vercel.app/person/${year}`),
    title: `${year}年`,
    description: `${year}年のページ`,
    openGraph: {
      title: `${year}年`,
      description: `${year}年のページ`,
      url: `https://day-rosy.vercel.app/person/${year}`,
      siteName: `${year}年の人物`,
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

const YearPage = ({ params }: { params: { year: string } }) => {
  const { year } = params;
  return (
    <div className="bg-yellow-400 h-screen text-3xl text-white px-3">
      {year}年の人物
    </div>
  );
};

export default YearPage;
