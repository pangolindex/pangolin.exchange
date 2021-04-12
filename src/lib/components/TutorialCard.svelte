<script>
  let gradient;
  export {gradient as class};

  export let href;
  export let texture;
</script>

<a href="{href}" class="block relative pt-24 w-64 mr-4 mb-8 {gradient}">
  <div class="absolute top-0 w-full h-24 texture-{texture}"></div>
  <div class="p-4 h-full text-gray-100 bg-gray-900">
    <div class="font-bold text-md"><slot name="title" /></div>
    <div class="mt-2 text-sm"><slot name="description" /></div>
  </div>
</a>
