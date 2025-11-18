<script lang="ts">
  const totalSquares = 90 * 52;

  const birth = new Date(2001, 0, 20).getTime();
  const today = new Date().getTime();

  const weeks = Math.floor((today - birth) / (7 * 24 * 60 * 60 * 1000));
</script>

<div class="mx-auto w-full">
  <h3 class="m-4 text-center text-xl font-semibold text-overlay0">
    Weeks of my life
  </h3>
  <div
    class="
    grid
    grid-cols-[repeat(52,_minmax(0,_1fr))]
    grid-rows-[repeat(80,_minmax(0,_1fr))] gap-[3px]"
  >
    {#each { length: totalSquares } as _, i}
      <!-- <div class="size-1 md:size-3"></div> -->
      {#if i < weeks}
        <div class="aspect-square bg-overlay1 hover:bg-lavender"></div>
      {:else if i == weeks}
        <div class="aspect-square bg-text hover:bg-lavender"></div>
      {:else}
        <div
          class="aspect-square bg-overlay1 opacity-50 hover:bg-lavender hover:opacity-100"
        ></div>
      {/if}
    {/each}
  </div>
  <p class="m-4 text-center text-xl font-semibold text-overlay0">
    There's no better motivation than death.

    <!-- The only contribution graph that matters -->
  </p>
</div>
