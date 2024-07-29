<script>
  import { copy } from "svelte-copy";

  import ContentCopy from "~icons/mdi/content-copy";

  let subject = "";
  let message = "";
</script>

<form
  class="flex flex-col gap-4 rounded-2xl border-2 border-overlay0 bg-mantle p-4"
  action="https://formspree.io/f/mpwaqbak"
  method="POST"
>
  <h3 class="text-3xl font-bold text-lavender">Send me a message</h3>
  <!-- send to johanjyyim@gmail.com -->
  <div class="flex flex-wrap gap-4">
    <input
      class="block w-full flex-1 basis-64 rounded-xl border-2 border-mantle bg-crust p-4 text-lg text-text placeholder-surface1"
      type="email"
      name="email"
      placeholder="Your email"
    />
    <button
      class="block flex-1 basis-64 overflow-x-hidden text-nowrap rounded-xl border-2 border-mantle bg-base p-4 text-left text-lg text-overlay0 placeholder-surface1 ring-surface0 hover:ring-2 active:bg-mantle"
      use:copy={"johanjyyim@gmail.com"}
      type="button"
      >johanjyyim@gmail.com <ContentCopy class="inline" />
    </button>
  </div>

  <label for="subject" class="visually-hidden">Subject</label>
  <input
    bind:value={subject}
    class="w-full rounded-xl border-2 border-mantle bg-crust p-4 text-lg text-text placeholder-surface1"
    type="text"
    name="subject"
    placeholder="Subject"
  />
  <label for="message" class="visually-hidden">Message</label>
  <textarea
    bind:value={message}
    required
    rows="10"
    class="resize-none rounded-xl border-2 border-mantle bg-crust p-4 text-lg text-text placeholder-surface1"
    name="message"
    placeholder="Message"
  />
  <!-- your other form fields go here -->
  <div class="grid grid-cols-2 gap-6 sm:grid-cols-3">
    <a
      href="mailto:johanjyyim@gmail.com?subject={subject}&body={message}"
      class="m-auto block w-full rounded-xl border-2 border-lavender p-4 text-center text-lavender sm:w-fit"
      >Open in mail</a
    >
    <button
      type="submit"
      class="m-auto w-full rounded-xl bg-lavender p-4 text-lg text-crust"
      >Send</button
    >
  </div>
</form>
