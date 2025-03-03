<script lang="ts">
  import Heart from "~icons/mdi/heart";

  import { prompts } from "./prompts";

  interface Props {
    data: {
      paths: string[];
    };
  }

  let { data }: Props = $props();
  let { paths } = data;

  let names = [
    "Johan",
    "Johan Yim",
    "Yim Johan",
    "Jing Yan Yim",
    "Mr Yim",
    "Dr Yim (PhD)",
    "Han Han",
    "嚴証恩",
  ];

  let total = paths.length;

  function randFrom(array: Array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let current = $state<string>("");
  let refresh = $state<boolean>(false);

  let pr = $state(prompts.filter((p) => p.answer));

  let displayName = $state<string>(randFrom(names));
  let imageUrl = $state<string>(randFrom(paths));

  function next() {
    displayName = randFrom(names);
    imageUrl = randFrom(paths);
    refresh = !refresh;
    pr = prompts.filter((p) => p.answer);
  }
</script>

{#snippet heartButton()}
  <button
    class="absolute bottom-5 right-5 flex aspect-square w-20 items-center justify-center rounded-[50%] bg-base duration-100 hover:bg-surface0 hover:text-lavender"
    on:click={next}
  >
    <Heart class="text-4xl" />
  </button>
{/snippet}

{#snippet imageCard()}
  {#key refresh}
    <div class="align-center relative w-full">
      <img
        src={randFrom(paths)}
        alt=""
        class="aspect-[3/4] w-full rounded-xl object-cover"
      />
      {@render heartButton()}
    </div>
  {/key}
{/snippet}

{#snippet promptCard(prompt: { question: string; answer: string })}
  {#key refresh}
    <div
      class="align-center relative min-h-60 w-full space-y-4 rounded-xl bg-mantle px-8 pb-24 pt-16"
    >
      <div class="text-xl font-thin">{prompt.question}</div>
      <div class="text-5xl">
        {prompt.answer}
      </div>
      {@render heartButton()}
    </div>
  {/key}
{/snippet}

<svelte:head><title>Kitty</title></svelte:head>

<div
  class="mx-auto flex max-w-narrower flex-col items-center gap-y-6 font-sans"
>
  <div class="space-y-2 self-start">
    <h2 class="text-5xl font-semibold">{displayName}</h2>
    <div class="flex divide-x-[1px] divide-lavender">
      <h3 class="pr-3 text-xl font-thin">he/him</h3>
      <h3 class="pl-3 text-xl font-thin text-lavender">Active Today</h3>
    </div>
  </div>

  {@render imageCard()}
  {@render promptCard(randFrom(pr))}
  {@render promptCard(randFrom(pr))}
  {@render imageCard()}
  {@render imageCard()}
  {@render promptCard(randFrom(pr))}
  {@render imageCard()}
  {@render promptCard(randFrom(pr))}
  {@render imageCard()}
  {@render promptCard(randFrom(pr))}
  {@render promptCard(randFrom(pr))}
</div>
