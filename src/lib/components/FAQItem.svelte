<script>
  let hidden = true;
</script>

<div>
  <button
    on:click="{() => {
      hidden = !hidden;
    }}"
    class="flex justify-between items-center w-full"
  >
    <span class="flex-shrink pr-6 my-6 text-xl font-semibold text-left text-gray-900">
      <slot name="question" />
    </span>
    <svg
      class="flex-shrink-0 h-6 {hidden ? '' : 'transform rotate-180'}"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  <p style="margin-top: 0px;" class:hidden>
    <slot name="answer" />
  </p>
</div>
