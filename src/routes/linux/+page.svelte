<script lang="ts">
  // export let content;
  import content from "./code.html?raw";
</script>

<svelte:head><title>Linux</title></svelte:head>

<h2 class="">Snapshot Preview</h2>
<div class="m-8 overflow-x-auto rounded-xl border-4 border-surface0 p-4">
  {@html content}
</div>
