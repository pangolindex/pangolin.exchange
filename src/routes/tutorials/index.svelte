<script>
  import TutorialCard from "$components/TutorialCard.svelte";
</script>

<svelte:head>
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
  <meta name="twitter:title" content="Tutorials - Pangolin" />
  <meta property="og:title" content="Tutorials - Pangolin" />
  <title>Tutorials - Pangolin</title>
</svelte:head>

<div class="mt-10 mb-8 sm:mb-10 sm:mt-14">
  <h2 class="text-2xl font-bold lg:text-4xl">Tutorials</h2>

  <p class="mt-5 mb-8 max-w-2xl leading-8 text-gray-600 lg:mt-8 text-md lg:text-xl">
    Here are some tutorials you might find helpful. Feel free to suggest new ones through any of the social channels!
  </p>

  <div class="flex flex-col sm:flex-row sm:flex-wrap">
    <TutorialCard
      href="/tutorials/getting-started"
      class="bg-gradient-to-br from-fuchsia-500 to-purple-600"
      texture="black-felt"
    >
      <span slot="title">Getting Started</span>
      <span slot="description">Set up your MetaMask wallet, and fund it with AVAX</span>
    </TutorialCard>

    <TutorialCard
      href="/tutorials/manage-liquidity"
      class="bg-gradient-to-br from-cyan-400 to-light-blue-500"
      texture="cartographer"
    >
      <span slot="title">Manage Liquidity</span>
      <span slot="description">Create new liquidity pools, or add and remove liquidity on existing pools</span>
    </TutorialCard>

    <TutorialCard
      href="/tutorials/swap-tokens"
      class="bg-gradient-to-br from-orange-400 to-pink-600"
      texture="concrete-wall-2"
    >
      <span slot="title">Swap Tokens</span>
      <span slot="description">Exchange tokens blazingly fast on Pangolin</span>
    </TutorialCard>

    <TutorialCard
      href="/tutorials/transfer-from-ethereum"
      class="bg-gradient-to-br from-purple-500 to-indigo-600"
      texture="foggy-birds"
    >
      <span slot="title">Transfer from Ethereum</span>
      <span slot="description">Transfer ETH or ERC-20 tokens to use on Pangolin</span>
    </TutorialCard>

    <TutorialCard href="/tutorials/earn-png" class="bg-gradient-to-br from-green-400 to-cyan-500" texture="food">
      <span slot="title">Earn PNG</span>
      <span slot="description">Learn what PGL tokens are and how to use them to earn PNG</span>
    </TutorialCard>

    <TutorialCard
      href="/tutorials/claim-png"
      class="bg-gradient-to-br from-yellow-400 to-orange-500"
      texture="purty-wood"
    >
      <span slot="title">Claim PNG</span>
      <span slot="description">Claim your PNG airdrop tokens as a UniSwap or SushiSwap token holder</span>
    </TutorialCard>
  </div>
</div>
