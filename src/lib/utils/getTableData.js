import {TABLE_ADDRESSES, PANGOLIN_SUBGRAPH_URL, BLOCK_SUBGRAPH_URL} from "./constants";

const TokenFields = `
  fragment TokenFields on Token {
    id
    name
    symbol
    derivedETH
    tradeVolume
  }
`;

async function getBlockFromTimestamp(timestamp) {
  const query = `
    query blocks($timestampFrom: Int!, $timestampTo: Int!) {
      blocks(
        first: 1
        orderBy: timestamp
        orderDirection: asc
        where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }
      ) {
        id
        number
        timestamp
      }
    }
  `;

  const req = await fetch(BLOCK_SUBGRAPH_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      query,
      variables: {
        timestampFrom: timestamp,
        timestampTo: timestamp + 60 * 60 * 24 * 7,
      },
    }),
  });

  const result = await req.json();

  return result?.data?.blocks?.[0]?.number;
}

async function getCurrentTokens() {
  const query = `
    ${TokenFields}
    query tokens {
      tokens(first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {
        ...TokenFields
      }
    }
  `;

  const req = await fetch(PANGOLIN_SUBGRAPH_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query}),
  });

  const result = await req.json();

  return result?.data?.tokens;
}

async function getHistoryTokens() {
  const block = await getBlockFromTimestamp(Math.floor(new Date().getTime() / 1000) - 86400);

  const query = `
    ${TokenFields}
    query tokens {
      tokens(block: {number: ${block}} first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {
        ...TokenFields
      }
    }
  `;

  const req = await fetch(PANGOLIN_SUBGRAPH_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query}),
  });

  const result = await req.json();

  return result?.data?.tokens;
}

export async function getTableData() {
  const [currentTokens, historyTokens] = await Promise.all([getCurrentTokens(), getHistoryTokens()]);

  return Promise.all(
    TABLE_ADDRESSES.map((addr) => {
      const {
        name,
        symbol,
        derivedETH: now,
        tradeVolume,
      } = currentTokens.find(({id}) => id.toLowerCase() == addr.toLowerCase());

      const {derivedETH: history, tradeVolume: historyVolume} = historyTokens.find(
        ({id}) => id.toLowerCase() == addr.toLowerCase(),
      );

      return {
        addr,
        name,
        symbol,
        price: {
          now,
          history,
        },
        volume: tradeVolume - historyVolume,
      };
    }),
  );
}
