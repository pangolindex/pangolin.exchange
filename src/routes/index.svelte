<script>
  import {onMount} from "svelte";

  let coins = [
    {
      symbol: "AVAX",
      id: "avalanche-2",
      name: "Avalanche",
      img:
        "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/ethereum-tokens/0x9dEbca6eA3af87Bf422Cea9ac955618ceb56EfB4/logo.png",
    },
    {
      symbol: "ETH",
      id: "ethereum",
      name: "Ether (Wrapped)",
      addr: "0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15",
    },
    {
      symbol: "USDT",
      id: "tether",
      name: "Tether USD",
      addr: "0xde3A24028580884448a5397872046a019649b084",
    },
    {
      symbol: "WBTC",
      id: "wrapped-bitcoin",
      name: "Wrapped BTC",
      addr: "0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB",
    },
    {
      symbol: "LINK",
      id: "chainlink",
      name: "Chainlink Token",
      addr: "0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651",
    },
    {
      symbol: "DAI",
      id: "dai",
      name: "Dai Stablecoin",
      addr: "0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a",
    },
    {
      symbol: "UNI",
      id: "uniswap",
      name: "Uniswap",
      addr: "0xf39f9671906d8630812f9d9863bBEf5D523c84Ab",
    },
    {
      symbol: "SUSHI",
      id: "sushi",
      name: "SushiToken",
      addr: "0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc",
    },
    {
      symbol: "AAVE",
      id: "aave",
      name: "Aave Token",
      addr: "0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9",
    },
    {
      symbol: "YFI",
      id: "yearn-finance",
      name: "yearn.finance",
      addr: "0x99519AcB025a0e0d44c3875A4BbF03af65933627",
    },
  ];

  let totalLiquidityAVAX = 0;
  let totalVolumeAVAX = 0;
  let avaxPrice = 0;

  onMount(async () => {
    await Promise.all(
      coins.map(({id}, i) => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/" +
            id +
            "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
        )
          .then((res) => res.json())
          .then(({market_data: {current_price, price_change_percentage_24h, total_volume}}) => {
            if (i == 0) {
              avaxPrice = current_price.usd;
            }
            coins[i] = {
              ...coins[i],
              ...(!("img" in coins[i]) && {
                img:
                  "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/" +
                  coins[i].addr +
                  "/logo.png",
              }),
              price: "$" + current_price.usd.toLocaleString("en-US"),
              price_change: price_change_percentage_24h,
              volume: "$" + total_volume.usd.toLocaleString("en-US"),
            };
          });
      }),
    );

    const query = `
      query {
        pangolinFactory(id: "0xefa94DE7a4656D787667C749f7E1223D71E9FD88") {
          totalVolumeUSD
          totalLiquidityUSD
        }
      }
    `;

    await fetch("https://graph-node.avax.network/subgraphs/name/dasconnor/pangolindex", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({query}),
    })
      .then((res) => res.json())
      .then(
        ({
          data: {
            pangolinFactory: {totalLiquidityUSD, totalVolumeUSD},
          },
        }) => {
          totalLiquidityAVAX = totalLiquidityUSD;
          totalVolumeAVAX = totalVolumeUSD;
        },
      );
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.coingecko.com" crossorigin="true" />
  <link rel="preconnect" href="https://graph-node.avax.network" crossorigin="true" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/" />
  <meta property="og:type" content="article" />
  <meta name="twitter:image" content="https://pangolin.exchange/OGImage.png" />
  <meta property="og:image" content="https://pangolin.exchange/OGImage.png" />
  <meta
    name="twitter:description"
    content="A community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution–powered by Avalanche."
  />
  <meta
    property="og:description"
    content="A community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution–powered by Avalanche."
  />
  <meta name="twitter:title" content="Pangolin - Scale Your DeFi Trading" />
  <meta property="og:title" content="Pangolin - Scale Your DeFi Trading" />
  <title>Pangolin - Scale Your DeFi Trading</title>
</svelte:head>

<section class="mt-8">
  <div>
    <h1
      class="mt-10 mb-8 max-w-screen-lg text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:mb-10 sm:mt-14 sm:text-6xl lg:text-7xl"
    >
      Scale Your DeFi Trading with Pangolin
    </h1>

    <div class="flex my-10 space-x-6">
      <div class="flex flex-col py-4 px-4 bg-gray-900 rounded-xl">
        <span class="text-4xl font-semibold text-orange-500"
          >${Math.floor((parseFloat(totalVolumeAVAX) * avaxPrice) / 1e6)}M+</span
        >
        <span class="mt-2 font-semibold text-gray-100">Total Volume</span>
      </div>
      <div class="flex flex-col py-4 px-4 bg-gray-900 rounded-xl">
        <span class="text-4xl font-semibold text-orange-500"
          >${Math.floor((parseFloat(totalLiquidityAVAX) * avaxPrice) / 1e6)}M+</span
        >
        <span class="mt-2 font-semibold text-gray-100">Total Liquidity</span>
      </div>
    </div>

    <p class="mb-10 max-w-screen-lg text-lg font-medium text-gray-700 sm:mb-11 sm:text-2xl sm:leading-10">
      A community-driven decentralized exchange for Avalanche and Ethereum assets with
      <strong class="text-gray-900">fast settlement</strong>,
      <strong class="text-gray-900">low transaction fees</strong>, and
      <strong class="text-gray-900">a democratic distribution</strong>–powered by Avalanche. Pangolin brings you the
      best trading opportunities to find and maximize your yield.
    </p>

    <div class="flex flex-wrap space-y-4 text-center sm:space-x-4 sm:space-y-0">
      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-orange-50 bg-orange-500 rounded-xl border border-transparent transition-colors duration-200 hover:bg-orange-400 focus:outline-none focus:ring-orange-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:inline sm:w-auto"
        href="https://app.pangolin.exchange"
        target="_blank">Launch App</a
      >

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 bg-white rounded-xl border border-gray-900 transition-colors duration-200 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:outline-none focus:ring-gray-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:w-auto"
        href="/litepaper">Litepaper</a
      >

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 bg-white rounded-xl border border-gray-900 transition-colors duration-200 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:outline-none focus:ring-gray-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:w-auto"
        href="/faq">FAQ</a
      >
    </div>
  </div>

  <div class="flex flex-col mt-16">
    <div class="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {#each ["Name", "Volume (24 hrs)", "Price", "Price Change"] as col}
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase whitespace-nowrap bg-gray-50"
                  >
                    {col}
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each coins as coin}
                {#if "volume" in coin}
                  <tr>
                    <td class="py-4 px-6 whitespace-nowrap">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-10 h-10 rounded-full" src="{coin.img}" alt="{coin.symbol}" />
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900">{coin.symbol}</div>
                          <div class="text-sm text-gray-500">{coin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                      {coin.volume}
                    </td>
                    <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                      {coin.price}
                    </td>
                    <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                      <span
                        class="{coin.price_change >= 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'} inline-flex items-center px-2 py-1 text-xs font-semibold leading-5 rounded-full space-x-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4" fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            d="{coin.price_change >= 0
                              ? 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                              : 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'}"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span>{Math.abs(coin.price_change).toFixed(2)}%</span>
                      </span>
                    </td>
                  </tr>
                {/if}
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
