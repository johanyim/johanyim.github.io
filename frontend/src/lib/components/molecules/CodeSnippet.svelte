<script lang="ts">
  interface Props {
    content: string;
    className: string;
  }

  let { content, className }: Props = $props();
</script>

<code
  class="m-2 mb-4 block overflow-x-auto rounded-md border-4 border-base bg-crust p-4 {className}"
>
  {@html content}
</code>
