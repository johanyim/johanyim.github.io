<script>
  const totalSquares = 80 * 52;
  const filledSquares = 23 * 52;

  let squares = Array(totalSquares)
    .fill(false)
    .map((_, index) => {
      return index < filledSquares;
    });
</script>

<div
  class="
    mx-auto
    grid
    w-fit
    grid-cols-[repeat(52,_minmax(0,_1fr))]
    grid-rows-[repeat(80,_minmax(0,_1fr))]
    gap-[2px]"
>
  {#each squares as filled}
    {#if filled}
      <div class="size-1 bg-text md:size-3"></div>
    {:else}
      <div class="size-1 bg-mantle md:size-3"></div>
    {/if}
  {/each}
</div>
