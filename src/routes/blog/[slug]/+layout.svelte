<script lang="ts">
  import ChevronLeft from "~icons/mdi/chevron-left";
</script>

<!-- TODO: use history.back because this pushes to the history stack -->
<button
  on:click={() => {
    history.back();
  }}
  class="flex text-lg"><ChevronLeft class="text-2xl" /> Back</button
>
<div class="mb-10">
  <slot />
  <footer>This is a footer</footer>
</div>
