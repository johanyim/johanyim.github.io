<script lang="ts">
  export let data: Record<string, any>;
  // let posts = Jsondata.posts;
</script>

<svelte:head><title>Blog</title></svelte:head>

posts:

<pre>
{JSON.stringify(data.posts, null, 2)}
</pre>

<!-- metadata: Record<string, any> -->
{#each data.posts as post}
  <h1>
    Date: {post.data.date}
    <a href={post.url}>{post.data.title}</a>
  </h1>
{/each}
