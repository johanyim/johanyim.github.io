<script lang="ts">
  export let data: any;
</script>

<svelte:head>
  <!-- Other opengraph stuff -->
  <title>{data.post.metadata.title}</title>
</svelte:head>

<article class="markdown mx-auto max-w-narrow">
  <h1>{data.post.metadata.title}</h1>
  {#if data.post.metadata.thumbnail}
    <img class="thumbnail" alt="thumbnail" src={data.post.metadata.thumbnail} />
  {/if}
  <svelte:component this={data.post.default} />
</article>
