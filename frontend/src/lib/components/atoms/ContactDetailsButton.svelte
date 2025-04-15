<script lang="ts">
  import ContentCopy from "~icons/mdi/content-copy";
  import { copy } from "svelte-copy";
  let { text, icon, copyText = undefined, activeStyle } = $props();

  const SvelteComponent = $derived(icon);
</script>

<button
  class="group relative flex items-center gap-4 overflow-x-hidden text-nowrap rounded-2xl border-4 border-crust bg-mantle p-4 text-xl text-overlay0 ring-surface0 hover:ring-4 hover:duration-200 active:bg-crust sm:text-3xl"
  use:copy={copyText || text}
  type="button"
>
  <SvelteComponent
    class="inline text-2xl transition-colors duration-200 {activeStyle} sm:text-4xl"
  />
  <span class="transition-colors duration-200 {activeStyle}">
    {text}
  </span>
  <ContentCopy class="inline transition-colors duration-200 {activeStyle}" />
</button>
