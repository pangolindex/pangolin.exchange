import {API_URL} from "./constants";

export async function getTotalStats() {
  const stakingTokenAddresses = await (await fetch(`${API_URL}/pangolin/stakingTokenAddresses`)).json();

  const [aprs, volume, liquidity] = await Promise.all([
    Promise.all(
      (stakingTokenAddresses || []).map(async (address, pid) => {
        return (await fetch(`${API_URL}/pangolin/apr2/${pid}`)).json();
      }),
    ),
    fetch(`${API_URL}/png/total-volume`).then((result) => result.text()),
    fetch(`${API_URL}/png/tvl`).then((result) => result.text()),
  ]);

  return {
    maxAPR: Math.max(...aprs.map((apr) => apr.combinedApr)),
    totalVolume: parseFloat(volume),
    totalLiquidity: parseFloat(liquidity),
  };
}
