import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>My Views</h1>
      <nav>
        <ul>
          <li>
            <Link href="/stock-news">Stock-news</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Page;