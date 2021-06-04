<script>
  import "./_global.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="px-4 sm:px-6">
  <Header />
  <slot />
  <Footer />
</div>
