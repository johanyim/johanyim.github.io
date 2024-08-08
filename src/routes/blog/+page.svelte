<script lang="ts">
  import { formatDate } from "$lib/utils";

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

<h1 class="m-auto border text-center text-3xl font-semibold text-lavender">
  Posts
</h1>

<ol class="space-y-4">
  {#each posts as { data, url }}
    <li class="mx-auto w-narrow">
      <a class="block border-4 border-lavender p-4" href={url}>
        <date class="text-overlay0">{formatDate(data.date)}</date>
        {data.title}
      </a>
      <!-- <a href={url}>{data.title}</a> -->
    </li>
  {/each}
</ol>
