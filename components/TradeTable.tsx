'use client';

type Trade = {
  symbol: string;
  side: string;
  entryPrice: number;
  markPrice: number;
  volume: number;
  cost: number;
  profit: {
    amount: number;
    percent: number;
  };
  predictions?: {
    move: string;
    expectedPrice: number;
    positioningAmount: number;
    walletAmount: number;
  }[];
};

type TradeTableProps = {
  trades: Trade[];
};

export const TradeTable = ({ trades }: TradeTableProps) => {
  // console.log(`TradeTable  trades`, trades);

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Open Positions Table</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">#</th>
            <th className="border px-2 py-1">Symbol</th>
            <th className="border px-2 py-1">Side</th>
            <th className="border px-2 py-1">Entry Price</th>
            <th className="border px-2 py-1">Mark Price</th>
            <th className="border px-2 py-1">Volume</th>
            <th className="border px-2 py-1">Cost</th>
            <th className="border px-2 py-1">Profit (USDT)</th>
            <th className="border px-2 py-1">Profit (%)</th>
            <th className="border px-2 py-1">Predictions</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{index + 1}</td>
              <td className="border px-2 py-1">{trade.symbol}</td>
              <td className="border px-2 py-1">{trade.side}</td>
              <td className="border px-2 py-1">{trade.entryPrice}</td>
              <td className="border px-2 py-1">{trade.markPrice}</td>
              <td className="border px-2 py-1">{trade.volume}</td>
              <td className="border px-2 py-1">{trade.cost}</td>
              <td className="border px-2 py-1">{trade.profit?.amount}</td>
              <td className="border px-2 py-1">{trade.profit?.percent}</td>
              <td className="border px-2 py-1">
                {trade.predictions && trade.predictions.length > 0 ? (
                  <table className="min-w-max border border-gray-200 text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border px-1 py-0.5">Move</th>
                        <th className="border px-1 py-0.5">Expected Price</th>
                        <th className="border px-1 py-0.5">Position</th>
                        <th className="border px-1 py-0.5">Wallet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trade.predictions.map((pred, i) => (
                        <tr key={i}>
                          <td className="border px-1 py-0.5">{pred.move}</td>
                          <td className="border px-1 py-0.5">{pred.expectedPrice}</td>
                          <td className="border px-1 py-0.5">{pred.positioningAmount}</td>
                          <td className="border px-1 py-0.5">{pred.walletAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <span className="text-gray-400 italic">N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default TradeTable;