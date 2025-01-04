<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Line from "$atoms/Line.svelte";

  import { reviews } from "$data/reviews";
</script>

<svelte:head><title>Reviews</title></svelte:head>

<ol class="space-y-4">
  {#each reviews as { listing, date, location, rating, href, thumbnail }, index}
    <li class="max-w-narrower mx-auto w-full">
      <a
        class="block rounded-xl border-2 border-base bg-mantle duration-200 hover:border-subtext0 hover:bg-base"
        target="_blank"
        {href}
      >
        <img
          class="h-[30rem] w-full object-cover p-8"
          src={thumbnail}
          alt="t"
        />
        <div class="flex min-h-40 p-4">
          <div class="flex flex-1 flex-col justify-center px-2">
            <h2 class="text-2xl font-semibold text-lavender sm:text-3xl">
              {listing}
            </h2>
            <h3 class="text-lg sm:text-xl">{rating}</h3>
            <date class="text-sm text-overlay0">{formatDate(date)}</date>
          </div>
          <!-- {#if data.thumbnail !== undefined} -->
          <!--   <img -->
          <!--     class="hidden rounded-lg md:block" -->
          <!--     src={data.thumbnail} -->
          <!--     alt="" -->
          <!--     width="200" -->
          <!--   /> -->
          <!-- {/if} -->
        </div>
      </a>
    </li>
  {/each}
</ol>
