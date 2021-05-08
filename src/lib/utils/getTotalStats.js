export async function getTotalStats() {
  return {
    totalVolume: parseFloat(await (await fetch("https://api.pangolin.exchange/png/total-volume")).text()),
    totalLiquidity: parseFloat(await (await fetch("https://api.pangolin.exchange/png/tvl")).text()),
  };
}
