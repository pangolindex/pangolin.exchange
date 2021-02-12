<script>
  import ContentsLayout from "$components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/swap-tokens" />
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
  <meta name="twitter:title" content="Swap Tokens - Pangolin" />
  <meta property="og:title" content="Swap Tokens - Pangolin" />
  <title>Swap Tokens - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 prose lg:prose-xl sm:mb-10 sm:mt-14">
    <h2>Swap Tokens</h2>

    <p><i>Swap tokens on Pangolin</i></p>

    <h3 class="flex whitespace-pre-wrap group" id="swap-tokens">
      <a
        href="#swap-tokens"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Swap Tokens</span
      >
    </h3>

    <p>
      By using the swap function, you can exchange tokens. In this example, there is .01 AVAX that can swap for
      0.0496027 UNI at a rate of 0.201602 AVAX per UNI.
    </p>

    <img src="/tutorials/swap-tokens/001.png" />

    <p>
      If you decide to increase the amount you want to swap in an inefficient pool, a warning will indicate that you are
      about to swap at an unfavorable rate. To avoid this, simply lower the amount you want to swap or wait for the pool
      to increase in liquidity.
    </p>

    <img src="/tutorials/swap-tokens/002.png" />

    <h3 class="flex whitespace-pre-wrap group" id="interface-settings">
      <a
        href="#interface-settings"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Interface Settings</span
      >
    </h3>

    <p>
      With interface settings, you can adjust slippage, transaction timeouts, and the interface from light to dark mode.
      In the top right corner, there is a cog wheel that gives you the option to change these settings.
    </p>

    <img src="/tutorials/swap-tokens/003.png" />

    <h4 class="flex whitespace-pre-wrap group" id="transaction-settings">
      <a
        href="#transaction-settings"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Transaction Settings</span
      >
    </h4>

    <p>
      Slippage tolerance: set limits on how much you are willing to let the price change for the swap. If it falls out
      of the limit, the transaction is canceled.
    </p>

    <p>Transaction deadline: set a time limit for the transaction to be fulfilled, otherwise, it is canceled.</p>

    <h4 class="flex whitespace-pre-wrap group" id="interface-settings-2">
      <a
        href="#interface-settings-2"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Interface Settings</span
      >
    </h4>

    <p>Toggle Expert Mode <strong>[Not Recommended]</strong>: can be set to allow unlimited slippage.</p>
    <p>Toggle Dark Mode: set Pangolin to light or dark mode.</p>
  </article>
</ContentsLayout>
