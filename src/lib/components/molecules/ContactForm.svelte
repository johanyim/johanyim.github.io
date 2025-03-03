<script>
  import { copy } from "svelte-copy";
  import { base } from "$app/paths";
  import ContentCopy from "~icons/mdi/content-copy";

  let email = $state("");
  let subject = $state("");
  let message = $state("");

  let showKitty = $derived(
    email.toLowerCase() == "kitty" && subject.toLowerCase() == "love",
    // && message.toLowerCase().includes("mew"),
  );
</script>

<form
  class="relative flex flex-col gap-4 rounded-2xl bg-mantle p-4 ring-4 ring-crust duration-200 hover:ring-surface0"
  action="https://formspree.io/f/mpwaqbak"
  method="POST"
>
  <h3 class="text-2xl font-bold text-lavender">Send me a message</h3>
  <!-- send to johanjyyim@gmail.com -->
  <div class="flex flex-wrap gap-4">
    <input
      class="block w-full flex-1 basis-64 rounded-xl border-2 border-mantle bg-crust p-4 text-md text-text placeholder-surface1"
      type="email"
      name="email"
      placeholder="Your email"
      bind:value={email}
    />
    <button
      class="block flex-1 basis-64 overflow-x-hidden text-nowrap rounded-xl border-2 border-mantle bg-base p-4 text-left text-md text-surface1 placeholder-surface1 ring-surface0 duration-200 hover:ring-2 active:bg-mantle"
      use:copy={"johanjyyim@gmail.com"}
      type="button"
      >johanjyyim@gmail.com <ContentCopy class="inline" />
    </button>
  </div>

  <label for="subject" class="visually-hidden">Subject</label>
  <input
    bind:value={subject}
    class="w-full rounded-xl border-2 border-mantle bg-crust p-4 text-md text-text placeholder-surface1"
    type="text"
    name="subject"
    placeholder="Subject"
  />
  <label for="message" class="visually-hidden">Message</label>
  <textarea
    bind:value={message}
    required
    rows="10"
    class="resize-none rounded-xl border-2 border-mantle bg-crust p-4 text-md text-text placeholder-surface1"
    name="message"
    placeholder="Message"
  ></textarea>
  <div class="grid h-fit grid-cols-2 gap-6 sm:grid-cols-3">
    <a
      href="mailto:johanjyyim@gmail.com?subject={subject}&body={message}"
      class="m-auto block h-fit w-full rounded-xl border-2 border-lavender p-3 text-center text-md text-lavender sm:w-fit"
      >Open in mail</a
    >
    <button
      type="submit"
      class="m-auto h-fit w-full rounded-xl bg-lavender p-3 text-md text-crust"
      >Send</button
    >

    <a
      href="{base}/kitty"
      class="m-auto block w-full min-w-40 rounded-xl text-center text-md text-pink transition-opacity duration-1000 sm:w-fit"
      class:opacity-0={!showKitty}
      class:p-3={showKitty}
      class:border-pink={showKitty}
      class:border-2={showKitty}>{showKitty ? "Mew!" : ""}</a
    >
  </div>
</form>
