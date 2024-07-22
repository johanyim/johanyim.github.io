<script>
  import { base } from "$app/paths";
  import Line from "$lib/components/Line.svelte";
  import Stars from "$lib/components/Stars.svelte";
  import Meteors from "$lib/components/Meteors.svelte";
  import Project from "$lib/components/Project.svelte";
  import { projects } from "$data/projects";
  import { events } from "$data/events";
  import LinkedIn from "~icons/mdi/linkedin";
  import Email from "~icons/mdi/email";
  import Github from "~icons/mdi/github";
  import Timeline from "$lib/components/Timeline.svelte";
</script>

<section class="flex min-h-section">
  <Stars className="top-0 left-0 absolute z-[-2] h-section w-full" />
  <!-- <Stars id="stars1" style="top-0 left-0 fixed z-[-2] h-section w-full" /> -->
  <div class="container m-auto h-full max-w-wide p-3">
    <h1 class="mb-4 text-4xl font-semibold opacity-80 sm:text-4xl md:text-5xl">
      Hi, I'm Johan
    </h1>
    <h4 class="text-balance text-2xl text-text opacity-60">
      I'm a software engineer that likes making applications feel smooth and
      seamless through simplicity
    </h4>
    <div class="my-4 flex gap-5">
      <a href="#"
        ><Github
          class="rounded-md text-4xl text-mauve hover:bg-surface0 hover:text-text"
          href="#"
        /></a
      >
      <a href="#"
        ><LinkedIn
          class="rounded-md text-4xl text-sapphire hover:bg-surface0 hover:text-text"
        /></a
      >
      <a href="#"
        ><Email
          class="rounded-md text-4xl text-red hover:bg-surface0 hover:text-text"
        /></a
      >
    </div>
    <a
      href="{base}/cv"
      class="inline-block rounded-xl border-2 border-lavender p-3 text-xl text-lavender hover:border-text hover:bg-mantle hover:text-text"
      >View CV</a
    >
  </div>
</section>

<Line text="Projects" style="mb-16" />
<section class="mx-auto max-w-widest">
  <div
    class="grid min-h-section columns-1 grid-flow-dense gap-6 @container xl:columns-2"
  >
    {#each projects as { id, title, headline, description, href }}
      <Project {headline} {title} {description} {href} />
    {/each}
  </div>
</section>

<Line text="About Me" style="py-16" />
<section class="mx-auto min-h-section max-w-wide">
  <div class="group">
    <div
      class="m-auto h-44 rounded-t-xl border-2 border-b-4 border-surface1 border-b-subtext0 bg-crust pt-2 transition duration-500 group-hover:border-overlay0 group-hover:border-b-lavender"
    >
      <Stars id="stars2" className="relative w-1/1 z-0 h-1/1" />
    </div>
    <div
      class="z-10 mx-auto rounded-b-xl border-2 border-t-0 border-surface1 border-t-subtext1 bg-mantle p-4 transition duration-500 group-hover:border-overlay0 sm:p-10"
    >
      <img
        src="./transparent.png"
        alt="Picture of me"
        class="pointer-events-none relative left-10 top-[-10rem] mb-[-8rem] size-[12rem] rounded-full border-4 border-subtext0 bg-mantle transition duration-500 group-hover:border-lavender"
      />
      <p
        class="text-balance text-lg font-light tracking-tight text-text sm:text-2xl"
      >
        About Me self image I'm Johan. I graduated from the University of Bath
        with a Master's degree in Computer Science. Right now, I'm working
        towards finding a career in software engineering. I enjoy taking my time
        to learn new languages, paradigms and technologies for software
        development. I like making apps that feel fast and lightweight. Because
        of this, I really like using Rust for its type safety and performance.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus
        ea vitae nesciunt provident perferendis est corporis inventore numquam
        nihil exercitationem ab, delectus debitis eius illo nobis, eos iure nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque a
        porro sequi, nostrum sit earum corporis maiores impedit excepturi, error
        reprehenderit! Omnis velit molestias tempora, repellat voluptatem animi
        a.
      </p>
    </div>
  </div>
</section>

<Line text="Experience" style="py-16" />
<section class="mx-auto min-h-section max-w-wide">
  <ol class="relative -ml-6 divide-y-2 divide-base border-s-2 border-surface1">
    {#each events.slice().reverse() as event, index}
      <li class="group ms-8 py-2 sm:py-4">
        <span
          class="absolute -start-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-subtext0 bg-crust ring-[1.5rem] ring-crust transition-all duration-150 group-hover:border-lavender"
        >
        </span>
        <div
          class="ml-2 rounded-xl border-2 border-base p-4 transition-all duration-150 group-hover:border-surface0 group-hover:bg-mantle"
        >
          <h3
            class="mb-1 flex items-center text-lg font-bold text-lavender sm:text-2xl"
          >
            {event.title}
          </h3>
          <time
            class="text-md mb-2 block font-semibold leading-none text-overlay0"
            >{event.start_date.toLocaleDateString("en-gb", {
              year: "numeric",
              month: "short",
            })}</time
          >
          <p class="text-md text-base font-normal text-subtext0 sm:text-lg">
            {event.description}
          </p>
        </div>
      </li>
    {/each}
  </ol>
</section>

<Line text="Skills" style="py-16" />
<section class="mx-auto min-h-section max-w-wide"></section>
