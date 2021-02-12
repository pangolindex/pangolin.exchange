<script>
  import ContentsLayout from "$components/ContentsLayout.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://pangolin.exchange/tutorials/manage-liquidity" />
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
  <meta name="twitter:title" content="Manage Liquidity - Pangolin" />
  <meta property="og:title" content="Manage Liquidity - Pangolin" />
  <title>Manage Liquidity - Pangolin</title>
</svelte:head>

<ContentsLayout>
  <article slot="content" class="mt-10 mb-8 prose lg:prose-xl sm:mb-10 sm:mt-14">
    <h2>Manage Liquidity on Pangolin</h2>

    <p><i>Create new liquidity pools, or add and remove liquidity on existing pools </i></p>

    <p>
      Pangolin allows token holders to add liquidity to pools. By adding liquidity, you receive PGL tokens, which is a
      representation of your ownership of the pool. After adding liquidity to a pool, you will see how you can use those
      PGL tokens to earn PNG <a href="/tutorials/earn-png" target="_blank" class="hover:no-underline">here</a>. If you
      have ETH or Ethereum ERC-20s you want to use on Pangolin, please follow the bridge tutorial
      <a href="/tutorials/transfer-from-ethereum" target="_blank" class="hover:no-underline">here</a>.
    </p>

    <p>
      <strong
        >Note: You may only receive PNG rewards from supported pools, which can be found under the following section on
        the <a href="/litepaper#distribution-breakdown" target="_blank" class="hover:no-underline">litepaper</a>:
        Community - Liquidity Mining Allocation (95% of PNG)</strong
      >
    </p>

    <h3 class="flex whitespace-pre-wrap group" id="add-liquidity">
      <a
        href="#add-liquidity"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Add Liquidity</span
      >
    </h3>

    <p>
      Pangolin allows users (liquidity providers) with Avalanche and Ethereum tokens to deposit them and earn yield from
      exchange fees. Liquidity providers can create a new liquidity pool or add liquidity to an existing one. Liquidity
      providers will earn at least 0.25% of all trades on the deposited token pair proportional to the share of the
      pool. Fees are added to the pool and accrue in real-time. Each pool has its own return, which is determined by a
      function.
    </p>

    <p>You have two options when adding liquidity:</p>
    <ol>
      <li><a href="#create-a-new-liquidity-pool" class="hover:no-underline">Create a new liquidity pool</a></li>
      <li><a href="#add-to-liquidity-pool" class="hover:no-underline">Add to an existing liquidity pool</a></li>
    </ol>

    <h4 class="flex whitespace-pre-wrap group" id="create-a-new-liquidity-pool">
      <a
        href="#create-a-new-liquidity-pool"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Create a New Liquidity Pool</span
      >
    </h4>

    <p>
      If a token pair doesn’t exist, you must create a new liquidity pool. The price of the tokens will be determined by
      the ratio of what you deposit. For example, if you deposit 1 PNG and 5 DAI into this new liquidity pool, there
      will be an initial price of 5 DAI per PNG or 0.2 PNG per DAI. These prices are dynamic and will change as
      liquidity is added or removed and the ratio of the pool adjusts.
    </p>

    <img src="/tutorials/manage-liquidity/001.png" />

    <ol>
      <li>Determine the ratio of the new liquidity pool by inputting the amounts you will deposit for each token</li>
      <li>Select "Supply"</li>
      <li>
        <p>
          Select "Create Pool & Supply"
          <img src="/tutorials/manage-liquidity/002.png" />
        </p>
      </li>
      <li>Confirm the transaction and finalize the transaction.</li>
    </ol>

    <h4 class="flex whitespace-pre-wrap group" id="add-to-liquidity-pool">
      <a
        href="#add-to-liquidity-pool"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Add to an Existing Liquidity Pool
      </span>
    </h4>

    <ol>
      <li>
        <h5><strong>Select "Pool" on the top left</strong></h5>
        <img src="/tutorials/manage-liquidity/003.png" />
      </li>
      <li>
        <h5><strong>Select "Add Liquidity"</strong></h5>
        <img src="/tutorials/manage-liquidity/004.png" />
      </li>
      <li>
        <h5><strong>Choose the token you would like to add to the liquidity pool.</strong></h5>
        <p>
          Let’s say you choose AVAX as the token you would like to deposit. Once you choose AVAX, it will ask you to
          decide on the token pair you would like to enter, which is the liquidity pool. When you choose that token
          pair, it will require you to add an equivalent value of that token pair.
        </p>

        <ol>
          <li>Choose the token, and enter the amount you would like to deposit</li>
          <li>
            Choose the token pair you would like to deposit. <br />
            Example: In this case, we want to deposit 1 AVAX. This will result in us having to deposit an equivalent value
            of PNG tokens, which at the current rate is 28.3791 PNG tokens.
            <img src="/tutorials/manage-liquidity/005.png" />
          </li>
          <li>
            Select "Confirm Supply," and confirm the transaction on MetaMask.
            <img src="/tutorials/manage-liquidity/006.png" />
          </li>
        </ol>
      </li>
    </ol>

    <h3 class="flex whitespace-pre-wrap group" id="managing-a-liquidity-pool">
      <a
        href="#managing-a-liquidity-pool"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Managing a Liquidity Pool
      </span>
    </h3>

    <p>
      Once you create a new liquidity pool or add to an existing one, you will automatically have your position visible,
      allowing you to manage the liquidity pool by adding or removing liquidity.
    </p>

    <img src="/tutorials/manage-liquidity/007.png" />

    <p>You may view details about your position when you click on the "Manage" dropdown.</p>

    <p>Here are four stats that give information about your position:</p>
    <ul>
      <li>Your pool tokens: tokens issued to you that represent your position in the liquidity pool</li>
      <li>Pooled Token #1</li>
      <li>Pooled Token #2</li>
      <li>Your pool share: the percentage of the liquidity pool that your deposited tokens represent</li>
    </ul>
    <img src="/tutorials/manage-liquidity/008.png" />

    <h4 class="flex whitespace-pre-wrap group" id="removing-liquidity-from-a-liquidity-pool">
      <a
        href="#removing-liquidity-from-a-liquidity-pool"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Removing Liquidity from a Liquidity Pool</span
      >
    </h4>
    <ol>
      <li>Select "Manage"</li>
      <li>Select "Remove"</li>
      <li>
        Determine the number of your tokens that you want to remove from the liquidity pool. In this case, we chose
        100%.
        <img src="/tutorials/manage-liquidity/009.png" />
      </li>
      <li>Select "Remove"</li>
      <li>
        Select "Confirm," and confirm the transaction on MetaMask
        <img src="/tutorials/manage-liquidity/010.png" />
      </li>
    </ol>

    <h4 class="flex whitespace-pre-wrap group" id="adding-liquidity-to-a-liquidity-pool">
      <a
        href="#adding-liquidity-to-a-liquidity-pool"
        class="absolute no-underline opacity-0 after:hash group-hover:opacity-100"
        aria-label="Anchor"
        style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Adding Liquidity to a Liquidity Pool</span
      >
    </h4>

    <p>
      If you would like to add more liquidity to your existing liquidity pool, you may do so with the following steps.
    </p>

    <ol>
      <li>
        Select "Manage"
        <img src="/tutorials/manage-liquidity/011.png" />
      </li>
      <li>
        Select "Add"
        <img src="/tutorials/manage-liquidity/012.png" />
      </li>
      <li>
        Determine the number of tokens you would like to add to the liquidity pool. In this case, we chose to add 1 PNG
        token, which means we have to add an equal amount of AVAX.
        <img src="/tutorials/manage-liquidity/013.png" />
      </li>
      <li>Select "Supply"</li>
      <li>
        Select "Confirm Supply," and confirm the transaction on MetaMask.
        <img src="/tutorials/manage-liquidity/014.png" />
      </li>
    </ol>
  </article>
</ContentsLayout>
