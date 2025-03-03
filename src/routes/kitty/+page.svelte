<script lang="ts">
  import Heart from "~icons/mdi/heart";

  import { prompts } from "./prompts";
  import { onMount } from "svelte";

  // interface Props {
  //   data: {
  //     paths: string[];
  //   };
  // }
  //
  // let { data }: Props = $props();
  // let { paths } = data;

  let paths = [
    "/dating/1.jpg",
    "/dating/2.jpg",
    "/dating/3.jpg",
    "/dating/4.jpg",
    "/dating/5.jpg",
    "/dating/6.jpg",
    "/dating/7.jpg",
    "/dating/8.jpg",
    "/dating/9.jpg",
    "/dating/10.jpg",
    "/dating/11.jpg",
    "/dating/12.jpg",
    "/dating/13.jpg",
    "/dating/14.jpg",
    "/dating/15.jpg",
    "/dating/16.jpg",
    "/dating/17.jpg",
    "/dating/18.jpg",
    "/dating/19.jpg",
    "/dating/20.jpg",
    "/dating/21.jpg",
    "/dating/22.jpg",
    "/dating/23.jpg",
    "/dating/24.jpg",
    "/dating/25.jpg",
    "/dating/26.jpg",
    "/dating/27.jpg",
    "/dating/28.jpg",
    "/dating/29.jpg",
    "/dating/30.jpg",
    "/dating/31.jpg",
    "/dating/32.jpg",
    "/dating/33.jpg",
    "/dating/34.jpg",
    "/dating/35.jpg",
    "/dating/36.jpg",
    "/dating/37.jpg",
    "/dating/38.jpg",
    "/dating/39.jpg",
    "/dating/40.jpg",
    "/dating/41.jpg",
    "/dating/42.jpg",
  ];

  function shuffleArray(array: Array<any>) {
    return array.sort(() => Math.random() - 0.5);
  }

  let images = $state([]);

  onMount(() => {
    images = shuffleArray([...paths]);
  });

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
    onclick={next}
  >
    <Heart class="text-4xl" />
  </button>
{/snippet}

{#snippet imageCard()}
  {@const path = randFrom(paths)}
  {#key refresh}
    <div class="align-center relative w-full">
      <img
        src={path}
        alt="me"
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
