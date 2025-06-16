'use client';

import React, { useState } from 'react';

type Prediction = {
  move: string;
  expectedPrice: number;
  positioningAmount: number;
  walletAmount: number;
};

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
  predictions?: Prediction[];
};

type TradeTableProps = {
  trades: Trade[];
};

export const TradeTable = ({ trades }: TradeTableProps) => {
  const [modalData, setModalData] = useState<Trade | null>(null);

  const openModal = (trade: Trade) => {
    if (trade.predictions && trade.predictions.length > 0) {
      setModalData(trade);
    }
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Trade Summary</h2>

      {/* Card Layout */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trades.map((trade, index) => (
          <div
            key={index}
            onClick={() => openModal(trade)}
            className={`border rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer bg-white dark:bg-gray-800 dark:text-white ${
              trade.predictions?.length ? '' : 'opacity-50 pointer-events-none'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">{trade.symbol}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  trade.side === 'LONG'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {trade.side}
              </span>
            </div>
            <p><strong>Entry:</strong> {trade.entryPrice}</p>
            <p><strong>Mark:</strong> {trade.markPrice}</p>
            <p><strong>Volume:</strong> {trade.volume}</p>
            <p><strong>Profit:</strong> {trade.profit.amount} USDT</p>
            <p><strong>Profit %:</strong> {trade.profit.percent}%</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Predictions for {modalData.symbol} ({modalData.side})
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            <div className="text-sm text-gray-800 dark:text-gray-200 mb-4 space-y-1">
              <p><strong>Entry Price:</strong> {modalData.entryPrice}</p>
              <p><strong>Mark Price:</strong> {modalData.markPrice}</p>
              <p><strong>Volume:</strong> {modalData.volume}</p>
              <p><strong>Cost:</strong> {modalData.cost}</p>
              <p><strong>Profit:</strong> {modalData.profit.amount} USDT</p>
              <p><strong>Profit %:</strong> {modalData.profit.percent}%</p>
            </div>

            <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">Predictions</h4>
            <table className="w-full border border-gray-200 dark:border-gray-700 text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <tr>
                  <th className="border px-2 py-1">Move</th>
                  <th className="border px-2 py-1">Expected Price</th>
                  <th className="border px-2 py-1">Position</th>
                  <th className="border px-2 py-1">Wallet</th>
                </tr>
              </thead>
              <tbody>
                {modalData.predictions!.map((pred, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{pred.move}</td>
                    <td className="border px-2 py-1">{pred.expectedPrice}</td>
                    <td className="border px-2 py-1">{pred.positioningAmount}</td>
                    <td className="border px-2 py-1">{pred.walletAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeTable;
