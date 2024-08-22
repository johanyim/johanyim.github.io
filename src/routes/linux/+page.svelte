<!-- <iframe src="./code.html" frameborder="0" class="h-[80vh] w-full"></iframe> -->

<script>
  import { onMount } from "svelte";
  let content = "";

  onMount(async () => {
    const response = await fetch("./code.html");
    content = await response.text();
  });
</script>

<svelte:head><title>Linux</title></svelte:head>

<h2>These is linux:</h2>
<div class="overflow-x-auto border text-xl">
  {@html content}
</div>
