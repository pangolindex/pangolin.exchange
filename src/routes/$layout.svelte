<script>
import "$styles/global.css";
import Header from "$components/Header.svelte";
import Footer from "$components/Footer.svelte";
</script>

<div class="px-4 sm:px-6">
  <Header />
  <slot />
  <Footer />
</div>
