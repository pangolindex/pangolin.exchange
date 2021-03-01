<script>
  import ContentsLayout from "$components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/claim-png" />
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
  <meta name="twitter:title" content="Claim PNG - Pangolin" />
  <meta property="og:title" content="Claim PNG - Pangolin" />
  <title>Claim PNG - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 prose lg:prose-xl sm:mb-10 sm:mt-14">
    <h2>Claiming your PNG Airdrop as an Ethereum UniSwap or SushiSwap Token Holder</h2>

    <h4>Requirements</h4>
    <ul>
      <li>
        <strong
          >You will need to set up MetaMask for Avalanche prior to claiming your PNG airdrop. Follow the tutorial <a
            href="/tutorials/getting-started"
            target="_blank"
            class="hover:no-underline">here</a
          >.</strong
        >
      </li>
      <li><strong>Held UNI or SUSHI on Ethereum on December 7, 2020</strong></li>
      <li>
        <strong>Have access to the exact same wallet that held the UNI or SUSHI on Ethereum on December 7, 2020</strong>
      </li>
      <li>
        <strong
          >Own one UNI or SUSHI on Avalanche with the same wallet that held the tokens on Ethereum on December 7, 2020.</strong
        >
      </li>
    </ul>

    <p>
      The airdrop allocation of PNG is distributed on the basis of ownership of UNI and SUSHI on Ethereum on December
      7th, 2020. The claim must be executed within one month of Pangolin’s launch. As a reminder, you need one UNI or
      SUSHI to claim the airdrop and you can obtain either token through the Pangolin Exchange or Bridge. Please do your
      own research and compare the costs.
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="obtain-uni-or-sushi">
      <a
        href="#obtain-uni-or-sushi"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Obtain and own UNI or SUSHI on Avalanche
      </span>
    </h3>

    <p>
      In order to claim your PNG, you need to own one UNI or SUSHI on Avalanche. If you already own either token on
      Avalanche, you may skip this step and proceed to Claiming PNG. To own one UNI or SUSHI on Avalanche, you can
      either buy it on the Pangolin Exchange or transfer one of them from Ethereum to Avalanche with the bridge.
    </p>

    <h4 class="flex whitespace-pre-wrap group" id="buying-uni-or-sushi-on-pangolin">
      <a
        href="#buying-uni-or-sushi-on-pangolin"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Buying UNI or SUSHI with Pangolin on Avalanche
      </span>
    </h4>

    <p>
      Instead of using the bridge you can buy one UNI or SUSHI on Avalanche with Pangolin. Note that you will need to
      have tokens (i.e. AVAX, ETH, WBTC, etc…) already on Avalanche in order to swap tokens for UNI or SUSHI. Please
      follow the <a href="/tutorials/swap-tokens" target="_blank" class="hover:no-underline">Swap Tokens</a> tutorial.
      Note that you need AVAX to pay for gas fees when using Pangolin – follow
      <a href="/tutorials/getting-started" target="_blank" class="hover:no-underline">this</a> tutorial if you don’t have
      AVAX.
    </p>

    <h4 class="flex whitespace-pre-wrap group" id="transferring-uni-or-sushi-to-avalanche">
      <a
        href="#transferring-uni-or-sushi-to-avalanche"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Transferring UNI or SUSHI to Avalanche
      </span>
    </h4>

    <p>
      Before using the bridge, make sure that you have AVAX on your wallet when connected to Avalanche. Since your
      Ethereum wallet can be used on Avalanche, you will need AVAX to pay for gas fees when using Avalanche. Feel free
      to follow this tutorial <a href="/tutorials/getting-started" target="_blank" class="hover:no-underline">here</a>.
    </p>

    <p>Follow the steps below to transfer UNI or SUSHI that you own on Ethereum to Avalanche.</p>

    <ol>
      <li>
        Access the bridge <a href="https://aeb.xyz/" target="_blank" class="hover:no-underline">here</a>
      </li>
      <li>
        Make sure you are on the "Transfer" tab
        <img src="/tutorials/claim-png/001.png" />
      </li>
      <li>Select "Connect MetaMask" and make sure you are using the wallet that held UNI or SUSHI on December 7th.</li>
      <li>
        Select "Ethereum Mainnet" network on your MetaMask wallet
        <img src="/tutorials/claim-png/002.png" />
      </li>
      <li>Select the Destination Network as Avalanche</li>
      <li>
        Ensure that you have ETH on this wallet to pay for Ethereum gas fees, which will be noted as a "Bridge Fee".
      </li>
      <li>Select either UNI or SUSHI as the token you would like to transfer</li>
      <li>
        Enter either 1 UNI or SUSHI. <strong>
          Note that you only need 1 UNI or SUSHI to be eligible for the PNG airdrop and you don’t need the original UNI
          or SUSHI token.
        </strong>
      </li>
      <li>
        Enter the destination address, which can be found on your MetaMask wallet or you may select the checkbox "I want
        to send funds to my address". <strong>Note that the address starts with "0x".</strong>
        <img src="/tutorials/claim-png/003.png" />
      </li>
      <li>Select "Start Transfer" and confirm the transaction</li>
    </ol>

    <h3 class="flex whitespace-pre-wrap group" id="claiming-png">
      <a
        href="#claiming-png"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Claiming PNG
      </span>
    </h3>

    <ol>
      <li>Make sure that you are connected to the Avalanche Network on MetaMask.</li>
      <li>
        Make sure you have AVAX to pay for a gas fee. If you don’t have AVAX on this wallet, please follow the tutorial
        <a href="/tutorials/getting-started" target="_blank" class="hover:no-underline">here</a>.
      </li>
      <li>
        Go to the Pangolin app <a href="https://app.pangolin.exchange" target="_blank" class="hover:no-underline"
          >here</a
        >.
      </li>
      <li>
        Connect your MetaMask to Pangolin by selecting "Connect to a wallet".
        <img src="/tutorials/claim-png/004.png" />
      </li>
      <li>
        Select "Airdrop"
        <img src="/tutorials/claim-png/005.png" />
      </li>
      <li>Select the button to claim your PNG and confirm the transaction on MetaMask.</li>
    </ol>

    <p>Congratulations! You should now have your airdropped PNG. Welcome to Pangolin!</p>
  </article>
</ContentsLayout>
