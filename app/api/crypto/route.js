import { binanceInit, calculateTradePosition } from "../../utils/binance";
import { abs, toFixedDown } from "../../utils/utils";

export async function GET() {
  const leverage = 10; // Example leverage value, adjust as needed
  const { binance } = binanceInit();

  try {
    const positions = await binance.futuresPositionRisk();
    const openPositions = positions.filter(pos => parseFloat(pos.positionAmt) !== 0);

    const results = openPositions.map(pos => {
      const size = parseFloat(pos.entryPrice) * parseFloat(pos.positionAmt);
      const profit = {
        amount: toFixedDown(pos.unRealizedProfit, 2),
        percent: toFixedDown(((parseFloat(pos.unRealizedProfit) / size) * 100), 2)
      };

      const price = parseFloat(pos.markPrice);
      const isLong = pos?.positionSide === 'LONG';
      const direction = isLong ? 'LONG' : 'SHORT';

      let predictions = [];

      if (parseFloat(pos.unRealizedProfit) < 0 && abs(parseFloat(pos.unRealizedProfit)) > size * 0.01) {
        const expPrice1 = isLong ? price * 1.01 : price * 0.99;
        const result1 = calculateTradePosition(pos.positionAmt, size, parseFloat(pos.entryPrice), leverage, price, expPrice1);

        const expPrice05 = isLong ? price * 1.005 : price * 0.995;
        const result05 = calculateTradePosition(pos.positionAmt, size, parseFloat(pos.entryPrice), leverage, price, expPrice05);

        predictions.push({
          move: '1%',
          expectedPrice: toFixedDown(expPrice1, 5),
          positioningAmount: result1?.positioningAmount,
          walletAmount: result1?.walletAmount
        });

        predictions.push({
          move: '0.5%',
          expectedPrice: toFixedDown(expPrice05, 5),
          positioningAmount: result05?.positioningAmount,
          walletAmount: result05?.walletAmount
        });
      }

      return {
        symbol: pos.symbol,
        side: direction,
        entryPrice: pos.entryPrice,
        markPrice: pos.markPrice,
        volume: pos.positionAmt,
        cost: toFixedDown(size, 4),
        profit,
        predictions
      };
    });

    return Response.json({ status: 'success', data: results });
  } catch (err) {
    console.error('Error:', err);
    return Response.json({ status: 'error', message: 'Failed to fetch futures positions' }, { status: 500 });
  }
}