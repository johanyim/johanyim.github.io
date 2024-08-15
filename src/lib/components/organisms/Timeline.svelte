<script lang="ts">
  import { events } from "$data/events";
</script>

<ol class="relative z-10 border-s-2 border-surface1">
  {#each events.slice().reverse() as event, i}
    <li class="group z-10 ms-6 py-2 sm:py-4">
      <span
        class="absolute -start-3 z-[-10] mt-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-subtext0 bg-crust ring-[1rem] ring-crust transition-all duration-150 group-hover:border-lavender"
        class:bg-subtext0={i === 0}
        class:group-hover:bg-lavender={i === 0}
      >
      </span>
      <div
        class="space-y-3 rounded-xl border-2 border-base p-4 ring-opacity-60 transition-all duration-150 group-hover:border-surface0 group-hover:bg-mantle group-hover:ring-opacity-100"
        class:ring-4={i === 0}
        class:ring-lavender={i === 0}
      >
        <h3
          class="inline-block items-center text-lg font-bold text-lavender sm:text-2xl"
        >
          {event.title}
        </h3>

        <h3 class="inline-block items-center text-surface2">
          {event.location || ""}
        </h3>
        <time
          class="text-md block text-pretty font-semibold leading-none text-overlay0"
          >{event.start_date.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
          })}</time
        >
        <p class="font-sans text-2xl">
          {@html event.description}
        </p>
        {#if event.outcomes}
          <ul
            class="ml-6 list-outside list-disc text-pretty font-sans text-xl text-subtext0"
          >
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
