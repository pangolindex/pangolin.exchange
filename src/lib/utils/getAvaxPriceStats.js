export async function getAvaxPriceStats() {
  const req = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd&include_24hr_change=true",
  );

  const {
    "avalanche-2": {usd, usd_24h_change},
  } = await req.json();

  return {usd, usd_24h_change};
}
