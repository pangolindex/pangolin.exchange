<script>
  import ContentsLayout from "$lib/components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/transfer-from-ethereum" />
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
  <meta name="twitter:title" content="Transfer from Ethereum - Pangolin" />
  <meta property="og:title" content="Transfer from Ethereum - Pangolin" />
  <title>Transfer from Ethereum - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl">
    <h2>Transfer from Ethereum</h2>

    <p>
      If you have Ethereum ERC-20 tokens, you can use the <a href="https://bridge.avax.network/" target="_blank">Avalanche Bridge</a> to bring them to
      Avalanche and use Pangolin. The bridge allows you to transfer assets between both blockchain networks.
    </p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/RLnNMfINwS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h3 class="flex whitespace-pre-wrap group" id="transfer-eth">
      <a
        href="#transfer-eth"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Transferring Ethereum ERC-20 Tokens to Avalanche</span
      >
    </h3>

    <ol>
      <li>
        Access the <a href="https://bridge.avax.network/" target="_blank">Avalanche Bridge</a>
      </li>
      <li>
        Select "Metamask" and login into your wallet
        <img src="/tutorials/transfer-from-ethereum/010.png" />
      </li>
      <li>
        Select the "Ethereum Mainnet" network on your MetaMask wallet
        <img src="/tutorials/transfer-from-ethereum/003.png" />
      </li>

      <li>
        Select the token you would like to bridge, enter the amount you would like to bridge.
        <img src="/tutorials/transfer-from-ethereum/011.png" />
      </li>
      <li>
        Select "Transfer"
        <img src="/tutorials/transfer-from-ethereum/012.png" />
      </li>
      <li>
        Wait for confirmations on the Ethereum network and Avalanche network
        <img src="/tutorials/transfer-from-ethereum/013.png" />
      </li>
      <li>
        After the transaction is complete, you can review the Transaction Details
        <img src="/tutorials/transfer-from-ethereum/014.png" />
      </li>
    </ol>

    <p>
      Congratulations! You bridged your ERC-20 tokens to Avalanche. These tokens can now be used to swap
      or add liquidity to a pool on Pangolin.
    </p>
  </article>
</ContentsLayout>
