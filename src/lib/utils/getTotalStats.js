import {API_URL, STAKING_ADDRESSES} from "./constants";

export async function getTotalStats() {
  const [aprs, volume, liquidity] = await Promise.all([
    Promise.all(
      STAKING_ADDRESSES.map(async (address) =>
        (await fetch(`${API_URL}/pangolin/apr/${address}`)).json(),
      )
    ),
    fetch(`${API_URL}/png/total-volume`).then(result => result.text()),
    fetch(`${API_URL}/png/tvl`).then(result => result.text()),
  ]);

  return {
    maxAPR: Math.max(...aprs.map(apr => apr.combinedApr)),
    totalVolume: parseFloat(volume),
    totalLiquidity: parseFloat(liquidity),
  };
}
