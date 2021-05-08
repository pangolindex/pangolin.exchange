import {STAKING_ADDRESSES} from "./constants";

export async function getTotalStats() {
  const aprs = await Promise.all(
    STAKING_ADDRESSES.map(async (address) =>
      parseFloat(await (await fetch(`https://api.pangolin.exchange/pangolin/apr/${address}`)).text()),
    ),
  );

  return {
    maxAPR: Math.max(...aprs),
    totalVolume: parseFloat(await (await fetch("https://api.pangolin.exchange/png/total-volume")).text()),
    totalLiquidity: parseFloat(await (await fetch("https://api.pangolin.exchange/png/tvl")).text()),
  };
}
