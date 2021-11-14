<script>
  import ContentsLayout from "$lib/components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/litepaper" />
  <meta property="og:type" content="article" />
  <meta name="twitter:image" content="https://pangolin.exchange/LitepaperOGImage.png" />
  <meta property="og:image" content="https://pangolin.exchange/LitepaperOGImage.png" />
  <meta
    name="twitter:description"
    content="Learn more about Pangolin and the PNG token. Pangolin is a community-driven decentralized exchange for Avalanche and Ethereum assets."
  />
  <meta
    property="og:description"
    content="Learn more about Pangolin and the PNG token. Pangolin is a community-driven decentralized exchange for Avalanche and Ethereum assets."
  />
  <meta name="twitter:title" content="Introducing Pangolin V2" />
  <meta property="og:title" content="Introducing Pangolin V2" />
  <title>Introducing Pangolin V2</title>
</svelte:head>
<div class="flex flex-wrap mt-10 space-y-4 text-center sm:space-y-0 sm:space-x-4">
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
<ContentsLayout selectors="h2, h3">
  <article slot="content" class="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl">
    <figure><img width="400px" src="/logo.svg" alt="PNG logo" /></figure>
    <h1>Introducing Pangolin V2</h1>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/XNutIHqKgKY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

    <h2 class="flex whitespace-pre-wrap group" id="Introduction">
      <a
        href="#Introduction"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Introduction</span
      >
    </h2>
    <p>
      Pangolin v1 was launched in February 2021 as a proven concept for automated market makers (AMMs), but native to
      the Avalanche network. Avalanche is the fastest smart contracts platform in the blockchain industry, as measured
      by time-to-finality, it’s also low cost, and is environmentally friendly.
    </p>
    <p>
      Since then, Pangolin has established itself as a safe, secure, and low-cost decentralized exchange and the premier
      DEX on Avalanche. Less than one year since its launch, the Pangolin v1 DEX has facilitated over $8.7bn in trading
      volume, and serves as a critical piece of DeFi infrastructure.
    </p>
    <p>
      Today, we are excited to announce an overview of Pangolin V2. We are targeting the launch of our new smart
      contracts on November 21st with deployment on Avalanche Mainnet.
    </p>

    <h2 class="flex whitespace-pre-wrap group" id="overview">
      <a
        href="#overview"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Overview</span
      >
    </h2>
    <ul>
      <li>
        <b>Improved Tokenomics</b>, reducing the $PNG emissions schedule, previously 28 years, to a new 4-year emissions
        schedule
      </li>
      <li>
        <b>Dramatically reduced $PNG supply</b>, the biggest token burn ever in DeFi’s history. We’ll be burning 57% of
        all remaining $PNG tokens, making them substantially more scarce.
      </li>
      <li>
        <b>Liquidity Provider Optimization</b>, enabled by making our smart contracts even smarter, allowing Pangolin to
        now offer even higher incentives to liquidity providers
      </li>
      <li>
        <b>Additional LP Rewards</b>, Pangolin will distribute the $4 Million USD of PNG tokens as rewards to liquidity
        providers in priority farms during the next 30 days to celebrate Pangolin V2
      </li>
      <li>
        <b>A new UX</b>, releasing phase 1 of a redesigned UI, including a migration tool to help users migrate from old
        pools to the new Pangolin pools. Phase 2 of our redesigned UI will cover the entire Dapp UI.
      </li>
    </ul>

    <p>
      We will be releasing further updates, additional information, and initial documentation over the coming days and
      welcome all feedback and involvement from the community.
    </p>
    <div style="display: flex;align-items:center;">
      <span><b>Pangolin Team</b></span><img class="ml-5" width="30px" src="/icon.svg" alt="PNG icon" />
    </div>
  </article>
</ContentsLayout>
<div class="flex flex-wrap mb-10 space-y-4 text-center sm:space-y-0 sm:space-x-4">
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
