<script>
  import "../app.css";

  import { base } from "$app/paths";

  //scrolling
  let y;
</script>

<header
  class="align-center fixed z-50 box-border flex h-0 w-screen justify-evenly"
>
  <h1
    class="disappearing flex-0 m-4 hidden h-fit rounded-xl p-2 text-2xl sm:block"
  >
    Johan Yim
  </h1>

  <nav class=" m-4 h-0 flex-1">
    <ul class="flex h-0 justify-center gap-4">
      <li>
        <a
          href="{base}/"
          class="disappearing rounded-lg p-2 text-overlay2 hover:text-text"
          >Home</a
        >
      </li>
      <li>
        <a
          href="{base}/reviews"
          class="disappearing rounded-lg p-2 text-overlay2 hover:text-text"
          >Reviews</a
        >
      </li>
      <li>
        <a
          href="{base}/linux"
          class="disappearing rounded-lg p-2 text-overlay2 hover:text-text"
          >Linux</a
        >
      </li>
    </ul>
  </nav>
  <button
    href="#"
    class="contact flex-0 disappearing mr-8 mt-6 h-fit rounded-lg border-2 border-lavender bg-lavender p-3 text-crust opacity-80 hover:opacity-100"
    >Contact</button
  >
</header>
<div class="content max-width px-10">
  <slot />
</div>

<svelte:window bind:scrollY={y} />
{#if y > 150}
  <style>
    .disappearing {
      transition: all 0.3s;
      opacity: 30%;
    }

    .disappearing:hover {
      background: #11111b;
      transition: all 0.3s;
      opacity: 100%;
    }
    .contact {
      background-color: rgba(0, 0, 0, 0);
      color: #b4befe;
    }
    .contact:hover {
      /* background-color: #11111b; */
      color: #11111b;
      background: #b4befe;
      opacity: 100%;
    }
  </style>
{/if}

<style>
  .disappearing {
    transition: all 0.3s;
  }
</style>
