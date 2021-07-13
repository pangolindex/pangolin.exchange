<script>
  import ContentsLayout from "$lib/components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/getting-started" />
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
  <meta name="twitter:title" content="Getting Started - Pangolin" />
  <meta property="og:title" content="Getting Started - Pangolin" />
  <title>Getting Started - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl">
    <h2>Considerations</h2>
    <p>
      <span><h4>Fees</h4></span>
      <span>
        MetaMask displays the gas fee dollar amount in ETH equivalent on Avalanche, however, the token used for gas is
        AVAX when using the Avalanche network. To calculate the true dollar equivalent, you will have to multiply the
        units of AVAX used * the current market price of AVAX.
      </span>
    </p>
    <p>
      <span><h4>Bridge</h4></span>
      <span>
        You must have AVAX in your Avalanche wallet to make a transaction after you transfer any asset from Ethereum.
      </span>
    </p>
    <p>
      <span><h4>Wallet</h4></span>
      <span>You can use the same wallet address on Ethereum with Avalanche.</span>
    </p>

    <h2>Getting Started on Pangolin</h2>

    <video controls>
      <source src="/videos/a-quick-overview-of-pangolin.mp4" type="video/mp4" />
      Your browser does not support the video tag. Click
      <a href="https://www.youtube.com/watch?v=OLas-XVmUOU" target="_blank" class="hover:no-underline">here</a> to watch
      the video on YouTube.
    </video>

    <p><i>Set up your MetaMask wallet, and fund it with AVAX</i></p>
    <p>
      Pangolin is a community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low
      transaction fees, and a democratic distribution–powered by Avalanche. Pangolin brings you the best trading
      opportunities to find and maximize your yield.
    </p>
    <p>
      Avalanche supports the Ethereum Virtual Machine (EVM), which enables traders with Ethereum assets to instantly and
      cheaply swap tokens. Learn more about Pangolin <a href="/litepaper" target="_blank" class="hover:no-underline"
        >here</a
      >.
    </p>
    <p>
      <strong>Reminder: to use Pangolin, you will need AVAX to cover the gas fees to execute transactions.</strong>
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="setting-up-avalanche-wallet">
      <a
        href="#setting-up-avalanche-wallet"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Setting Up and Funding Your Avalanche Wallet with AVAX</span
      >
    </h3>

    <p>
      If you already have an Avalanche Wallet and AVAX tokens, skip this step and move to <a
        href="#set-up-metamask"
        class="hover:no-underline">Setting Up Metamask</a
      >.
    </p>
    <ol>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="create-an-avalanche-wallet">
          <a
            href="#create-an-avalanche-wallet"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Create an Avalanche Wallet</span
          >
        </h4>
        <p>
          Create an Avalanche Wallet by visiting
          <a href="https://wallet.avax.network/" target="_blank" class="hover:no-underline"
            >https://wallet.avax.network/</a
          >, clicking on "Create New Wallet", and following the subsequent instructions
        </p>
      </li>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="get-avax">
          <a
            href="#get-avax"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Get AVAX</span
          >
        </h4>
        <p>
          You can get AVAX from any of the supported exchanges listed on
          <a href="https://coinmarketcap.com/currencies/avalanche/markets/" target="_blank" class="hover:no-underline"
            >CoinMarketCap</a
          >.
        </p>
      </li>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="transfer-to-your-avalanche-wallet">
          <a
            href="#transfer-to-your-avalanche-wallet"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Transfer to Your Avalanche Wallet</span
          >
        </h4>
        <p>
          Once you have AVAX, send AVAX to your Avalanche Wallet that was created in Step 1. Find your wallet address
          that starts with "x-avax1" on your Avalanche Wallet.
        </p>
        <p>
          Now that you have AVAX, you may proceed to <a href="#set-up-metamask" class="hover:no-underline"
            >Setting Up Metamask</a
          >.
        </p>
      </li>
    </ol>

    <h3 class="flex whitespace-pre-wrap group" id="set-up-metamask">
      <a
        href="#set-up-metamask"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Set Up MetaMask with Avalanche</span
      >
    </h3>

    <video controls>
      <source src="/videos/setting-up-metamask-on-pangolin.mp4" type="video/mp4" />
      Your browser does not support the video tag. Click
      <a href="https://www.youtube.com/watch?v=DQlPi56lOks" target="_blank" class="hover:no-underline">here</a> to watch
      the video on YouTube.
    </video>

    <ol>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="download-metamask">
          <a
            href="#download-metamask"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Download MetaMask</span
          >
        </h4>
        <p>Download MetaMask <a href="https://metamask.io" target="_blank" class="hover:no-underline">here</a>.</p>
        <p>
          Install MetaMask as an extension to your browser. Note that the following browsers are supported: Chrome,
          FireFox, Brave, and Edge.
        </p>
      </li>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="create-a-wallet  ">
          <a
            href="#create-a-wallet  "
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Create a Wallet or Import an Existing Wallet</span
          >
        </h4>
        <p>
          This is where you have to create or import an existing Ethereum wallet. If you don’t have an existing Ethereum
          wallet, please select "Create a Wallet". Always keep your Mnemonic and password to yourself and make sure to
          write it down. <strong
            >Note: This is the wallet that will be used to conduct transactions on Avalanche.</strong
          >
        </p>
      </li>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="connect-metamask">
          <a
            href="#connect-metamask"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Connect Metamask to Avalanche</span
          >
        </h4>
        <p>
          Click the drop-down menu and select "Custom RPC."
          <img src="/tutorials/getting-started/001.png" />
        </p>
        <p>Enter the following settings into the respective fields:</p>
        <ul>
          <li><strong>Network Name</strong>: Avalanche Network</li>
          <li><strong>New RPC URL</strong>: https://api.avax.network/ext/bc/C/rpc</li>
          <li><strong>ChainID</strong>: 0xa86a</li>
          <li><strong>Symbol</strong>: AVAX</li>
          <li><strong>Explorer</strong>: https://cchain.explorer.avax.network/</li>
        </ul>
      </li>
      <li>
        <h4 class="flex whitespace-pre-wrap group" id="add-png-to-metamask">
          <a
            href="#add-png-to-metamask"
            class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
            >Add Pangolin (PNG) token to be displayed on your MetaMask</span
          >
        </h4>
        <ol>
          <li>
            Select "Add Token"
            <img src="/tutorials/getting-started/002.png" />
          </li>
          <li>
            Select "Custom Token"
            <img src="/tutorials/getting-started/003.png" />
          </li>
          <li>
            Enter the following information into the available fields:
            <ul>
              <li>Token Contract Address: 0x60781C2586D68229fde47564546784ab3fACA982</li>
              <li>Token Symbol: PNG</li>
            </ul>
          </li>
          <li>Select "Next"</li>
        </ol>

        <p>You have now successfully added the Pangolin (PNG) token to be displayed on your MetaMask.</p>
      </li>
    </ol>

    <h3 class="flex whitespace-pre-wrap group" id="fund-metamask">
      <a
        href="#fund-metamask"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Fund Your MetaMask Connected to Avalanche</span
      >
    </h3>

    <h4 class="flex whitespace-pre-wrap group" id="send-avax-to-metamask">
      <a
        href="#send-avax-to-metamask"
        class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Send AVAX to Your MetaMask Connected to Avalanche</span
      >
    </h4>

    <ol>
      <li>
        Go to <a href="https://wallet.avax.network/" target="_blank" class="hover:no-underline"
          >https://wallet.avax.network/</a
        >, and access your Avalanche Wallet.
      </li>
      <li>
        On the left, there is a list of options. Click "Cross-Chain"
        <img src="/tutorials/getting-started/004.png" />
      </li>
      <li>
        Choose the "C Chain (Contract)" as the destination chain
        <img src="/tutorials/getting-started/005.png" />
      </li>
      <li>Enter the amount you would like to transfer, and then click confirm</li>
      <li>
        <p>Send the AVAX from your Avalanche wallet to your MetaMask wallet.</p>
        <ol>
          <li>
            Select "Send"
            <img src="/tutorials/getting-started/006.png" />
          </li>
          <li>
            Select "C Contract" as the <i>Source Chain</i>
            <img src="/tutorials/getting-started/007.png" />
          </li>
          <li>
            Enter your MetaMask wallet address by copying and pasting it into the "To Address" field on your Avalanche
            wallet.
            <img src="/tutorials/getting-started/008.png" />
          </li>
          <li>Confirm and finalize the transaction.</li>
        </ol>
      </li>
    </ol>

    <p>Congratulations! You now have AVAX on your MetaMask wallet and can start using Avalanche.</p>
  </article>
</ContentsLayout>
