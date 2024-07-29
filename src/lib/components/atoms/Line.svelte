<script>
  export let text;
  export let style;
</script>

<div class={style}>
  <div class="m-auto flex h-0 w-full max-w-[120rem] items-center text-text">
    <div class="flex-1 border-b-2 border-solid border-text"></div>
    <h2 class="ml-8 mr-8 text-3xl">{text}</h2>
    <div class="flex-1 border-b-2 border-solid border-text"></div>
  </div>
</div>
