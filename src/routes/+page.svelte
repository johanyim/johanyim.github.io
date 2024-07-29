<script>
  import { base } from "$app/paths";
  import { projects } from "$data/projects";
  import { events } from "$data/events";
  import Line from "$atoms/Line.svelte";
  import Timeline from "$organisms/Timeline.svelte";
  import Stars from "$organisms/Stars.svelte";
  import Project from "$molecules/Project.svelte";
  import SocialButtons from "$molecules/SocialButtons.svelte";
  import About from "$organisms/About.svelte";
  import ContactForm from "$organisms/ContactForm.svelte";
</script>

<svelte:head><title>Johan Yim</title></svelte:head>

<section class="flex h-[30rem] min-h-section">
  <Stars id="hero" className="top-0 left-0 absolute z-[-2] h-section w-full" />
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
    {#each projects as { title, headline, description, href }}
      <Project {headline} {title} {description} {href} />
    {/each}
  </div>
</section>

<Line text="About Me" style="py-16" />
<section class="mx-auto min-h-section">
  <About />
</section>

<Line text="Experience" style="py-16" />
<section>
  <Timeline />
</section>

<Line text="Contact" style="py-16" />
<section id="contact" class="mx-auto min-h-section max-w-wide">
  <ContactForm />
</section>
