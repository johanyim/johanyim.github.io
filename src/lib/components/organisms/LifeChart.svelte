<script lang="ts">
  const totalSquares = 90 * 52;

  const birth = new Date(2001, 0, 20).getTime();
  const today = new Date().getTime();

  const weeks = (today - birth) / (7 * 24 * 60 * 60 * 1000);

  const filledSquares = weeks;

  let squares = Array(totalSquares)
    .fill(false)
    .map((_, index) => {
      return index < filledSquares;
    });
</script>

<div class="mx-auto w-fit">
  <h3 class="m-4 text-center text-xl font-semibold text-overlay0">
    Weeks of my life
  </h3>
  <div
    class="grid
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
</div>
