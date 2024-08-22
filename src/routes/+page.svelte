<script>
  import { base } from "$app/paths";
  import { projects } from "$data/projects";
  import Line from "$atoms/Line.svelte";
  import Timeline from "$organisms/Timeline.svelte";
  import Stars from "$organisms/Stars.svelte";
  import Project from "$molecules/Project.svelte";
  import SocialButtons from "$molecules/SocialButtons.svelte";
  import About from "$organisms/About.svelte";
  import ContactForm from "$organisms/ContactForm.svelte";
  import LifeChart from "$organisms/LifeChart.svelte";
  import { copy } from "svelte-copy";
  import ContactDetailsButton from "$atoms/ContactDetailsButton.svelte";

  import ContentCopy from "~icons/mdi/content-copy";

  import Github from "~icons/mdi/github";
  import LinkedIn from "~icons/mdi/linkedin";
  import Email from "~icons/mdi/email";
  import Rss from "~icons/mdi/rss";
  import WhatsApp from "~icons/mdi/whatsapp";
  import Send from "~icons/mdi/send";
  import Phone from "~icons/mdi/phone";
</script>

<svelte:head><title>Johan Yim</title></svelte:head>

<section class="-mt-header flex h-[30rem] min-h-section">
  <Stars id="hero" className="top-0 left-0 absolute z-[-2] h-section w-full" />
  <div class="m-auto p-0 align-middle sm:p-8">
    <div class="container m-auto h-fit max-w-wide p-3">
      <h1 class="mb-4 text-2xl font-semibold opacity-80 sm:text-4xl">
        Hi, I'm Johan
      </h1>
      <h4 class="text-balance text-lg text-text opacity-60 sm:text-2xl">
        I'm a software engineer that will go to great lengths to make software
        feel fast
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
<section class="mx-auto max-w-widest">
  <div class="grid columns-1 grid-flow-dense gap-6 @container xl:columns-2">
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
  <div class="flex flex-row flex-wrap justify-around gap-y-2">
    <ContactDetailsButton
      activeStyle="group-active:text-red"
      text="johanjyyim@gmail.com"
      icon={Email}
    />
    <ContactDetailsButton
      activeStyle="group-active:text-lavender"
      text="+44 7510 787854"
      icon={Phone}
    />
  </div>
  <ContactForm />
</section>

<Line text="Motivation" style="py-16" color="#cdd6f4" />
<section class="mx-auto max-w-wide">
  <LifeChart />
</section>

<footer class="my-32"></footer>
