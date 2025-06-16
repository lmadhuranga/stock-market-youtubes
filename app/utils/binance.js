import Binance from 'node-binance-api';
import { toFixedDown } from './utils';



const calculateTradePosition = (vol, quo, avg, lav, cur, exp) => {
  vol = Number(vol);
  quo = Number(quo);
  avg = Number(avg);
  lav = Number(lav);
  cur = Number(cur);
  exp = Number(exp);

  let cacont, calposa;

  if (cur < exp) {
    const cacont1 = exp * vol;
    const cacont2 = quo - cacont1;
    const cacont3 = exp - cur;
    cacont = cacont3 !== 0 ? cacont2 / cacont3 : 0;
    calposa = cacont * cur + quo;
  } else {
    const cacont1 = exp * vol;
    const cacont2 = cacont1 - quo;
    const cacont3 = cur - exp;
    cacont = cacont3 !== 0 ? cacont2 / cacont3 : 0;
    calposa = cacont * cur + quo;
  }

  const adjustedContract = toFixedDown(cacont, 7);
  const positioningAmount = toFixedDown(calposa, 2);
  const walletAmount = lav !== 0 ? toFixedDown((calposa / lav), 4) : toFixedDown(0, 4);

  return {
    adjustedContract,
    positioningAmount,
    walletAmount
  };
};

const binanceInit = () => {

  const binance = new Binance().options({
    APIKEY: process.env.BINANCE_API_KEY,
    APISECRET: process.env.BINANCE_API_SECRET,
    useServerTime: true,
    recvWindow: 60000
  });

  return {
    binance
  };
}

export { binanceInit, calculateTradePosition };