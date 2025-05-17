<script lang="ts">
  import Line from "$atoms/Line.svelte";
  import { formatDate } from "$lib/utils";
  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <!-- Other opengraph stuff -->
  <title>{data.post.metadata.title}</title>

  <meta charset="UTF-8" />
  <meta name="description" content={data.post.metadata.description} />
  <meta name="keywords" content={data.post.metadata.categories.join(", ")} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<article class="markdown mx-auto max-w-narrow">
  <header class="mb-4">
    <h1>{data.post.metadata.title}</h1>
    <p>{data.post.metadata.description}</p>
    <date>{formatDate(data.post.metadata.date)}</date>
    {#if data.post.metadata.thumbnail}
      <img
        class="thumbnail"
        alt="Thumbnail of the post"
        src={data.post.metadata.thumbnail}
      />
    {/if}
  </header>
  <main class="bg-crust">
    <data.post.default />
  </main>
</article>
<Line text="End" style="my-12" color="#585b70" />
