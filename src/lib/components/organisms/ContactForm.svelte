<script>
  import { copy } from "svelte-copy";

  import ContentCopy from "~icons/mdi/content-copy";

  let subject = "";
  let message = "";
</script>

<form
  class="flex flex-col gap-4 rounded-2xl bg-mantle p-4 ring-4 ring-crust duration-200 hover:ring-surface0"
  action="https://formspree.io/f/mpwaqbak"
  method="POST"
>
  <h3 class="text-2xl font-bold text-lavender">Send me a message</h3>
  <!-- send to johanjyyim@gmail.com -->
  <div class="flex flex-wrap gap-4">
    <input
      class="text-md block w-full flex-1 basis-64 rounded-xl border-2 border-mantle bg-crust p-4 text-text placeholder-surface1"
      type="email"
      name="email"
      placeholder="Your email"
    />
    <button
      class="text-md block flex-1 basis-64 overflow-x-hidden text-nowrap rounded-xl border-2 border-mantle bg-base p-4 text-left text-surface1 placeholder-surface1 ring-surface0 duration-200 hover:ring-2 active:bg-mantle"
      use:copy={"johanjyyim@gmail.com"}
      type="button"
      >johanjyyim@gmail.com <ContentCopy class="inline" />
    </button>
  </div>

  <label for="subject" class="visually-hidden">Subject</label>
  <input
    bind:value={subject}
    class="text-md w-full rounded-xl border-2 border-mantle bg-crust p-4 text-text placeholder-surface1"
    type="text"
    name="subject"
    placeholder="Subject"
  />
  <label for="message" class="visually-hidden">Message</label>
  <textarea
    bind:value={message}
    required
    rows="10"
    class="text-md resize-none rounded-xl border-2 border-mantle bg-crust p-4 text-text placeholder-surface1"
    name="message"
    placeholder="Message"
  />
  <div class="grid h-fit grid-cols-2 gap-6 sm:grid-cols-3">
    <a
      href="mailto:johanjyyim@gmail.com?subject={subject}&body={message}"
      class="text-md m-auto block h-fit w-full rounded-xl border-2 border-lavender p-3 text-center text-lavender sm:w-fit"
      >Open in mail</a
    >
    <button
      type="submit"
      class="text-md m-auto h-fit w-full rounded-xl bg-lavender p-3 text-crust"
      >Send</button
    >
  </div>
</form>
