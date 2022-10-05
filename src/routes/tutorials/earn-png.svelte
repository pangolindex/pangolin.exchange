<script>
  import ContentsLayout from "$lib/components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/earn-png" />
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
  <meta name="twitter:title" content="Earn PNG - Pangolin" />
  <meta property="og:title" content="Earn PNG - Pangolin" />
  <title>Earn PNG - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl">
    <h2>Using your Liquidity Provider (PGL) Tokens to Earn the Pangolin (PNG) Governance Token</h2>

    <p>
      After you successfully create a pool or add liquidity to an existing pool, you receive PGL tokens. These tokens
      are a representation of your ownership in a pool. You may use those PGL tokens to earn the PNG governance token by
      depositing them into one of your participating pools.
    </p>

    <p>
      <strong
        >Note: You may only receive PNG rewards from supported pools, which can be found under the following section on
        the litepaper: Community - Liquidity Mining Allocation (95% of PNG)</strong
      >
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="depositing-pgl-tokens">
      <a
        href="#depositing-pgl-tokens"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Depositing PGL Tokens
      </span>
    </h3>

    <ol>
      <li>
        Select "PNG"
        <img src="/tutorials/earn-png/001.png" />
      </li>
      <li>
        Find the pool you are participating in
        <img src="/tutorials/earn-png/002.png" />
      </li>
      <li>Select "Deposit"</li>
      <li>
        Select "Deposit PGL Tokens"
        <img src="/tutorials/earn-png/003.png" />
      </li>
      <li>
        Enter the amount of PGL tokens you would like to deposit
        <img src="/tutorials/earn-png/004.png" />
      </li>
      <li>Select "Approve" and sign the transaction</li>
      <li>Select "Deposit" and confirm the transaction</li>
    </ol>

    <h3 class="flex whitespace-pre-wrap group" id="claim-png-without-withdrawing">
      <a
        href="#claim-png-without-withdrawing"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Claiming PNG Tokens without Withdrawing PGL Tokens
      </span>
    </h3>

    <p>
      After depositing your PGL tokens into a pool, you will accrue PNG tokens. You can claim your earned PNG tokens
      without having to remove your PGL tokens.
    </p>

    <ol>
      <li>
        Select "PNG"
        <img src="/tutorials/earn-png/005.png" />
      </li>
      <li>
        Select "Manage" on the pool you would like to claim your PNG tokens from
        <img src="/tutorials/earn-png/006.png" />
      </li>
      <li>
        Select "Claim"
        <img src="/tutorials/earn-png/007.png" />
      </li>
      <li>
        Select "Claim" again and confirm the transaction through MetaMask
        <img src="/tutorials/earn-png/008.png" />
      </li>
    </ol>

    <p>Congratulations! You have just received your PNG rewards without removing your PGL tokens.</p>

    <h3 class="flex whitespace-pre-wrap group" id="withdrawing-pgl-tokens">
      <a
        href="#withdrawing-pgl-tokens"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Withdrawing PGL Tokens
      </span>
    </h3>

    <p>After depositing your PGL tokens into a pool, you may claim your PNG tokens by withdrawing your PGL tokens.</p>

    <ol>
      <li>
        Select "PNG"
        <img src="/tutorials/earn-png/009.png" />
      </li>
      <li>
        Select "Manage" on the pool you would like to withdraw from
        <img src="/tutorials/earn-png/010.png" />
      </li>
      <li>
        Select "Withdraw"
        <img src="/tutorials/earn-png/011.png" />
      </li>
      <li>
        Select "Withdraw & Claim"
        <img src="/tutorials/earn-png/012.png" />
      </li>
      <li>Confirm the transaction on MetaMask</li>
    </ol>

    <p>Congratulations! You have successfully withdrawn your PGL tokens and PNG token rewards.</p>
  </article>
</ContentsLayout>
