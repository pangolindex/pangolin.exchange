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
      <span slot="question">What is Pangolin? What makes it special and why should I use it?</span>
      <span slot="answer">
        Pangolin is the first and the most used DEX(decentralized exchange) built on top of Avalanche.
        Since it's built on Avalanche, you get fast transactions and low transaction costs.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Are there any risks involved in being a liquidity provider(LP) on Pangolin?</span>
      <span slot="answer">
        Yes, IL(impermanent loss) is one of the biggest risks of being a LP on any decentralized exchange.
        In terms of security, Pangolin is a fork of Uniswap and Sushiswap: It uses the same code for the smart contracts.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Who is behind Pangolin?</span>
      <span slot="answer">
        Pangolin is a community-driven project. It's created by people who have been around the Avalanche ecosystem for a while.
        You can see the community elected core team by scrolling down to the footer.
      </span>
    </FAQItem>
 
    <FAQItem>
      <span slot="question">How can I see the pools offered in Pangolin and their APYs?</span>
      <span slot="answer">
        Go to the New PNG page <a
          class="hover:no-underline"
          href="https://app.pangolin.exchange/#/png/1">here</a
        > to see all the pools currently offered in Pangolin along with their APYs.
        Keep in mind that the APY for a specific pool will go down as users bring in more liquidity. (and vice versa)
        Also, Pangolin has limited the pools to PNG and AVAX pairs only.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">How can Pangolin offer such high APYs?</span>
      <span slot="answer">
        Rewards that the LPs(liquidity providers) get are paid in PNG.
        Also, APYs go down as users bring in more liquidity.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Why do I get quoted different prices when buying and selling a token?</span>
      <span slot="answer">
        When you do a swap, you're basically adding one token into a specific pool and removing the other token from the same pool.
        So, you get quoted different prices when buying and selling a token.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Why do I get quoted different prices depending on the amount?</span>
      <span slot="answer">
        When you do a swap, you're basically adding one token into a specific pool and removing the other token from the same pool.
        If you try to remove too much from a pair by entering a big amount to swap, you'll get a higher price or less tokens in return.
        You'll see the price impact your swap would cause on the swap page before you confirm your transaction. 
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
      <span slot="question">Why did my transaction fail?</span>
      <span slot="answer">
        If your transaction failed, it's either because you don't have enough slippage or use enough gas. You'll have to increase your allowed slippage to account for the fee taken during the swap.
        Click on the gear icon for settings and adjust slippage tolerance accordingly.
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
      <span slot="question">What is PGL?</span>
      <span slot="answer">
        PGL is Pangolin's liquidity token. Once you provide liquidity to Pangolin, the smart contract gives you PGL tokens in return, which represents your deposit.
        And you need to deposit your PGL into the corresponding pool so that you can earn PNG rewards and fees.
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
        >, but stay tuned!
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
      <span slot="question">What fees do I have to pay when trading on Pangolin?</span>
      <span slot="answer">
        Users only pay a 0.3% liquidity provider fee when trading on Pangolin.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Where can I access Pangolin’s tokenomics?</span>
      <span slot="answer">
        Go to the Litepaper page <a
          class="hover:no-underline"
          href="/litepaper">here</a
        > to see.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Are there any auto-compounders for Pangolin’s pools?</span>
      <span slot="answer">
        Here's a list of autocompounders for Pangolin's pools: Beefy Finance, Penguin, Snowball, Yield Yak.
        Use at your own risk.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">How are prices determined? Why is it different compared to other exchanges?</span>
      <span slot="answer">
        Prices are determined by the amount of each token in a pool. The smart contract maintains a constant using the following function: x*y=k.
        In this case x = token0, y = token1, k = constant. During each trade a certain amount of one token is removed from the pool for an amount of the other token.
        To maintain k, the balances held by the smart contract are adjusted during the execution of the trade, therefore changing the price.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Why did I get an error saying the transfer amount exceeds the allowance?</span>
      <span slot="answer">
        This is because Pangolin asked you to approve a specific amount of your tokens and now, you're trying to enter an input higher than that.
        So, Pangolin isn't allowed to use more than what you entered.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">I saw a token was trading at X value, but when I traded on Pangolin I got a much lower value! Why is that?</span>
      <span slot="answer">
        Websites that show token prices, like eitherscan.io or coinmarketcap.com, typically aggregate price data from multiple sources.
        Some of these sources can be inaccurate, especially regarding new or low volume tokens. If a website or app says a token is worth more than what is shown on Pangolin, it is due to the website’s or app’s inaccurate data sources.
        Always check the exchange rate on the Pangolin app before trading.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">What are liquidity pools?</span>
      <span slot="answer">
        A liquidity pool is a collection of funds locked in a smart contract. In exchange for providing their funds, users earn trading fees from the trades that happen in their pool as well as PNG tokens, proportional to their share in the pool.
        As anyone can be a liquidity provider, AMMs have made market making more accessible.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Is there a way to see how one token is holding up against the other to analyze any potential impermanent loss?</span>
      <span slot="answer">
        Go to the analytics page <a
          class="hover:no-underline"
          href="https://info.pangolin.exchange/">here</a
        >.
        Select any token pair. You can then see the graphs for X/Y or Y/X.
      </span>
    </FAQItem>
      
      <FAQItem>
      <span slot="question">Is Pangolin safe? Is it auidited?</span>
      <span slot="answer">
        Pangolin is a fork of Uniswap and Sushiswap, so it's using the same smart contract codes. Uniswap and Sushiswap have been audited multiple times.
        We're also planning to audit Pangolin once v2 is ready. In the meantime, use at your own risk.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Why aren’t my PGL tokens showing up on the site or in my wallet?</span>
      <span slot="answer">
        Once you provide liquidity to Pangolin to earn PNG, you're basically transfering your PGL tokens to Pangolin's smart contracts.
        That's why your PGL tokens don't show up on the site or in your wallet.
        To see how much PGL you have, go to the NEW PNG page <a
          class="hover:no-underline"
          href="https://app.pangolin.exchange/#/png/1">here</a
        >, find the pool you're providing liquidity to, and click on "Manage". There, you'll see how much PGL tokens you have.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Can I withdraw my liquidity and get my tokens back at any time I want?</span>
      <span slot="answer">
        Yes, you can withdraw your liquidity any time you want!
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">What can I do if I run out of gas?</span>
      <span slot="answer">
        Unfortunately, there isn't much you can do: You'll need to either buy some AVAX from a CEX(centralized exchange) or ask a friend to send you some AVAX.
        With that said, we're thinking of adding a warning message soon.
      </span>
    </FAQItem>
    
    <FAQItem>
      <span slot="question">Which wallets does Pangolin support?</span>
      <span slot="answer">
        Pangolin currently supports MetaMask and MetaMask compatible devices like Ledger.
      </span>
    </FAQItem>
    
  </section>
</article>
{"mode":"full","isActive":false}
