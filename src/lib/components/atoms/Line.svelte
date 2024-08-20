<script lang="ts">
  export let id: string = "";
  export let text: string = "";
  export let style: string = "";
  export let color: string = "";
</script>

<div {id} class={style}>
  <div
    class="m-auto flex h-0 w-full max-w-[120rem] items-center"
    style="color: {color}"
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
