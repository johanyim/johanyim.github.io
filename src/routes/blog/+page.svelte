<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Line from "$atoms/Line.svelte";

  interface Props {
    data: {
      posts: {
        url: string;
        data: any;
      }[];
    };
  }

  let { data }: Props = $props();
  let { posts } = data;
  console.log(data);
  // let posts = Jsondata.posts;
</script>

<svelte:head><title>Blog</title></svelte:head>

<ol class="relative space-y-4">
  {#each posts as { data, url }, index}
    <li class="mx-auto w-full max-w-narrow">
      <!-- {#if index !== 0} -->
      <!--   <Line color="#45475a" /> -->
      <!-- {/if} -->
      <a
        class="block rounded-xl border-2 border-base duration-200 hover:border-lavender hover:bg-crust"
        href={url}
      >
        <div class="my-2 flex min-h-40 p-4 md:my-6">
          <div class="flex flex-1 flex-col justify-center px-2">
            <h2 class="text-2xl font-semibold text-lavender sm:text-3xl">
              {data.title}
            </h2>
            <h3 class="text-lg sm:text-xl">{data.description}</h3>
            <date class="text-sm text-overlay0">{formatDate(data.date)}</date>
          </div>
          {#if data.thumbnail !== undefined}
            <img
              class="hidden rounded-lg md:block"
              src={data.thumbnail}
              alt=""
              width="200"
            />
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ol>
