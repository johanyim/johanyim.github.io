<script lang="ts">
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

posts:

<!-- metadata: Record<string, any> -->
<ol>
  {#each posts as { data, url }}
    <li>
      <a href={url}>
        Date: {new Date(data.date).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
        })}
        =
        {data.title}
      </a>
      <!-- <a href={url}>{data.title}</a> -->
    </li>
  {/each}
</ol>
