<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import Menu from "~icons/mdi/menu";
  import { page } from "$app/stores";

  // for collapsing navbar into menu icon
  let innerWidth = 0;

  // for making navbar transparent
  let scrollY = 0;
  let isOpen = false;

  // for highlighting navbar
  let routeId;
  $: routeId = $page.route.id;

  const links = [
    { href: `/`, text: "Home" },
    { href: `/reviews`, text: "Reviews" },
    { href: `/linux`, text: "Linux" },
    { href: `/blog`, text: "Blog" },
  ];
</script>

<header class="fixed z-50 flex h-header w-screen items-center">
  <h1
    class="disappearing flex-0 mx-4 hidden h-fit text-nowrap rounded-xl p-2 text-2xl sm:block"
  >
    Johan Yim
  </h1>

  <nav class="h-header flex-1">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="disappearing mx-4 mt-4 rounded-xl text-2xl sm:hidden"
      ><Menu /></button
    >
    {#if isOpen || innerWidth > 640}
      <!-- {#if true || innerWidth > 640} -->
      <ul class="relative mx-4 justify-center gap-x-4 sm:flex">
        {#each links as { href, text }}
          <li class="contents">
            <a
              {href}
              class="disappearing block w-fit rounded-lg p-2 text-overlay2 hover:text-text"
              class:active={routeId == href}
              on:click={() => (isOpen = false)}>{text}</a
            >
          </li>
        {/each}
      </ul>
    {/if}
  </nav>

  <a
    href="{base}/#contact"
    class="contact flex-0 disappearing mx-8 h-fit rounded-lg border-2 border-lavender bg-lavender p-3 text-crust opacity-80 hover:opacity-100 hover:active:bg-crust hover:active:text-lavender"
    >Contact</a
  >
</header>
<div class="h-header"></div>
<div class="px-4">
  <slot />
</div>

<svelte:window bind:scrollY bind:innerWidth />
{#if scrollY > 150}
  <style>
    .disappearing {
      opacity: 30%;
    }

    .disappearing:hover {
      background: #11111b;
      transition: all 0.2s;
      opacity: 90%;
    }
    .contact {
      background-color: rgba(0, 0, 0, 0);
      color: #b4befe;
    }
    .contact:hover {
      /* background-color: #11111b; */
      color: #11111b;
      background: #b4befe;
      opacity: 90%;
    }
  </style>
{/if}

{#if isOpen}
  <style>
    nav a,
    nav button {
      opacity: 90% !important;
      background: #11111b;
    }
  </style>
{/if}

<style>
  .disappearing {
    transition: all 0.3s;
  }
  .active {
    color: #b4befe;
  }
</style>
