<script lang="ts">
  import ChevronLeft from "~icons/mdi/chevron-left";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<!-- TODO: use history.back because this pushes to the history stack -->
<button
  onclick={() => {
    history.back();
  }}
  class="flex text-lg"><ChevronLeft class="text-2xl" /> Back</button
>
<div class="mb-10">
  {@render children?.()}
  <footer>This is a footer</footer>
</div>
