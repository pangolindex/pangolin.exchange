<script>
import {clickOutside} from "./utils.js";
import {onMount} from "svelte";

let Transition;

let docs_open = false;
let mobile_open = false;

const socials = [
  {
    name: "Telegram",
    href: "https://t.me/pangolindex",
    d:
      "M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z",
  },
  {
    name: "Discord",
    href: "https://discord.gg/PARrDYYbfw",
    d:
      "M20.22 0c1.4 0 2.54 1.14 2.6 2.48V24l-2.67-2.27-1.47-1.34-1.6-1.4.67 2.2H3.7a2.48 2.48 0 01-2.54-2.47V2.48A2.53 2.53 0 013.71 0h16.51zM14.1 5.68h-.03l-.2.2a8.06 8.06 0 013.08 1.54 10.88 10.88 0 00-6.22-1.14h-.2c-.47 0-1.47.2-2.81.74l-.74.33s1-1 3.21-1.53l-.13-.14s-1.67-.06-3.48 1.27c0 0-1.8 3.15-1.8 7.02 0 0 1 1.74 3.74 1.8 0 0 .4-.53.8-1-1.53-.46-2.13-1.4-2.13-1.4s.13.07.33.2h.06c.03 0 .04.02.06.03.02.02.03.04.06.04.33.13.66.27.93.4.47.2 1.06.4 1.8.53.93.14 2 .2 3.21 0 .6-.13 1.2-.26 1.8-.53.39-.2.87-.4 1.4-.74 0 0-.6.94-2.2 1.4.32.47.79 1 .79 1 2.74-.05 3.8-1.8 3.87-1.72 0-3.87-1.82-7.02-1.82-7.02a6.01 6.01 0 00-3.43-1.26l.05-.02zm.17 4.42c.7 0 1.27.6 1.27 1.33a1.3 1.3 0 01-1.27 1.34c-.7 0-1.27-.6-1.27-1.33 0-.74.58-1.34 1.27-1.34zm-4.54 0c.7 0 1.26.6 1.26 1.33a1.3 1.3 0 01-1.27 1.34c-.7 0-1.27-.6-1.27-1.33 0-.74.58-1.34 1.28-1.34z",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pangolindex",
    d:
      "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
  {
    name: "GitHub",
    href: "https://github.com/pangolindex",
    d:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

function handleKeydown({key}) {
  if (key === "Escape") {
    docs_open = false;
    mobile_open = false;
  }
}

onMount(async () => {
  const module = await import("svelte-class-transition");
  Transition = module.default;
});
</script>

<div class="relative bg-white">
  <div class="mx-auto max-w-7xl">
    <div
      class="flex justify-between items-center py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:flex-1 lg:w-0">
        <a href="/">
          <span class="sr-only">Pangolin</span>
          <img class="w-auto h-10 sm:h-14" src="/logo.svg" alt="Pangolin" />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button
          on:click="{() => (mobile_open = true)}"
          type="button"
          class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-500 focus:ring-2 focus:ring-inset"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-10 md:flex">
        <a
          href="#"
          class="cursor-not-allowed transition-colors group inline-flex items-center text-gray-500 hover:text-gray-900 text-base font-medium bg-white rounded-md focus:outline-none focus:ring-gray-500 focus:ring-offset-2 focus:ring-2"
        >
          Exchange
        </a>

        <a
          href="#"
          class="cursor-not-allowed transition-colors group inline-flex items-center text-gray-500 hover:text-gray-900 text-base font-medium bg-white rounded-md focus:outline-none focus:ring-gray-500 focus:ring-offset-2 focus:ring-2"
        >
          Analytics
        </a>

        <div class="relative" use:clickOutside on:click_outside="{() => (docs_open = false)}">
          <button
            on:click="{() => (docs_open = !docs_open)}"
            type="button"
            class="{docs_open ? 'text-gray-900' : 'text-gray-500'} transition-colors group inline-flex items-center text-gray-500 hover:text-gray-900 text-base font-medium bg-white rounded-md focus:outline-none focus:ring-gray-500 focus:ring-offset-2 focus:ring-2"
          >
            <span>Docs</span>
            <svg
              class="{docs_open ? 'text-gray-600' : 'text-gray-400'} transition-colors ml-2 w-5 h-5 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
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
            <div
              class="absolute left-1/2 mt-3 px-2 w-screen max-w-md transform -translate-x-1/2 sm:px-0"
            >
              <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                <div class="grid relative z-20 gap-6 py-6 px-5 bg-white sm:gap-8 sm:p-8">
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

                  <a href="#" class="flex items-start p-3 -m-3 rounded-lg cursor-not-allowed">
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
                      <p class="text-base font-medium text-gray-900">Tutorials (Coming Soon)</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </svelte:component>
        </div>
      </nav>
      <div class="hidden justify-end items-center space-x-4 md:flex md:flex-1 lg:w-0">
        {#each socials as {name, href, d}}
          <a
            class="text-gray-400 transition-colors duration-200 hover:text-gray-500"
            href="{href}"
            target="_blank"
          >
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
      class="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex justify-between items-center">
            <div><img class="w-auto h-8" src="/icon.svg" alt="Pangolin" /></div>
            <div class="-mr-2">
              <button
                on:click="{() => (mobile_open = false)}"
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-500 focus:ring-2 focus:ring-inset"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a href="#" class="flex items-center p-3 -m-3 rounded-md cursor-not-allowed">
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
                <span class="ml-3 text-base font-medium text-gray-900">Exchange (Coming Soon)</span>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-md cursor-not-allowed">
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
                <span class="ml-3 text-base font-medium text-gray-900">Analytics (Coming Soon)</span>
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

              <a href="#" class="flex items-center p-3 -m-3 rounded-md cursor-not-allowed">
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
                <span class="ml-3 text-base font-medium text-gray-900">Tutorials (Coming Soon)</span>
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
