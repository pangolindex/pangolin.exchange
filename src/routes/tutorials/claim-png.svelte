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
  <meta name="twitter:title" content="Claim PNG - Pangolin" />
  <meta property="og:title" content="Claim PNG - Pangolin" />
  <title>Claim PNG - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 prose lg:prose-xl sm:mb-10 sm:mt-14">
    <h2>Claiming your PNG Airdrop as a UniSwap or SushiSwap Token Holder</h2>

    <p>
      The airdrop allocation of PNG is distributed on the basis of ownership of UNI and SUSHI on December 7th, 2020. In
      order to claim PNG, UNI or SUSHI token holders must use the wallet that held these tokens. The claim must be
      executed within one month of Pangolin’s launch.
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="claim-png">
      <a
        href="#claim-png"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Claim PNG
      </span>
    </h3>

    <ol>
      <li>
        Access the bridge <a href="https://aeb.xyz/" target="_blank" class="hover:no-underline">here</a>
      </li>
      <li>
        Select "Transfer"
        <img src="/tutorials/claim-png/001.png" />
      </li>
      <li>Connect MetaMask with the wallet that held UNI or SUSHI on December 7th.</li>
      <li>
        Select "Ethereum Mainnet" network on your MetaMask wallet
        <img src="/tutorials/claim-png/002.png" />
      </li>
      <li>Select the Destination Network as Avalanche</li>
      <li>Select either UNI or SUSHI as the token you would like to transfer</li>
      <li>
        Enter at least 1 UNI or SUSHI. <strong>
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
      <li>
        Go to the Pangolin app <a href="https://app.pangolin.exchange" target="_blank" class="hover:no-underline"
          >here</a
        >.
      </li>
      <li>
        Select "Airdrop"
        <img src="/tutorials/claim-png/004.png" />
      </li>
      <li>Select the button to claim your PNG</li>
    </ol>

    <p>Congratulations! You should now have your airdropped PNG. Welcome to Pangolin!</p>
  </article>
</ContentsLayout>
