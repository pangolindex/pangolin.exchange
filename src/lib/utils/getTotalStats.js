import {API_URL} from "./constants";

export async function getTotalStats() {
  const lpTokens = await (await fetch(`${API_URL}/v2/43114/pangolin/stakingTokenAddresses`)).json();
  const pids = lpTokens.map((address, pid) => pid);

  const chunkSize = 4;
  const pidChunks = [];

  for (let i = 0; i < pids.length; i += chunkSize) {
    const pidChunk = pids.slice(i, i + chunkSize);
    pidChunks.push(pidChunk);
  }

  const chunkedResults = await Promise.allSettled(
    pidChunks.map((chunk) => fetch(`${API_URL}/v2/43114/pangolin/aprs/${chunk.join(",")}`).then((res) => res.json())),
  );

  const BASE_APR = {
    swapFeeApr: 0,
    stakingApr: 0,
    combinedApr: 0,
  };

  const aprs = chunkedResults
    .map((settled, i) => {
      if (settled.status === "fulfilled" && !!settled.value) return settled.value;
      else return Array(pidChunks[i].length).fill(BASE_APR); // Fill in missing APRs from failed request
    })
    .flat();

  const [volume, liquidity] = await Promise.all([
    fetch(`${API_URL}/v2/43114/png/total-volume`).then((result) => result.text()),
    fetch(`${API_URL}/v2/43114/png/tvl`).then((result) => result.text()),
  ]);

  return {
    maxAPR: Math.max(...aprs.map((apr) => apr.combinedApr)),
    totalVolume: parseFloat(volume),
    totalLiquidity: parseFloat(liquidity),
  };
}
