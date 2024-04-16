import axios from 'axios';

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

export default async function Home() {
  const wikiData = await getWikiData();

    // 現在の日付を取得
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">
      {year}年{month}月{day}日
      </h1>
      <pre>{wikiData}</pre>
    </main>
  );
}
