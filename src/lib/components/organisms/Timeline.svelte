<script lang="ts">
  import { events } from "$data/events";
</script>

<ol class="relative z-10 -ml-6 border-s-2 border-surface1">
  {#each events.slice().reverse() as event}
    <li class="group z-10 ms-6 py-2 sm:py-4">
      <span
        class="absolute -start-3 z-[-10] mt-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-subtext0 bg-crust ring-[1rem] ring-crust transition-all duration-150 group-hover:border-lavender"
      >
      </span>
      <div
        class="space-y-3 rounded-xl border-2 border-base p-4 transition-all duration-150 group-hover:border-surface0 group-hover:bg-mantle"
      >
        <h3
          class="flex items-center text-lg font-bold text-lavender sm:text-2xl"
        >
          {event.title}
        </h3>
        <time class="text-md block font-semibold leading-none text-overlay0"
          >{event.start_date.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
          })}</time
        >
        <p class="text-md text-base font-normal text-text sm:text-lg">
          {@html event.description}
        </p>
        {#if event.outcomes}
          <ul class="ml-6 list-outside list-disc text-subtext0">
            {#each event.outcomes as outcome}
              <li>{outcome}</li>
            {/each}
          </ul>
        {/if}
        {#if event.tools}
          <div class="text-balance text-surface2">
            {event.tools.join(" • ")}
          </div>
        {/if}
      </div>
    </li>
  {/each}
</ol>
