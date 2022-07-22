<script>
  import {onMount} from "svelte";
  import {getTotalStats, getTableData, getAvaxPriceStats} from "$lib/utils";

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  let stats = {
    totalLiquidity: 0,
    totalVolume: 0,
    maxAPR: 0,
  };

  let avaxPrice = {
    now: 0,
    history: 0,
  };

  let tableData = [];

  function formatStat(number) {
    if (number > 1e9) {
      return Math.floor(number / 1e7) / 1e2 + "B+";
    } else if (number > 1e6) {
      return Math.floor(number / 1e6) + "M+";
    }
    return Math.floor(number / 1e3) + "k+";
  }

  const PARTNERS = [
    {
      href: "https://www.avax.network",
      src: "/avalanche.svg",
      alt: "Powered by Avalanche",
    },
    {
      href: "https://www.beefy.finance",
      src: "/beefy.png",
      alt: "Beefy Finance",
    },
    {
      href: "https://www.poolz.finance",
      src: "/poolz.png",
      alt: "Poolz",
    },
    {
      href: "https://coin98.app",
      src: "/coin98.png",
      alt: "Coin 98 Wallet",
    },
    {
      href: "https://dyp.finance/",
      src: "/dyp.svg",
      alt: "DeFi Yield Protocol",
    },
    {
      href: "https://avme.io/",
      src: "/avme.png",
      alt: "AVME Wallet",
    },
    {
      href: "https://avalaunch.app/",
      src: "/avalaunch.png",
      alt: "Avalaunch",
    },
    {
      href: "https://spore.earth/",
      src: "/spore.png",
      alt: "Spore",
    },
    {
      href: "https://markr.io/",
      src: "/markr.png",
      alt: "Markr.io",
    },
    {
      href: "https://penguinfinance.io/",
      src: "/penguin.png",
      alt: "Penguin Finance",
    },
    {
      href: "https://velox.global/",
      src: "/velox.svg",
      alt: "Velox",
    },
    {
      href: "https://vee.finance/",
      src: "/vee.png",
      alt: "Vee Finance",
    },
    {
      href: "https://allianceblock.io/",
      src: "/allianceblock.png",
      alt: "AllianceBlock",
    },
    {
      href: "https://benqi.fi/",
      src: "/benqi.svg",
      alt: "Benqi Finance",
    },
    {
      href: "https://snowball.network/",
      src: "/snowball.png",
      alt: "Snowball",
    },
    {
      href: "https://marginswap.finance/",
      src: "/marginswap.png",
      alt: "Marginswap",
    },
    {
      href: "https://www.yay.games/",
      src: "/yay.png",
      alt: "YAY Games",
    },
    {
      href: "https://eleven.finance/",
      src: "/eleven.png",
      alt: "Eleven Finance",
    },
    {
      href: "https://frax.finance/",
      src: "/frax.png",
      alt: "Frax Finance",
    },
    {
      href: "https://starter.xyz/",
      src: "/starter.png",
      alt: "Starter",
    },
    {
      href: "https://www.trustswap.org/",
      src: "/trustswap.png",
      alt: "TrustSwap",
    },
    {
      href: "https://xdollar.fi/",
      src: "/xdollar.png",
      alt: "XDollar",
    },
    {
      href: "https://paraswap.io/",
      src: "/paraswap.png",
      alt: "ParaSwap",
    },
    {
      href: "https://openocean.finance/",
      src: "/openocean.png",
      alt: "OpenOcean",
    },
    {
      href: "https://axelar.network/",
      src: "/axelar.png",
      alt: "Axelar",
    },
    {
      href: "https://www.ape.in/",
      src: "/apein.png",
      alt: "Ape Island",
    },
    {
      href: "https://wowswap.io/",
      src: "/wowswap.png",
      alt: "WOWswap",
    },
    {
      href: "https://www.evrt.app/",
      src: "/everestdao.png",
      alt: "Everest DAO",
    },
    {
      href: "https://iron.finance/",
      src: "/ironfinance.png",
      alt: "Iron Finance",
    },
    {
      href: "https://rometerminal.io/",
      src: "/rome.png",
      alt: "Rome Terminal",
    },
    {
      href: "https://teddy.cash/",
      src: "/teddy.png",
      alt: "Teddy Cash",
    },
    {
      href: "https://oin.finance/",
      src: "/oin.png",
      alt: "OIN Finance",
    },
    {
      href: "https://antimatter.finance/",
      src: "/antimatter.png",
      alt: "Antimatter Finance",
    },
    {
      href: "https://www.insurace.io/",
      src: "/insurace.png",
      alt: "Insurace.io",
    },
    {
      href: "https://www.autonomynetwork.io/",
      src: "/autonomy.png",
      alt: "Autonomy Network",
    },
    {
      href: "https://nexusmutual.io/",
      src: "/nexusmutual.png",
      alt: "Nexus Mutual",
    },
  ];

  onMount(async () => {
    await Promise.all([
      getAvaxPriceStats().then(({usd, usd_24h_change}) => {
        avaxPrice = {
          now: usd,
          history: ((100 - usd_24h_change) * usd) / 100,
        };
      }),
      getTotalStats().then((data) => (stats = data)),
      getTableData().then((data) => (tableData = data)),
    ]);
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://api.coingecko.com" />
  <link rel="preconnect" href="https://api.thegraph.com" crossorigin="true" />
  <link rel="preconnect" href="https://api.pangolin.exchange" />
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
      class="mt-10 mb-8 max-w-screen-lg text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:mt-14 sm:mb-10 sm:text-6xl lg:text-7xl"
    >
      Scale Your DeFi Trading with Pangolin
    </h1>

    <div class="flex my-5 space-x-2 sm:my-10 sm:space-x-6">
      <div class="flex flex-col py-4 px-4 bg-gray-900 rounded-xl">
        <span class="text-xl font-semibold text-orange-500 sm:text-4xl">
          ${formatStat(stats.totalVolume)}
        </span>
        <span class="mt-2 font-semibold text-gray-100">Total Volume</span>
      </div>
      <div class="flex flex-col py-4 px-4 bg-gray-900 rounded-xl">
        <span class="text-xl font-semibold text-orange-500 sm:text-4xl">
          ${formatStat(stats.totalLiquidity)}
        </span>
        <span class="mt-2 font-semibold text-gray-100">Total Liquidity</span>
      </div>
      <div class="flex flex-col py-4 px-4 bg-gray-900 rounded-xl">
        <span class="text-xl font-semibold text-orange-500 sm:text-4xl">
          {stats.maxAPR}%
        </span>
        <span class="mt-2 font-semibold text-gray-100">Earn up to</span>
      </div>
    </div>

    <p class="mb-10 max-w-screen-lg text-lg font-medium text-gray-700 sm:mb-11 sm:text-2xl sm:leading-10">
      A community-driven decentralized exchange for Avalanche and Ethereum assets with
      <strong class="text-gray-900">fast settlement</strong>,
      <strong class="text-gray-900">low transaction fees</strong>, and
      <strong class="text-gray-900">a democratic distribution</strong>–powered by Avalanche. Pangolin brings you the
      best trading opportunities to find and maximize your yield.
    </p>

    <div class="flex flex-wrap space-y-4 text-center sm:space-y-0 sm:space-x-4">
      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-orange-50 bg-orange-500 rounded-xl border border-transparent transition-colors duration-200 sm:inline sm:w-auto hover:bg-orange-400 focus:ring-2 focus:ring-orange-900 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
        href="https://app.pangolin.exchange"
        target="_blank"
      >
        Launch App
      </a>

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 bg-white rounded-xl border border-gray-900 transition-colors duration-200 sm:w-auto hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
        href="https://bridge.avax.network"
        target="_blank"
      >
        Bridge
      </a>

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 bg-white rounded-xl border border-gray-900 transition-colors duration-200 sm:w-auto hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
        href="/litepaper"
      >
        Litepaper
      </a>

      <a
        class="flex-none py-3 px-6 w-full text-lg font-semibold leading-6 text-gray-900 bg-white rounded-xl border border-gray-900 transition-colors duration-200 sm:w-auto hover:text-gray-700 hover:bg-gray-50 hover:border-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
        href="https://docs.pangolin.exchange"
      >
        Docs
      </a>
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
              {#each tableData as {addr, name, symbol, price, volume}}
                <tr>
                  <td class="py-4 px-6 whitespace-nowrap">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/{addr}/logo_48.png"
                          alt="{symbol}"
                        />
                      </div>
                      <div>
                        <div class="text-sm font-medium text-gray-900">{symbol}</div>
                        <div class="text-sm text-gray-500">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                    {formatter.format(volume)}
                  </td>
                  <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                    {formatter.format(price.now * avaxPrice.now)}
                  </td>
                  <td class="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                    <span
                      class="{price.now * avaxPrice.now - price.history * avaxPrice.history >= 0
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'} inline-flex items-center px-2 py-1 text-xs font-semibold leading-5 rounded-full space-x-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="{price.now * avaxPrice.now - price.history * avaxPrice.history >= 0
                            ? 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                            : 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'}"
                          clip-rule="evenodd"></path>
                      </svg>
                      <span>
                        {Math.abs(
                          (100 * (price.now * avaxPrice.now - price.history * avaxPrice.history)) /
                            (price.history * avaxPrice.history),
                        ).toFixed(2)}%
                      </span>
                    </span>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col my-10">
    <hr />
    <div class="mt-10 mb-4 text-xl text-center"><strong>Our Partners</strong></div>
    <div
      style="grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));"
      class="grid gap-y-4 gap-x-8 mx-8 sm:gap-x-16 md:gap-x-8 lg:gap-x-16 lg:mx-16"
    >
      {#each PARTNERS as {href, src, alt}}
        <a class="flex justify-center items-center" href="{href}" target="_blank">
          <img class="object-scale-down" alt="{alt}" src="{src}" />
        </a>
      {/each}
    </div>
    <hr class="mt-10" />
  </div>
</section>
