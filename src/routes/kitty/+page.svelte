<script lang="ts">
  import Heart from "~icons/mdi/heart";
  import { base } from "$app/paths";

  import { prompts } from "./prompts";
  let paths = $state(
    shuffleArray([
      `${base}/dating/1.jpg`,
      `${base}/dating/2.jpg`,
      `${base}/dating/3.jpg`,
      `${base}/dating/4.jpg`,
      `${base}/dating/5.jpg`,
      `${base}/dating/6.jpg`,
      `${base}/dating/7.jpg`,
      `${base}/dating/8.jpg`,
      `${base}/dating/9.jpg`,
      `${base}/dating/10.jpg`,
      `${base}/dating/11.jpg`,
      `${base}/dating/12.jpg`,
      `${base}/dating/13.jpg`,
      `${base}/dating/14.jpg`,
      `${base}/dating/15.jpg`,
      `${base}/dating/16.jpg`,
      `${base}/dating/17.jpg`,
      `${base}/dating/18.jpg`,
      `${base}/dating/19.jpg`,
      `${base}/dating/20.jpg`,
      `${base}/dating/21.jpg`,
      `${base}/dating/22.jpg`,
      `${base}/dating/23.jpg`,
      `${base}/dating/24.jpg`,
      `${base}/dating/25.jpg`,
      `${base}/dating/26.jpg`,
      `${base}/dating/27.jpg`,
      `${base}/dating/28.jpg`,
      `${base}/dating/29.jpg`,
      `${base}/dating/30.jpg`,
      `${base}/dating/31.jpg`,
      `${base}/dating/32.jpg`,
      `${base}/dating/33.jpg`,
      `${base}/dating/34.jpg`,
      `${base}/dating/35.jpg`,
      `${base}/dating/36.jpg`,
      `${base}/dating/37.jpg`,
      `${base}/dating/38.jpg`,
      `${base}/dating/39.jpg`,
      `${base}/dating/40.jpg`,
      `${base}/dating/41.jpg`,
      `${base}/dating/42.jpg`,
    ]),
  );

  function shuffleArray(array: Array<any>) {
    return array.sort(() => Math.random() - 0.5);
  }

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

  function randFrom(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let refresh = $state<boolean>(false);

  let pr = $state(prompts.filter((p) => p.answer));

  let displayName = $state<string>(randFrom(names));

  function next() {
    displayName = randFrom(names);
    paths = shuffleArray(paths);
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

{#snippet imageCard(i: number)}
  {#key refresh}
    <div class="align-center relative w-full">
      <img
        src={paths[i]}
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

  {@render imageCard(0)}
  {@render promptCard(randFrom(pr))}
  {@render promptCard(randFrom(pr))}
  {@render imageCard(1)}
  {@render imageCard(2)}
  {@render promptCard(randFrom(pr))}
  {@render imageCard(3)}
  {@render promptCard(randFrom(pr))}
  {@render imageCard(4)}
  {@render promptCard(randFrom(pr))}
  {@render promptCard(randFrom(pr))}
</div>
