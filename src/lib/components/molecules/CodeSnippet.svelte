<script lang="ts">
  export let content: string;
  export let className: string;
</script>

<code
  class="m-2 mb-4 block overflow-x-auto rounded-md border-4 border-base p-4 {className}"
>
  {@html content}
</code>
