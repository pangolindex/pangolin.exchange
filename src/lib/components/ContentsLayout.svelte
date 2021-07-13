<script>
  import {onMount} from "svelte";

  export let selectors = "h3, h4";

  let headings = [];
  let bolded = "";

  function setBolded(id) {
    if (id.length != 0) {
      bolded = id;
    }
  }

  function onScroll() {
    if (headings.length == 0) return;
    let y = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let sortedHeadings = headings.concat([]).sort((a, b) => a.offsetTop - b.offsetTop);
    if (y <= 0) {
      setBolded(sortedHeadings[0].id);
      return;
    }
    if (y + windowHeight >= document.body.scrollHeight) {
      setBolded(sortedHeadings[sortedHeadings.length - 1].id);
      return;
    }
    const middle = y + windowHeight / 2;
    let current = sortedHeadings[0].id;
    for (let i = 0; i < sortedHeadings.length; i++) {
      if (middle >= sortedHeadings[i].offsetTop) {
        current = sortedHeadings[i].id;
      }
    }
    setBolded(current);
  }

  onMount(() => {
    if (window.location.hash) {
      const tmp = document.getElementById(window.location.hash.substr(1));
      if (tmp) {
        tmp.scrollIntoView();
        bolded = window.location.hash.substr(1);
      }
    }
    headings = Array.from(document.querySelectorAll(selectors)).filter(({id}) => id.length > 0);
    window.addEventListener("scroll", onScroll, {capture: true, passive: true});
    onScroll();
    return () => window.removeEventListener("scroll", onScroll, true);
  });
</script>

<div class="flex-auto w-full min-w-0 lg:overflow-visible lg:static lg:max-h-full">
  <div class="flex justify-between w-full">
    <div class="flex-auto min-w-0">
      <slot name="content" />
    </div>

    <div class="hidden flex-none pl-8 mr-8 w-64 xl:block xl:text-sm">
      <div class="flex overflow-y-auto sticky top-4 flex-col justify-between pt-10 pb-6 max-h-screen">
        <div class="mb-8">
          <h5 class="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs">On this page</h5>
          <ul class="overflow-x-hidden font-medium text-gray-500">
            {#each headings as {nodeName, id, textContent}}
              <li class:ml-4="{nodeName == selectors.slice(-2).toUpperCase()}">
                <a
                  href="#{id}"
                  class:text-gray-900="{id == bolded}"
                  class="block py-2 transition-colors duration-200 transform hover:text-gray-900">{textContent}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
