<script>
  import { base } from "$app/paths";
  import { projects } from "$data/projects";
  import Line from "$atoms/Line.svelte";
  import SocialButtons from "$molecules/SocialButtons.svelte";
  import Project from "$molecules/Project.svelte";
  import About from "$organisms/About.svelte";
  import Timeline from "$organisms/Timeline.svelte";
  import Contact from "$organisms/Contact.svelte";
  import Lazy from "svelte-lazy";
  import LifeChart from "$organisms/LifeChart.svelte";
</script>

<svelte:head>
  <title>Johan Yim</title>
  <meta
    name="keywords"
    content="Johan Yim, Johan, Yim, Software, Rust, Svelte, BGAutomotive, Tauri, Vim, NeoVim, Linux, Bash"
  />
  <meta name="description" content="The home page of Johan Yim" />
</svelte:head>

<section class="-mt-header flex h-[30rem] min-h-section">
  <div class="m-auto p-0 align-middle sm:p-8">
    <div class="container m-auto h-fit max-w-wide p-3">
      <h1 class="mb-4 text-4xl font-semibold opacity-80 sm:text-5xl">
        Johan Yim
      </h1>
      <h4 class="text-balance text-xl text-text opacity-60 sm:text-2xl">
        Software Engineer
      </h4>
      <div class="my-4 flex gap-3 text-2xl sm:text-3xl"><SocialButtons /></div>
    </div>
    <a
      href="{base}/cv"
      class="inline-block rounded-xl border-2 border-lavender p-3 text-xl text-lavender hover:border-text hover:text-text"
      >View CV</a
    >
  </div>
</section>

<Line text="Projects" style="mb-16" color="#cdd6f4" />
<section class="z-10 mx-auto max-w-widest">
  <div
    class="z-10 grid columns-1 grid-flow-dense gap-6 @container xl:columns-2"
  >
    {#each projects as { title, headline, description, href }}
      <Project {headline} {title} {description} {href} />
    {/each}
  </div>
</section>

<Line text="About Me" style="py-16" color="#cdd6f4" />
<section class="mx-auto max-w-narrow">
  <About />
</section>

<Line text="Timeline" style="py-16" color="#cdd6f4" />
<section>
  <Timeline />
</section>

<Line id="contact" text="Contact" style="py-16" color="#cdd6f4" />
<section class="mx-auto max-w-wide space-y-4">
  <Contact />
</section>

<Lazy
  height={0}
  keep={false}
  offset={-50}
  fadeOption={{ delay: 1000, duration: 1000 }}
>
  <Line text="Motivation" style="py-16" color="#cdd6f4" />
  <section class="mx-auto max-w-wide">
    <LifeChart />
  </section>
</Lazy>
