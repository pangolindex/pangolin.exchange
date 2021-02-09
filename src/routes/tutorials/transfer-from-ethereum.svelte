<script>
  import ContentsLayout from "$components/ContentsLayout.svelte";
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
  <meta name="twitter:title" content="Transfer from Ethereum - Pangolin" />
  <meta property="og:title" content="Transfer from Ethereum - Pangolin" />
  <title>Transfer from Ethereum - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 prose lg:prose-xl sm:mb-10 sm:mt-14">
    <h2>Transfer from Ethereum</h2>

    <p>
      If you have Ethereum (ETH) or Ethereum ERC-20 tokens, you can use the Avalanche-Ethereum bridge to bring them to
      Avalanche and use Pangolin. The bridge allows you to transfer assets between both blockchain networks. The diagram
      below illustrates how the assets flow from Ethereum to Avalanche to use for Pangolin.
    </p>

    <img src="/tutorials/transfer-from-ethereum/001.png" />

    <h3 class="flex whitespace-pre-wrap group" id="transfer-eth">
      <a
        href="#transfer-eth"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Transferring Ethereum (ETH) to Avalanche</span
      >
    </h3>

    <ol>
      <li>
        Access the bridge portal <a href="https://aeb.xyz/" target="_blank" class="hover:no-underline">here</a>
      </li>
      <li>
        Select "Wrap Token"
        <img src="/tutorials/transfer-from-ethereum/002.png" />
      </li>
      <li>Select "Connect Metamask" and sign into your wallet</li>
      <li>
        Select the "Ethereum Mainnet" network on your MetaMask wallet
        <img src="/tutorials/transfer-from-ethereum/003.png" />
      </li>

      <li>
        Select Ethereum, enter the amount you would like to wrap and then select "Wrap Token". <strong
          >Learn more about what wrapping means <a
            href="https://support.avalabs.org/en/articles/4623667-what-is-weth-or-wrapped-eth"
            target="_blank"
            class="hover:no-underline">here</a
          >.</strong
        >
        <img src="/tutorials/transfer-from-ethereum/004.png" />
      </li>
      <li>
        Select "Transfer"
        <img src="/tutorials/transfer-from-ethereum/005.png" />
      </li>
      <li>Select the Destination Network as "Avalanche"</li>
      <li>Select WETH as the token you want to transfer to Avalanche</li>
      <li>Enter the amount of WETH you want to transfer</li>
      <li>
        Enter the destination address, which can be found on your MetaMask wallet or you may select the checkbox "I want
        to send funds to my address". <strong>Note that the address starts with "0x".</strong>
        <img src="/tutorials/transfer-from-ethereum/006.png" />
      </li>
      <li>Select "Start Transfer"</li>
    </ol>

    <p>
      Congratulations! You wrapped your Ethereum and transferred it to Avalanche, which can now be used to swap tokens
      or add liquidity to a pool on Pangolin.
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="transfer-erc-20s">
      <a
        href="#transfer-erc-20s"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Transferring Ethereum ERC-20s to Avalanche</span
      >
    </h3>
    <ol>
      <li>
        Access the bridge portal <a href="https://aeb.xyz/" target="_blank" class="hover:no-underline">here</a>
      </li>
      <li>
        Make sure you are on "Transfer" tab
        <img src="/tutorials/transfer-from-ethereum/007.png" />
      </li>
      <li>Select "Connect Metamask" and sign into your wallet</li>
      <li>
        Select "Ethereum Mainnet" network on your MetaMask wallet
        <img src="/tutorials/transfer-from-ethereum/008.png" />
      </li>

      <li>Select the Destination Network as "Avalanche"</li>
      <li>Select the ERC-20 token that you would like to transfer</li>
      <li>Enter the amount of the ERC-20 token</li>
      <li>
        Enter the destination address, which can be found on your MetaMask wallet or you may select the checkbox "I want
        to send funds to my address". <strong>Note that the address starts with "0x".</strong>
        <img src="/tutorials/transfer-from-ethereum/009.png" />
      </li>
      <li>Select "Start Transfer"</li>
    </ol>

    <p>
      Congratulations! You transferred your ERC-20 token to Avalanche, which can now be used to swap tokens or add
      liquidity to a pool on Pangolin.
    </p>
  </article>
</ContentsLayout>
