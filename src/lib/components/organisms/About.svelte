<script lang="ts">
  import SocialButtons from "$molecules/SocialButtons.svelte";
  import Stars from "$organisms/Stars.svelte";
</script>

<div class="group">
  <div
    class="relative m-auto h-44 rounded-t-xl border-2 border-b-4 border-surface1 border-b-subtext0 bg-crust pt-2 opacity-80 transition duration-500 group-hover:border-overlay0 group-hover:border-b-lavender"
  >
    <h2
      class="absolute bottom-4 right-4 text-xl font-semibold text-text opacity-100 opacity-50 sm:bottom-8 sm:right-16 sm:text-4xl"
    >
      Johan Yim
    </h2>
  </div>
  <div
    class="relative z-10 mx-auto rounded-b-xl border-2 border-t-0 border-surface1 border-t-subtext1 bg-mantle p-4 transition duration-500 group-hover:border-overlay0"
  >
    <enhanced:img
      src="$lib/assets/formal-color-serious-square.webp"
      alt="Me"
      class="relative left-6 top-[-10rem] mb-[-8rem] size-[10rem] rounded-full border-4 border-subtext0 bg-mantle transition duration-500 group-hover:border-lavender"
    />
    <div
      class="absolute right-4 top-0 my-4 flex gap-2 text-xl sm:right-10 sm:text-3xl"
    >
      <SocialButtons />
    </div>

    <div
      class="relative top-4 divide-y divide-solid divide-surface1 text-pretty
      border-t border-surface1 font-sans text-lg text-subtext1 sm:text-2xl"
    >
      <p class="py-2 sm:py-4">
        I'm Johan. I graduated from the University of Bath with a Master's
        degree in Computer Science. Right now, I'm developing software for BG
        Automotive.
      </p>
      <p class="py-2 sm:py-4">
        I have come to the realisation that life is too short for slow software.
        I am by no means a hyper-optimizer, and I do have a wealth of patience -
        however, the software being painstakingly shovelled into the world makes
        me question if my computer's CPU was actually a defective unit.
      </p>
      <p class="py-2 sm:py-4">
        I enjoy the long journey to make things fast - unnecessarily fast. The
        year is {new Date().getFullYear()} and we are still 'loading...' like the
        Windows Vista. I suspect that my allergy to loading spinners has been caused
        by the overwhelming growth in software complexity. At this rate, the machine
        you're using to view this site won't even run a browser for 5 minutes. So
        let's try to fix that.
      </p>
      <p class="py-2 sm:py-4">
        I am a minimalist. I have rid myself of unnecessary belongings and
        constructs such as furniture, social media, variety in life, and
        Windows. It is exactly for this reason that I only possess the things
        that are meaningful to me. Doing so has allowed me to lead a life free
        of complexity - albeit an abnormal one.
      </p>
      <blockquote class="font-light">
        <p
          class="group/quote text-balance py-8 text-center italic text-overlay1"
        >
          "You've gotta be odd to be number one" <span
            class="text-surface0 transition-colors duration-200 group-hover/quote:text-overlay1"
            >- Me</span
          >
        </p>
      </blockquote>
      <p class="py-2 sm:py-4">
        I enjoy taking my time to learn new programming languages and paradigms
        through reading programming books. I strive to make apps that feel fast
        and bulletproof. Because of this, I really like using Rust for my
        projects.
      </p>
      <p class="py-2 sm:py-4">
        Aside from programming, I do some unhinged reviews that I post on Google
        maps.
      </p>
    </div>
  </div>
</div>
