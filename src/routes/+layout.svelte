<script lang="ts">
  import "../app.css";
  import { base } from "$app/paths";
  import Menu from "~icons/mdi/menu";

  let innerWidth = 0;
  let scrollY = 0;
  let isOpen = false;
</script>

<header
  class="align-center fixed z-50 box-border flex h-0 w-screen justify-evenly"
>
  <h1
    class="disappearing flex-0 m-4 hidden h-fit rounded-xl p-2 text-2xl sm:block"
  >
    Johan Yim
  </h1>

  <nav class="m-4 h-0 flex-1">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="disappearing text-2xl sm:hidden"><Menu /></button
    >
    {#if isOpen || innerWidth > 640}
      <ul class="relative justify-center gap-x-4 sm:flex">
        <li class="contents">
          <a
            href="{base}/"
            class="disappearing block w-fit rounded-lg p-2 text-overlay2 hover:text-text"
            on:click={() => (isOpen = false)}>Home</a
          >
        </li>
        <li class="contents">
          <a
            href="{base}/reviews"
            class="disappearing block w-fit rounded-lg p-2 text-overlay2 hover:text-text"
            on:click={() => (isOpen = false)}>Reviews</a
          >
        </li>
        <li class="contents">
          <a
            href="{base}/linux"
            class="disappearing block w-fit rounded-lg p-2 text-overlay2 hover:text-text"
            on:click={() => (isOpen = false)}>Linux</a
          >
        </li>
      </ul>
    {/if}
  </nav>
  <a
    href="{base}/#contact"
    class="contact flex-0 disappearing mr-8 mt-6 h-fit rounded-lg border-2 border-lavender bg-lavender p-3 text-crust opacity-80 hover:opacity-100"
    >Contact</a
  >
</header>
<div class="content max-width px-4">
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
</style>
