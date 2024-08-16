<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Line from "$atoms/Line.svelte";

  interface Data {
    posts: {
      url: string;
      data: any;
    }[];
  }

  export let data: Data;
  let { posts } = data;
  // let posts = Jsondata.posts;
</script>

<svelte:head><title>Blog</title></svelte:head>

<h1 class="m-auto w-narrow text-5xl font-semibold text-lavender">Posts</h1>

<ol>
  {#each posts as { data, url }, index}
    <li class="mx-auto w-narrow">
      {#if index !== 0}
        <Line color="surface1" />
      {/if}
      <a class="block" href={url}>
        <div class="m-10 flex">
          <div class="flex-1">
            <h2 class="text-3xl font-semibold text-lavender">{data.title}</h2>
            <h3 class="text-xl">{data.description}</h3>
            <date class="text-overlay0">{formatDate(data.date)}</date>
            <p>Read more...</p>
          </div>
          <img class="rounded-xl" src={data.thumbnail} alt="" width="200" />
        </div>
      </a>
    </li>
  {/each}
</ol>
