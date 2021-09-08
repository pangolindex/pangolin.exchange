<script>
  import ContentsLayout from "$lib/components/ContentsLayout.svelte";
</script>

<svelte:head>
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:url" content="https://pangolin.exchange/tutorials/stake-png" />
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
    <meta name="twitter:title" content="Stake PNG - Pangolin" />
    <meta property="og:title" content="Stake PNG - Pangolin" />
    <title>Stake PNG - Pangolin</title>
</svelte:head>

<ContentsLayout>
    <article slot="content" class="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl">
        <h2>Stake PNG tokens to earn WAVAX (Wrapped AVAX)</h2>

        <p>
            Users can stake PNG tokens to earn WAVAX (Wrapped AVAX). This is part of the Avalanche Rush incentives program.
        </p>
        <img src="/tutorials/stake-png/001.png" />
        <p>
            Deposits start: 16:00 UTC Wednesday September 8th, 2021
        </p>
        <p>
            Rewards start: 04:00 UTC Thursday September 9th, 2021
        </p>
        <p>
            Total incentives: $2M AVAX
        </p>
        <p>
            Duration: 3 months
        </p>


        <h3 class="flex whitespace-pre-wrap group" id="staking-tokens">
            <a
                    href="#staking-tokens"
                    class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
                    aria-label="Anchor"
                    style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Depositing PNG Tokens
      </span>
        </h3>

        <ol>
            <li>
                Select "Stake"
                <img src="/tutorials/stake-png/002.png" />
            </li>
            <li>
                Find the Earn WAVAX card
                <img src="/tutorials/stake-png/003.png" />
            </li>
            <li>Select "Deposit"</li>
            <li>
                Select "Stake PNG Tokens"
                <img src="/tutorials/stake-png/004.png" />
            </li>
            <li>
                Enter the amount of PNG tokens you would like to stake
                <img src="/tutorials/stake-png/005.png" />
            </li>
            <li>Select "Approve" and sign the transaction</li>
            <li>Select "Deposit" and confirm the transaction</li>
        </ol>

        <h3 class="flex whitespace-pre-wrap group" id="claim-wavax">
            <a
                    href="#claim-wavax"
                    class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
                    aria-label="Anchor"
                    style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Claiming Rewards
      </span>
        </h3>

        <p>
            After depositing your PNG tokens, you will accrue WAVAX tokens. You can claim your earned WAVAX tokens
            without having to remove your PNG tokens.
        </p>

        <ol>
            <li>
                Select "Stake"
                <img src="/tutorials/stake-png/002.png" />
            </li>
            <li>
                Select "Manage" on the Earn WAVAX card
                <img src="/tutorials/stake-png/006.png" />
            </li>
            <li>
                Select "Claim"
                <img src="/tutorials/stake-png/007.png" />
            </li>
            <li>
                Select "Claim" again and confirm the transaction through MetaMask
            </li>
        </ol>

        <p>Congratulations! You have just received your WAVAX rewards</p>

        <h3 class="flex whitespace-pre-wrap group" id="convert-wavax">
            <a
                    href="#convert-wavax"
                    class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
                    aria-label="Anchor"
                    style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Convert WAVAX to AVAX
      </span>
        </h3>

        <p>
            WAVAX is the wrapped version of AVAX. If you want to un-wrap your WAVAX to AVAX, you can do this on the swap page for a 1:1 conversion.
        </p>

        <ol>
            <li>
                Select "Swap"
                <img src="/tutorials/stake-png/009.png" />
            </li>
            <li>
                Select WAVAX as the first token and AVAX as the second token
                <img src="/tutorials/stake-png/010.png" />
            </li>
            <li>
                Approve and Swap
            </li>
        </ol>

        <p>Congratulations! You have just received your WAVAX rewards</p>

        <h3 class="flex whitespace-pre-wrap group" id="unstaking-tokens">
            <a
                    href="#unstaking-tokens"
                    class="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
                    aria-label="Anchor"
                    style="margin-left: -1em; padding-right: 0.5em; box-shadow: none; color: rgb(161, 161, 170);"></a><span
        >Unstaking PNG Tokens
      </span>
        </h3>

        <ol>
            <li>
                Select "Stake"
                <img src="/tutorials/stake-png/002.png" />
            </li>
            <li>
                Select "Manage" on the Earn WAVAX card
                <img src="/tutorials/stake-png/006.png" />
            </li>
            <li>
                Select "Unstake"
                <img src="/tutorials/stake-png/008.png" />
            </li>
            <li>
                Confirm the transaction in Metamask.
            </li>
        </ol>

        <p>Congratulations! You have successfully unstaked your PNG tokens.</p>
    </article>
</ContentsLayout>
