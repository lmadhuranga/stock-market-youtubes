// types.ts

export type Prediction = {
  move: string;
  expectedPrice: number;
  positioningAmount: number;
  walletAmount: number;
};

export type Trade = {
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