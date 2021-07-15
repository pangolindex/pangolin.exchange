<script>
  import FAQItem from "$lib/components/FAQItem.svelte";
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
  <h3 class="mb-12">About Pangolin</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">What is Pangolin Exchange?</span>
      <span slot="answer">
        Pangolin is a decentralized exchange (DEX) which runs on Avalanche, uses the same automated market-making (AMM)
        model as Uniswap's. Pangolin offers three critically important benefits: fast and cheap trades, community-driven
        development, and a fair and open token distribution.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Who is behind Pangolin Exchange?</span>
      <span slot="answer">
        Pangolin was originally created by AvaLabs. Eventually, the project was transitioned to a community-hired core
        team.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">What is Pangolin's roadmap?</span>
      <span slot="answer">
        Our <a
          class="hover:no-underline"
          href="https://pangolindex.medium.com/how-pangolin-becomes-a-premier-dex-in-defi-roadmap-for-2021-8303aca66f37"
          >2021 roadmap</a
        > includes a UX redesign, CEX listings, PNG staking, Governance improvements, and much more.
      </span>
    </FAQItem>
  </section>
  <h3 class="mb-12">PNG token</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">What is the PNG token used for?</span>
      <span slot="answer">
        PNG is the Pangolin governance token. PNG holders can use their tokens to provide liquidity in Pangolin's pools
        and vote on proposals.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Can I stake my PNG on Pangolin?</span>
      <span slot="answer"> PNG staking is on our 2021 roadmap and coming soon </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">What exchanges is PNG listed on?</span>
      <span slot="answer">
        A list of exchanges supporting PNG can be found
        <a class="hover:no-underline" href="https://coinmarketcap.com/currencies/pangolin/markets/">here</a>.
      </span>
    </FAQItem>
  </section>

  <h3 class="mb-12">Swapping Tokens</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">What fees do I have to pay when trading on Pangolin?</span>
      <span slot="answer"> There is a 0.3% liquidity provider fee for each swap on Pangolin. </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Which wallets can I use to swap on Pangolin?</span>
      <span slot="answer"> Pangolin currently supports MetaMask and MetaMask compatible devices like Ledger. </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">How much trading volume happens on Pangolin?</span>
      <span slot="answer">
        Our <a class="hover:no-underline" href="https://info.pangolin.exchange/">analytics page </a> has a daily, weekly,
        and monthly volume chart.
      </span>
    </FAQItem>
  </section>
  <h3 class="mb-12">Providing Liquidity</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">How can I see the pools offered in Pangolin and their APYs?</span>
      <span slot="answer">
        Go to the New PNG page <a class="hover:no-underline" href="https://app.pangolin.exchange/#/png/1">here</a> to see
        all the pools currently offered in Pangolin along with their APYs. Keep in mind that the APY for a specific pool
        will go down as users bring in more liquidity. (and vice versa) Also, Pangolin has limited the pools to PNG and AVAX
        pairs only.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">Are there any risks involved in being a liquidity provider on Pangolin?</span>
      <span slot="answer">
        Yes, IL (impermanent loss) is one of the biggest risks of being a LP on any decentralized exchange. In terms of
        security, Pangolin is a fork of Uniswap and Sushiswap: It uses the same code for the smart contracts.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">I’m a liquidity provider. How can I see my deposited liquidity?</span>
      <span slot="answer">
        Go to the analytics page <a class="hover:no-underline" href="https://info.pangolin.exchange/#/accounts">here</a
        >, enter your wallet address and click on "Load Account Details". This will show you how much tokens you'd get
        if you were to withdraw your liquidity at this specific moment.
      </span>
    </FAQItem>
  </section>

  <h3 class="mb-12">Troubleshooting</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">My transaction is pending on Metamask for some time now, what can I do?</span>
      <span slot="answer">
        First check that your gas fee is set to exactly: 225 gwei. If it is, retry the transaction.
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
      <span slot="question">Why did my transaction fail?</span>
      <span slot="answer">
        If your transaction failed, it's either because you don't have enough slippage or use enough gas. You'll have to
        increase your allowed slippage to account for the fee taken during the swap. Click on the gear icon for settings
        and adjust slippage tolerance accordingly.
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
  </section>
</article>
