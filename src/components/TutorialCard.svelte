<script>
  let gradient;
  export {gradient as class};

  export let href;
  export let texture;
</script>

<a href="{href}" class="block relative pt-24 w-64 mr-4 mb-8 {gradient}">
  <div class="absolute top-0 w-full h-24 texture-{texture}"></div>
  <div class="bg-gray-900 h-full text-gray-100 p-4">
    <div class="text-md font-bold"><slot name="title" /></div>
    <div class="text-sm mt-2"><slot name="description" /></div>
  </div>
</a>
