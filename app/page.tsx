import Link from 'next/link';

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
            <Link href="https://finviz.com/map.ashx" target="_blank">Stock Maps</Link> |&nbsp;
            <Link
              href="http://tradingview.com/heatmap/stock/#%7B%22dataSource%22%3A%22SPX500%22%2C%22blockColor%22%3A%22change%22%2C%22blockSize%22%3A%22market_cap_basic%22%2C%22grouping%22%3A%22sector%22%7D"
              target="_blank"
            >
              Stock Map 2 - TradingView
            </Link> |&nbsp;
            <Link href="https://coinmarketcap.com/crypto-heatmap/" target="_blank">Crypto Maps</Link>
          </li>
          <li>
            <Link href="https://www.khaleejtimes.com/gold-forex?botrequest=true">Rates | Gold - Currency </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;