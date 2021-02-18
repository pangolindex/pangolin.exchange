const query = `
	query {
		pangolinFactory(id: "0xefa94DE7a4656D787667C749f7E1223D71E9FD88") {
			totalVolumeUSD
			totalLiquidityUSD
		}
	}
`;

export async function getTotalStats() {
  const req = await fetch("https://graph-node.avax.network/subgraphs/name/dasconnor/pangolindex", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query}),
  });

  const {
    data: {
      pangolinFactory: {totalLiquidityUSD, totalVolumeUSD},
    },
  } = await req.json();

  return {
    totalLiquidityAVAX: totalLiquidityUSD,
    totalVolumeAVAX: totalVolumeUSD,
  };
}
