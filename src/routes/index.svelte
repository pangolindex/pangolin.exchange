<script>
import {onMount} from "svelte";

let coins = [
  {
    symbol: "AVAX",
    id: "avalanche-2",
    name: "Avalanche",
    img: "/avax.png",
  },
  {
    symbol: "ETH",
    id: "ethereum",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
    name: "Ether (Wrapped)",
  },
  {
    symbol: "USDT",
    id: "tether",
    name: "Tether USD",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  },
  {
    symbol: "WBTC",
    id: "wrapped-bitcoin",
    name: "Wrapped BTC",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
  },
  {
    symbol: "LINK",
    id: "chainlink",
    name: "Chainlink Token",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
  },
  {
    symbol: "Dai",
    id: "dai",
    name: "Dai Stablecoin",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  {
    symbol: "UNI",
    id: "uniswap",
    name: "Uniswap",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
  },
  {
    symbol: "AAVE",
    id: "aave",
    name: "Aave Token",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png",
  },
  {
    symbol: "YFI",
    id: "yearn-finance",
    name: "yearn.finance",
    img:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png",
  },
];

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
          coins[i] = {
            ...coins[i],
            price: "$" + current_price.usd.toLocaleString("en-US"),
            price_change: price_change_percentage_24h,
            volume: "$" + total_volume.usd.toLocaleString("en-US"),
          };
        });
    }),
  );
});
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.coingecko.com" crossorigin="true" />
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
  <meta name="twitter:title" content="Pangolin: Scale Your DeFi Trading" />
  <meta property="og:title" content="Pangolin: Scale Your DeFi Trading" />
  <title>Pangolin: Scale Your DeFi Trading</title>
</svelte:head>

<section class="mt-8">
  <div>
    <h1
      class="mt-10 mb-8 max-w-screen-lg text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:mb-10 sm:mt-14 sm:text-6xl lg:text-7xl"
    >
      Scale Your DeFi Trading with Pangolin
    </h1>
    <p
      class="mb-10 max-w-screen-lg text-lg font-medium text-gray-700 sm:mb-11 sm:text-2xl sm:leading-10"
    >
      A community-driven decentralized exchange for Avalanche and Ethereum assets with
      <strong class="text-gray-900">fast settlement</strong>,
      <strong class="text-gray-900">low transaction fees</strong>, and
      <strong class="text-gray-900">a democratic distribution</strong>–powered by Avalanche.
      Pangolin brings you the best trading opportunities to find and maximize your yield.
    </p>

    <div class="flex flex-wrap space-y-4 text-center sm:space-x-4 sm:space-y-0">
      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-center text-gray-500 bg-gray-100 rounded-xl border border-transparent transition-colors duration-200 cursor-not-allowed focus:outline-none focus:ring-gray-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:inline sm:w-auto"
        href="#"
      >Launching Soon</a>

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 rounded-xl border border-gray-900 transition-colors duration-200 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:outline-none focus:ring-gray-900 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:w-auto"
        href="/litepaper"
      >Litepaper</a>
    </div>
  </div>

  <div class="flex flex-col mt-16">
    <div class="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {#each ['Name', 'Volume (24 hrs)', 'Price', 'Price Change'] as col}
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
                {#if 'volume' in coin}
                  <tr>
                    <td class="py-4 px-6 whitespace-nowrap">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-10 h-10 rounded-full" src="{coin.img}" alt="" />
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
                        class="{coin.price_change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} inline-flex items-center px-2 py-1 text-xs font-semibold leading-5 rounded-full space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          class="h-4"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="{coin.price_change >= 0 ? 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z' : 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'}"
                            clip-rule="evenodd"
                          ></path>
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
