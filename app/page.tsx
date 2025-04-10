import Link from 'next/link';

const lnk = (url: string, label: string) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    {label}
  </Link>
);

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Views</h1>
      <nav>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/stock-news">Stock News Youtubes</Link>
          </li>
          <li>
            {lnk("https://finviz.com/map.ashx", "Stock Maps")} |&nbsp;
            {lnk(
              "http://tradingview.com/heatmap/stock/#%7B%22dataSource%22%3A%22SPX500%22%2C%22blockColor%22%3A%22change%22%2C%22blockSize%22%3A%22market_cap_basic%22%2C%22grouping%22%3A%22sector%22%7D",
              "Stock Map 2 - TradingView"
            )} |&nbsp;
            {lnk("https://coinmarketcap.com/crypto-heatmap/", "Crypto Maps")}
          </li>
          <li>
            {lnk("https://www.khaleejtimes.com/gold-forex?botrequest=true", "Rates | Gold - Currency")}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
