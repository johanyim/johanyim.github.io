<script lang="ts">
  import SocialButtons from "$molecules/SocialButtons.svelte";
  import Stars from "$organisms/Stars.svelte";
</script>

<div class="group">
  <div
    class="relative m-auto h-44 rounded-t-xl border-2 border-b-4 border-surface1 border-b-subtext0 bg-crust pt-2 transition duration-500 group-hover:border-overlay0 group-hover:border-b-lavender"
  >
    <h2
      class="absolute bottom-4 right-4 text-xl font-semibold text-text opacity-50 sm:bottom-8 sm:right-16 sm:text-4xl"
    >
      Johan Yim
    </h2>
    <Stars id="stars2" className="relative w-full z-0 h-full border" />
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
        I enjoy taking my time to learn new programming languages and paradigms
        through books and documentation. I strive to make apps that feel fast
        and bulletproof. Because of this, I really like using Rust for my
        projects.
      </p>
      <p class="py-4">
        Aside from programming, I do some unhinged reviews that I post on Google
        maps.
      </p>
    </div>
  </div>
</div>
