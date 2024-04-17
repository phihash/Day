import axios from 'axios';
import { noto_sans_jp,geo, arvo ,zen_maru_gothic, lexend } from "../font";

async function getWikiData() {
  try {
    const response = await axios.get('https://ja.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        titles: '4月1日',
        exintro: true,
        explaintext: true,
      },
    });
    console.log(response,"レスポン")
    const data = response.data;
    console.log(data,"data")
    const pages = data.query.pages;
    console.log(pages,"page")
    const pageId = Object.keys(pages)[0];
    console.log(pageId,"pageId")
    const extract = pages[pageId].extract;
    console.log(extract,"extrac")

const events = extract.split('\n').filter((event : any) => {
      const year = event.match(/^\d+年/);
      return year && parseInt(year[0]) >= 1800;
    });

    return events.join('\n');
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred');
  }
}

async function getBirthdaysData(month: number, day: number) {
  try {
    const response = await axios.get('https://ja.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        titles: `${month}月${day}日`,
        exintro: true,
        explaintext: true,
      },
    });
    console.log(response,"レスポン")
    const data = response.data;
    console.log(data,"data")
    const pages = data.query.pages;
    console.log(pages,"page")
    const pageId = Object.keys(pages)[0];
    console.log(pageId,"pageId")
    const extract = pages[pageId].extract;
    console.log(extract,"extrac")

    // 誕生日の人物のみを抽出
    const regex = /(\d+年)(?:.+?)、(.+?)(?:（.+?）)?が生まれる。/g;
    const birthdays = [];
    let match;
    while ((match = regex.exec(extract)) !== null) {
      const [_, year, name] = match;
      birthdays.push({ year, name });
    }

    return birthdays;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred');
  }
}

export default async function Home() {
  const wikiData = await getWikiData();

    // 現在の日付を取得
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const birthdays = await getBirthdaysData(month, day);


  return (
    <main className="flex h-1/2 flex-col text-neutral-100 items-center justify-between p-24 pt-48 bg-yellow-500">
    <h1 className={`text-4xl font-bold ${arvo.className}`}>
    {year}/{month}/{day}
    </h1>

  </main>
  );
}
