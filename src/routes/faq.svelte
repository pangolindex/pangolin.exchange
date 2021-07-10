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
  <h3 class="mb-12">Frequently Asked Questions</h3>

  <section class="divide-y-2 divide-solid">
    <FAQItem>
      <span slot="question">I'm new here. How do I use Pangolin?</span>
      <span slot="answer">
        Go to the tutorials page <a
          class="hover:no-underline"
          href="/tutorials">here</a
        > to learn more about Pangolin and how it works.
      </span>
    </FAQItem>
    
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
      <span slot="question">What is PNG and what is it used for?</span>
      <span slot="answer">
        PNG is the Pangolin governance token. PNG holders can use their tokens to provide liquidity in Pangolin's pools and vote on proposals.
        Learn more about PNG governance <a
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
      <span slot="question">Can I stake my PNG on Pangolin?</span>
      <span slot="answer">
        You can't stake your PNG on Pangolin at the moment, but stay tuned! 
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Is there a roadmap for Pangolin?</span>
      <span slot="answer">
        Yes, there is! And you can read it <a
          class="hover:no-underline"
          href="https://pangolindex.medium.com/how-pangolin-becomes-a-premier-dex-in-defi-roadmap-for-2021-8303aca66f37">here</a
        >.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">What is the expert mode? How can I toggle it?</span>
      <span slot="answer">
        Expert mode bypasses confirmation modals and allows high slippage trades. So it's not recommended for unexperienced users.
        You can toggle the expert mode by clicking on settings at the 
        <a
          class="hover:no-underline"
          href="https://app.pangolin.exchange/#/swap">swap page</a
        >
        Use at your own risk. 
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">What is the slippage rate? How can I adjust it?</span>
      <span slot="answer">
        The slippage rate is the percentage that will revert your transaction if the price changes unfavorably by more than this value.
        You can adjust the slippage rate by clicking on settings at the 
        <a
          class="hover:no-underline"
          href="https://app.pangolin.exchange/#/swap">swap page</a
        >
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">What is the transaction deadline? How can I adjust it?</span>
      <span slot="answer">
        The transaction deadline is the value(represented in minutes) that will revert your tansaction if it is pending for more than this long.
        You can adjust the slippage rate by clicking on settings at the 
        <a
          class="hover:no-underline"
          href="https://app.pangolin.exchange/#/swap">swap page</a
        >
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">What exchanges is PNG listed on?</span>
      <span slot="answer">
        PNG is currently listed only on
        <a
          class="hover:no-underline"
          href="https://www.gate.io/en/trade/PNG_USDT">Gate.io</a
        >. However, we're in the works with Kucoin.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Where can I check the analytics?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/">here</a
        > to see the analytics for Pangolin.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">How can I see the top pairs on Pangolin?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/">here</a
        > to see top pairs on Pangolin.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">How can I see the top tokens on Pangolin?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/">here</a
        > to see the top tokens on Pangolin.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">I’m a liquidity provider(LP). How can I see my current holdings?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/#/accounts">here</a
        >, enter your wallet address and click on "Load Account Details".
        This will show you how much tokens you'd get if you were to withdraw your liquidity at this specific moment.
      </span>
    </FAQItem>

    <FAQItem>
      <span slot="question">How can I see how much I earned from the liquidity provider fees?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/#/accounts">here</a
        >, enter your wallet address and click on "Load Account Details".
        This will show you how much you earned from fees cumulatively.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">How much trading happens on Pangolin?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/">here</a
        > to see the volume chart.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Can I withdraw my liquidity and get my tokens back at any time I want?</span>
      <span slot="answer">
        Yes, you can withdraw your liquidity any time you want!
      </span>
    </FAQItem>
    
  </section>
</article>
