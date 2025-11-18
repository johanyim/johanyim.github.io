<script lang="ts">
  interface Props {
    id?: string;
    text?: string;
    style?: string;
    color?: string;
  }

  let {
    id = "",
    text = "",
    style = "",
    color = ""
  }: Props = $props();
</script>

<div {id} class={style}>
  <div
    class="m-auto flex h-0 w-full max-w-[120rem] items-center"
    style="border-color: {color}"
  >
    {#if text}
      <div
        class="flex-1 border-b-2 border-solid"
        style="border-color: {color}"
      ></div>
      <h2 class="ml-8 mr-8 text-3xl">{text}</h2>
    {/if}
    <div
      class="flex-1 border-b-2 border-solid"
      style="border-color: {color}"
    ></div>
  </div>
</div>
