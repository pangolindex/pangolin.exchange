<script>
  import FAQItem from "$components/FAQItem.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/faq" />
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
  <meta name="twitter:title" content="FAQ - Pangolin" />
  <meta property="og:title" content="FAQ - Pangolin" />
  <title>FAQ - Pangolin</title>
</svelte:head>

<article class="px-4 mt-12 mb-16 max-w-4xl prose lg:prose-lg">
  <h3 class="mb-12">Frequently Asked Questions</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">Can I send my Avalanche assets from Metamask to an Exchange or an ETH address?</span>
      <span slot="answer">
        No, you cannot send assets across networks from Avalanche to Ethereum or vice versa. You need to use the <a
          class="hover:no-underline"
          href="https://aeb.xyz/#/transfer">Avalanche-Ethereum Bridge</a
        > every time you want to send assets between networks.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">My transaction is pending on Metamask for some time now, what can I do?</span>
      <span slot="answer">
        First check that your gas fee is set to exactly: 470 gwei. If it is, retry the transaction.
        <br />
        <br />
        If it doesn’t go through, try resetting your Metamask by Clicking the account icon on the top-right corner of MetaMask
        → Select Settings → Select Advanced → Scroll down and click Reset Account.
        <br />
        <br />
        Please note, resetting your account <u>will not</u> disrupt your funds or wallet address.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Why isn’t my ERC-20 token showing in my Metamask wallet?</span>
      <span slot="answer">
        This is due to the token address changing. When you transfer ERC-20’s across the <a
          class="hover:no-underline"
          href="https://aeb.xyz/#/transfer">Avalanche-Ethereum Bridge</a
        >, the Token contract address changes. Token contract addresses are different on Ethereum and Avalanche despite
        being the same represented token.
        <br />
        <br />
        To import the Avalanche token address of any Avalanche supported ERC-20 follow these steps:
        <ol>
          <li>Open Metamask</li>
          <li>Scroll down to "Add Token"</li>
          <li>Tap on the "Custom Token" tab</li>
          <li>
            Navigate to: the <a
              class="hover:no-underline"
              href="https://tokenlists.org/token-list?url=https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json"
              >Avalanche Token List</a
            >
          </li>
          <li>Find the token you wish to import and copy the contract address</li>
          <li>Paste the contract address inside Metamask</li>
          <li>Tap Next</li>
          <li>Done!</li>
        </ol>
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Why are my fees displayed in ETH on MetaMask?</span>
      <span slot="answer">
        MetaMask is originally built for Ethereum and does not support the native tokens of other blockchain networks.
        The ETH units displayed are actually AVAX units when on the Avalanche network. Therefore, to get the true cost
        of transactions, you need to multiply the units by the current market rate of AVAX.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Why do I have to make two transactions sometimes using MetaMask?</span>
      <span slot="answer">
        MetaMask will ask you to first approve the Pangolin app to interact with your tokens. Afterwards, you will then
        be able to confirm the transaction.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Am I able to use my Ethereum wallet on Avalanche?</span>
      <span slot="answer">
        Yes - that is the power of Avalanche! It allows you to use your same wallet that you use on Ethereum.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">What is PNG?</span>
      <span slot="answer">
        PNG is the Pangolin governance token. Learn more about PNG governance <a
          class="hover:no-underline"
          href="/litepaper">here</a
        >.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Why does my liquidity not show up on the pools page?</span>
      <span slot="answer">
        If you deposit your PGL tokens, your liquidity won’t show up on the pools page until you withdraw your PGL
        tokens. Technically, you are handing ownership of your liquidity to the staking pools and you can’t claim your
        liquidity until you withdraw your PGL tokens.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Do I still get fees when staking PGL to mine PNG?</span>
      <span slot="answer">
        Yes. Fees are added to the pool and are extracted proportionally when you withdraw your PGL.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">
        Do I need to have the original SUSHI or UNI tokens from my wallet to claim the airdrop?
      </span>
      <span slot="answer">
        No. You just need the wallet that held SUSHI or UNI on December 7th, 2020. However, in order to claim the
        airdrop, you will only need one SUSHI or UNI.
      </span>
    </FAQItem>
  </section>
</article>
