<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

/* TODO: Figure out how to disable this properly */
#svelte-announcer {
  @apply hidden;
}
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
