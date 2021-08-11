<script>
  import {clickOutside} from "$lib/utils";
  import {onMount} from "svelte";

  let Transition;

  let docs_open = false;
  let mobile_open = false;

  const socials = [
    {
      name: "Telegram",
      href: "https://t.me/pangolindex",
      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    },
    {
      name: "Discord",
      href: "https://discord.gg/PARrDYYbfw",
      d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pangolindex",
      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    {
      name: "GitHub",
      href: "https://github.com/pangolindex",
      d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/channel/UClJJTG4FRL4z3AOf-ZWXZLw",
      d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      name: "Medium",
      href: "https://pangolindex.medium.com",
      d: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
    },
  ];

  function handleKeydown({key}) {
    if (key === "Escape") {
      docs_open = false;
      mobile_open = false;
    }
  }

  onMount(async () => {
    const module = await import("$lib/components/Transition.svelte");
    Transition = module.default;
  });
</script>

<div class="relative bg-white">
  <div class="mx-auto max-w-7xl">
    <div
      class="flex justify-between items-center py-6 border-b-2 border-gray-100 laptop:justify-start laptop:space-x-10"
    >
      <div class="flex justify-start lg:flex-1 lg:w-0">
        <a href="/">
          <span class="sr-only">Pangolin</span>
          <img class="w-auto h-10 sm:h-14" src="/logo.svg" alt="Pangolin" />
        </a>
      </div>
      <div class="-my-2 -mr-2 laptop:hidden">
        <button
          on:click="{() => (mobile_open = true)}"
          type="button"
          class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none"
        >
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-6 lg:space-x-10 laptop:flex">
        <a
          href="https://app.pangolin.exchange"
          target="_blank"
          class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md transition-colors hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
        >
          Exchange
        </a>

        <a
          href="https://info.pangolin.exchange"
          target="_blank"
          class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md transition-colors hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
        >
          Analytics
        </a>

        <a
          href="https://bridge.avax.network"
          target="_blank"
          class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md transition-colors hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
        >
          Bridge
        </a>

        <a
          href="https://gov.pangolin.exchange"
          target="_blank"
          class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md transition-colors hover:text-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
        >
          Governance
        </a>

        <div class="relative" use:clickOutside on:click_outside="{() => (docs_open = false)}">
          <button
            on:click="{() => (docs_open = !docs_open)}"
            type="button"
            class="{docs_open
              ? 'text-gray-900'
              : 'text-gray-500'} transition-colors group inline-flex items-center text-gray-500 hover:text-gray-900 text-base font-medium bg-white rounded-md focus:outline-none focus:ring-gray-500 focus:ring-offset-2 focus:ring-2"
          >
            <span>Docs</span>
            <svg
              class="{docs_open
                ? 'text-gray-600'
                : 'text-gray-400'} transition-colors ml-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <svelte:component
            this="{Transition}"
            toggle="{docs_open}"
            transitions="transition"
            inTransition="ease-out duration-200"
            inState="opacity-0 translate-y-1"
            onState="opacity-100 translate-y-0"
            outState="opacity-0 translate-y-1"
            outTransition="ease-in duration-150"
          >
            <div class="absolute left-1/2 z-50 px-2 mt-3 w-screen max-w-md transform -translate-x-1/2 sm:px-0">
              <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                <div class="grid relative gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
                  <a
                    on:click="{() => (docs_open = false)}"
                    href="/litepaper"
                    class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      ></path>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Litepaper</p>
                    </div>
                  </a>

                  <a
                    on:click="{() => (docs_open = false)}"
                    href="/tutorials"
                    class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">Tutorials</p>
                    </div>
                  </a>

                  <a
                    on:click="{() => (docs_open = false)}"
                    href="/faq"
                    class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">FAQ</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </svelte:component>
        </div>
      </nav>
      <div class="hidden justify-end items-center space-x-4 lg:w-0 laptop:flex laptop:flex-1">
        {#each socials as {name, href, d}}
          <a class="text-gray-400 transition-colors duration-200 hover:text-gray-500" href="{href}" target="_blank">
            <span class="sr-only">Pangolin on {name}</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="{d}"></path>
            </svg>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <svelte:component
    this="{Transition}"
    toggle="{mobile_open}"
    transitions="transition"
    inTransition="ease-out duration-200"
    inState="opacity-0 scale-95"
    onState="opacity-100 scale-100"
    outState="opacity-0 scale-95"
    outTransition="duration-100 ease-in"
  >
    <div
      use:clickOutside
      on:click_outside="{() => (mobile_open = false)}"
      class="absolute inset-x-0 top-0 z-50 p-2 transition transform origin-top-right laptop:hidden"
    >
      <div class="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
        <div class="px-5 pt-5 pb-6">
          <div class="flex justify-between items-center">
            <div><img class="w-auto h-8" src="/icon.svg" alt="Pangolin" /></div>
            <div class="-mr-2">
              <button
                on:click="{() => (mobile_open = false)}"
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none"
              >
                <span class="sr-only">Close menu</span>
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                on:click="{() => (mobile_open = false)}"
                href="https://app.pangolin.exchange"
                target="_blank"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Exchange</span>
              </a>

              <a
                on:click="{() => (mobile_open = false)}"
                href="https://info.pangolin.exchange"
                target="_blank"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Analytics</span>
              </a>

              <a
                on:click="{() => (mobile_open = false)}"
                href="https://gov.pangolin.exchange"
                target="_blank"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Governance</span>
              </a>
              <a
                on:click="{() => (mobile_open = false)}"
                href="https://bridge.avax.network"
                target="_blank"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="currentColor"
                  stroke="currentColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 351c0-11-5-21-13-29l-13-10v-79c0-4-1-8-4-11-19-17-39-31-62-42v-18a15 15 0 00-30 0v4a311 311 0 00-70-17v-15a15 15 0 00-30 0v11a459 459 0 00-69 1v-12a15 15 0 00-30 0v15a351 351 0 00-70 18v-5a15 15 0 00-30 0v18c-22 11-42 25-60 42-3 3-5 7-5 11v78l-13 11a41 41 0 00-2 58c15 17 41 18 57 3a280 280 0 01188-73 275 275 0 01188 73 41 41 0 0068-32zm-92-137c13 7 25 16 36 26v49c-11-8-23-15-36-21v-54zm-100-35c26 4 49 11 70 20v55c-22-9-46-16-70-20v-55zm-99-3a432 432 0 0169-1v55a362 362 0 00-69 0v-54zm-100 23c21-9 45-16 70-20v55c-24 4-48 11-70 20v-55zm-30 15v54c-12 6-24 13-35 21v-49c11-10 22-18 35-26zm388 146c-2 2-5 3-8 3s-5-1-7-3a310 310 0 00-208-80 305 305 0 00-208 80 11 11 0 01-15-15 328 328 0 01446 0 11 11 0 010 15z"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Bridge</span>
              </a>
              <a
                on:click="{() => (mobile_open = false)}"
                href="/litepaper"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Litepaper</span>
              </a>

              <a
                on:click="{() => (mobile_open = false)}"
                href="/tutorials"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Tutorials</span>
              </a>

              <a
                on:click="{() => (mobile_open = false)}"
                href="/faq"
                class="flex items-center p-3 -m-3 rounded-md transition-colors hover:bg-gray-50"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">FAQ</span>
              </a>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            {#each socials as {href, name}}
              <a href="{href}" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {name}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </svelte:component>
</div>

<svelte:window on:keydown="{handleKeydown}" />
