<script lang="ts">
  export let data;
</script>

<svelte:head>
  <!-- Other opengraph stuff -->
  <title>{data.post.metadata}</title>
</svelte:head>

<article class="markdown contents">
  <svelte:component this={data.post.default} />
</article>
