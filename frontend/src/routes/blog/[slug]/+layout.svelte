<script lang="ts">
  import ChevronLeft from "~icons/mdi/chevron-left";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>


<div>

<button
  onclick={() => {
    history.back();
  }}
  class="relative flex z-[1000] text-3xl text-surface2 hover:text-text duration-150"><ChevronLeft class="text-3xl z-[1000]" /> Back</button
>

</div>
<div class="mb-10 relative">
  {@render children?.()}
</div>
