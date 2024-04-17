import axios from 'axios';
import { calculateRokuyou } from "../libs/calculateRokuyou"
import {lato, potta_One } from "../font";

interface HomeProps {
  year: number;
  month: number;
  day: number;
  rokuyou: string;
}

// async function getWikiData() {
//   try {
//     const response = await axios.get('https://ja.wikipedia.org/w/api.php', {
//       params: {
//         action: 'query',
//         format: 'json',
//         prop: 'extracts',
//         titles: '4月1日',
//         exintro: true,
//         explaintext: true,
//       },
//     });
//     console.log(response,"レスポン")
//     const data = response.data;
//     console.log(data,"data")
//     const pages = data.query.pages;
//     console.log(pages,"page")
//     const pageId = Object.keys(pages)[0];
//     console.log(pageId,"pageId")
//     const extract = pages[pageId].extract;
//     console.log(extract,"extrac")

// const events = extract.split('\n').filter((event : any) => {
//       const year = event.match(/^\d+年/);
//       return year && parseInt(year[0]) >= 1800;
//     });

//     return events.join('\n');
//   } catch (error) {
//     console.error(error);
//     throw new Error('An error occurred');
//   }
// }

// async function getBirthdaysData(month: number, day: number) {
//   try {
//     const response = await axios.get('https://ja.wikipedia.org/w/api.php', {
//       params: {
//         action: 'query',
//         format: 'json',
//         prop: 'extracts',
//         titles: `${month}月${day}日`,
//         exintro: true,
//         explaintext: true,
//       },
//     });
//     console.log(response,"レスポン")
//     const data = response.data;
//     console.log(data,"data")
//     const pages = data.query.pages;
//     console.log(pages,"page")
//     const pageId = Object.keys(pages)[0];
//     console.log(pageId,"pageId")
//     const extract = pages[pageId].extract;
//     console.log(extract,"extrac")

//     // 誕生日の人物のみを抽出
//     const regex = /(\d+年)(?:.+?)、(.+?)(?:（.+?）)?が生まれる。/g;
//     const birthdays = [];
//     let match;
//     while ((match = regex.exec(extract)) !== null) {
//       const [_, year, name] = match;
//       birthdays.push({ year, name });
//     }

//     return birthdays;
//   } catch (error) {
//     console.error(error);
//     throw new Error('An error occurred');
//   }
// }

const getDateData = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const rokuyou = calculateRokuyou(year, month, day);

  return {
    props: {
      year,
      month,
      day,
      rokuyou,
    },
  };
};

const HomeTitle = async () => {
  const { props } = await getDateData();

  return (
<div className="h-1/2 text-neutral-100 bg-yellow-500 flex flex-col justify-center items-center gap-2">
        <h1 className={`text-4xl font-bold ${lato.className}`}>
          {props.year}/{props.month}/{props.day}
        </h1>
        <p className={`text-2xl ${potta_One.className} tracking-widest`}>
          {props.rokuyou}
        </p>
      </div>
  )
}

export default  function Home   () {


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

