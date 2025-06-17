'use client';

import React from 'react';
import { toFixedDown } from '@/app/utils/utils';
import { Trade } from '@/types/types';


interface TradeCardProps {
  trade: Trade;
  onClick: (trade: Trade) => void;
}

export const TradeCard = ({ trade, onClick }: TradeCardProps) => {
  const getProfitIcon = () => {
    if (trade.profit.amount <= 0) return null;
    if (trade.profit.percent > 10) return '💰💰💰';
    if (trade.profit.percent > 5) return '💰💰';
    if (trade.profit.percent > 1) return '💰';
    return '💵';
  };

  return (
    <div
      onClick={() => onClick(trade)}
      className={`border rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer bg-white dark:bg-gray-800 dark:text-white ${trade.predictions?.length ? '' : 'opacity-50 pointer-events-none'}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">{trade.symbol}</span>
        <span
          className={`text-xs px-2 py-1 rounded ${trade.side === 'LONG' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {trade.side}
        </span>
      </div>
      <p><strong>Entry:</strong> {toFixedDown(trade.entryPrice, 5)}</p>
      <p><strong>Mark:</strong> {toFixedDown(trade.markPrice, 5)}</p>
      <p><strong>Volume:</strong> {trade.volume}</p>
      <p>
        <strong>Profit:</strong> {trade.profit.amount} USDT ({trade.profit.percent}%)
        {trade.profit.amount > 0 && (
          <span className="ml-2 text-green-600 dark:text-green-400" title="Profit bonus">
            {getProfitIcon()}
          </span>
        )}
      </p>
    </div>
  );
};
