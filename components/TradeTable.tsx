"use client";

import React, { useState } from "react";

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
    <div className="p-4 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Trades</h2>

      <table className="w-full text-sm border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Symbol</th>
            <th className="border px-3 py-2">Side</th>
            <th className="border px-3 py-2">Entry</th>
            <th className="border px-3 py-2">Mark</th>
            <th className="border px-3 py-2">Volume</th>
            <th className="border px-3 py-2">Cost</th>
            <th className="border px-3 py-2">Profit</th>
            <th className="border px-3 py-2">%</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {trades.map((trade, index) => (
            <tr
              key={index}
              onClick={() => openModal(trade)}
              className={`border-t cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                trade.predictions && trade.predictions.length > 0 ? "" : "pointer-events-none opacity-50"
              }`}
            >
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">{trade.symbol}</td>
              <td className="px-3 py-2">{trade.side}</td>
              <td className="px-3 py-2">{trade.entryPrice}</td>
              <td className="px-3 py-2">{trade.markPrice}</td>
              <td className="px-3 py-2">{trade.volume}</td>
              <td className="px-3 py-2">{trade.cost}</td>
              <td className="px-3 py-2">{trade.profit.amount}</td>
              <td className="px-3 py-2">{trade.profit.percent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for predictions */}
      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Trade Details: {modalData.symbol} ({modalData.side})
            </h3>

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
              <tbody className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
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