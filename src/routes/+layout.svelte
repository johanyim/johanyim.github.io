<script lang="ts">
  import "../app.css";
  import Stars from "$organisms/Stars.svelte";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<Stars
    id="hero"
    className="top-0 left-0 absolute z-[-500] h-section w-full"
/>
{@render children?.()}

