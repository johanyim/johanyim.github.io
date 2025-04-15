<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Lazy from "svelte-lazy";
  import { reviews } from "$data/reviews";
  import FormatQuoteOpen from "~icons/mdi/format-quote-open";
  import FormatQuoteClose from "~icons/mdi/format-quote-close";
</script>

<svelte:head><title>Reviews</title></svelte:head>

<ol class="relative space-y-8">
  {#each reviews
    .slice()
    .reverse() as { listing, date, location, rating, href, thumbnail, word_count, excerpt }, index}
    <li class="max-w-narrower mx-auto w-full">
      <a
        class="block space-y-2 rounded-xl border-4 border-surface1 bg-base p-8 duration-200 hover:border-overlay2"
        target="_blank"
        {href}
      >
        <Lazy
          height={"30rem"}
          keep={false}
          offset={150}
          fadeOption={{ delay: 0, duration: 0 }}
          resetHeightDelay={0}
        >
          {#if thumbnail}
            <img
              alt=""
              class="h-[30rem] w-full rounded-md object-cover"
              src={thumbnail}
              on:error={() => {
                thumbnail = undefined;
              }}
            />
          {:else}
            <div class="h-[30rem] w-full">
              <div class="h-full w-full bg-crust"></div>
            </div>
          {/if}
        </Lazy>
        <div class="flex h-full flex-col space-y-2">
          <div class="flex-0 flex w-full flex-wrap justify-between">
            <span class="flex-0 text-3xl font-semibold text-lavender">
              {listing}
            </span>
            <span class="flex-0 text-3xl font-semibold text-surface1">
              {location}
            </span>
          </div>

          <div class="flex flex-1 flex-col">
            <div class="flex justify-between">
              <FormatQuoteOpen class="flex-0 text-3xl text-surface2" />
              <div class="flex-0 italic text-surface2">
                {formatDate(date)}
              </div>
            </div>
            <quote class="line-clamp-5 text-lg italic">
              {excerpt}
            </quote>
            <div class="flex justify-between">
              <div class="flex-0 text-surface2">{word_count} words</div>
              <FormatQuoteClose class="flex-0 text-3xl text-surface2" />
            </div>
          </div>
        </div>
        <div class="flex justify-center space-x-2">
          {#each { length: rating } as _}
            <img
              src="pentagon-filled.svg"
              alt=""
              class="h-[2.25rem] w-[2.25rem]"
            />
          {/each}
          {#each { length: 5 - rating } as _}
            <img
              src="pentagon-hollow.svg"
              alt=""
              class="h-[2.25rem] w-[2.25rem]"
            />
          {/each}
        </div>
      </a>
    </li>
  {/each}
</ol>
