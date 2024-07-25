<script>
  import { base } from "$app/paths";
  import Line from "$lib/components/Line.svelte";
  import Stars from "$lib/components/Stars.svelte";
  import Meteors from "$lib/components/Meteors.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Project from "$lib/components/Project.svelte";
  import { projects } from "$data/projects";
  import { events } from "$data/events";
  import Timeline from "$lib/components/Timeline.svelte";
  import SocialButtons from "$lib/components/SocialButtons.svelte";
  let message = "";
  let subject = "";
</script>

<svelte:head><title>Johan Yim</title></svelte:head>

<section class="flex h-[30rem] min-h-section">
  <Stars className="top-0 left-0 absolute z-[-2] h-section w-full" />
  <div class="m-auto align-middle">
    <div class="container m-auto h-fit max-w-wide p-3">
      <h1 class="sm:text-4x mb-4 text-4xl font-semibold opacity-80">
        Hi, I'm Johan
      </h1>
      <h4 class="text-balance text-2xl text-text opacity-60">
        I'm a software engineer that will go to great lengths to make my
        programs feel fast and smooth
      </h4>
      <div class="my-4 flex gap-3 text-3xl"><SocialButtons /></div>
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
  <div class="grid columns-1 grid-flow-dense gap-6 @container xl:columns-2">
    {#each projects as { id, title, headline, description, href }}
      <Project {headline} {title} {description} {href} />
    {/each}
  </div>
</section>

<Line text="About Me" style="py-16" />
<section class="mx-auto min-h-section">
  <div class="group">
    <div
      class="relative m-auto h-44 rounded-t-xl border-2 border-b-4 border-surface1 border-b-subtext0 bg-crust pt-2 transition duration-500 group-hover:border-overlay0 group-hover:border-b-lavender"
    >
      <h2
        class="absolute bottom-4 right-4 text-xl font-semibold text-text opacity-50 sm:bottom-8 sm:right-16 sm:text-4xl"
      >
        Johan Yim
      </h2>
      <Stars id="stars2" className="relative w-1/1 z-0 h-1/1" />
    </div>
    <div
      class="relative z-10 mx-auto rounded-b-xl border-2 border-t-0 border-surface1 border-t-subtext1 bg-mantle p-4 transition duration-500 group-hover:border-overlay0"
    >
      <img
        src="./transparent.png"
        alt="Picture of me"
        class="pointer-events-none relative left-6 top-[-10rem] mb-[-8rem] size-[10rem] rounded-full border-4 border-subtext0 bg-mantle transition duration-500 group-hover:border-lavender"
      />
      <div
        class="absolute right-4 top-0 my-4 flex gap-2 text-xl sm:right-10 sm:text-3xl"
      >
        <SocialButtons />
      </div>

      <div
        class="relative top-4 divide-y divide-solid divide-surface1 border-t border-surface1 text-lg font-light tracking-tight text-text sm:text-xl"
      >
        <p class="py-4">
          I'm Johan. I graduated from the University of Bath with a Master's
          degree in Computer Science. Right now, I'm a software developer for BG
          Automotive.
        </p>
        <p class="py-4">
          I like making things feel fast. I prefer spending 3 hours writing a
          program that turns a 10-second job into a 1-second script. Maybe it
          could've been done manually, but I never said anything about making it
          efficient.
        </p>
        <p class="py-4">
          I am a minimalist. I have rid myself of unnecessary belongings and
          constructs such as furniture, social media, variety in life, and
          Windows. It is exactly for this reason that I only possess the things
          that are meaningful to me. You see, a wise man once said:
        </p>
        <blockquote>
          <p
            class="group/quote text-balance py-8 text-center italic text-overlay1"
          >
            "You've gotta be odd to be number one" <span
              class="text-surface0 transition-colors duration-200 group-hover/quote:text-overlay1"
              >- Me</span
            >
          </p>
        </blockquote>
        <p class="py-4">
          I enjoy taking my time to learn new programming languages and
          paradigms through books and documentation. I strive to make apps that
          feel fast and bulletproof. Because of this, I really like using Rust
          for my projects.
        </p>
      </div>
    </div>
  </div>
</section>

<Line text="Experience" style="py-16" />
<section>
  <ol class="relative z-10 -ml-6 border-s-2 border-surface1">
    {#each events.slice().reverse() as event, index}
      <li class="group z-10 ms-6 py-2 sm:py-4">
        <span
          class="absolute -start-3 z-[-10] mt-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-subtext0 bg-crust ring-[1rem] ring-crust transition-all duration-150 group-hover:border-lavender"
        >
        </span>
        <div
          class=" rounded-xl border-2 border-base p-4 transition-all duration-150 group-hover:border-surface0 group-hover:bg-mantle"
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

<Line text="Contact" style="py-16" />
<section id="contact" class="mx-auto min-h-section max-w-wide">
  <ContactForm />
</section>
