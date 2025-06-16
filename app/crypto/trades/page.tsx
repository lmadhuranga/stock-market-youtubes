import fetchData from "@/actions/fetchData";
import TradeTable from "@/components/TradeTable";

export default async function Home() {
  const payload = await fetchData();
  // console.log(`payload`, payload);
  return (
    <main> 
      {payload ? (
        <TradeTable trades={payload} />
      ) : (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">No Trades Found</h2>
          <p className="text-gray-600">There are currently no trades to display.</p>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Open Positions</h2>
        <p className="text-gray-600">This section will display your open positions.</p>
      </div>
    </main>
  );
}
