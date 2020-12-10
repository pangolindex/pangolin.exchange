<style global lang="postcss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

<script>
import Header from "$components/Header.svelte";
import Footer from "$components/Footer.svelte";
</script>

<div class="px-4 sm:px-6">
  <Header />
  <slot />
  <Footer />
</div>
