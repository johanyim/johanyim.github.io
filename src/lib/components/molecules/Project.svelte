<script lang="ts">
  let { title, headline, description, href } = $props();
</script>

<a
  {href}
  class="group col-span-1 h-fit rounded-xl border-2 border-overlay0 bg-mantle p-3 transition duration-200 first:mx-auto first:w-full hover:border-lavender hover:bg-base active:bg-crust xl:first:col-span-2 xl:first:max-w-wide xl:first:p-6"
>
  <div class="text-2xl font-bold text-lavender xl:group-first:text-3xl">
    {title}
  </div>

  <div
    class="font-regular my-2 text-lg italic text-overlay1 xl:group-first:text-xl"
  >
    {headline}
  </div>
  <div class="font-sans text-lg xl:group-first:text-2xl">
    {@html description}
  </div>
</a>
