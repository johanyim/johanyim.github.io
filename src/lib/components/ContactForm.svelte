<script>
  // export let title;
  // export let headline;
  // export let description;
  // export let href;

  let subject = "";
  let message = "";
</script>

<form
  class="flex flex-col gap-4 rounded-2xl border-2 border-overlay0 bg-mantle p-4"
  action="https://formspree.io/f/mpwaqbak"
  method="POST"
>
  <h3 class="text-4xl font-bold text-lavender">Get in touch</h3>
  <!-- send to johanjyyim@gmail.com -->
  <div class="flex flex-wrap gap-4">
    <input
      class="block w-full flex-1 basis-64 rounded-xl border-2 border-mantle bg-crust p-4 text-lg text-text placeholder-surface1"
      type="email"
      name="email"
      placeholder="Your email"
    />
    <span
      class="block flex-1 basis-64 overflow-auto rounded-xl border-2 border-mantle bg-crust p-4 text-lg text-overlay0 placeholder-surface1"
      >johanjyyim@gmail.com</span
    >
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
  <div>
    <a
      href="mailto:johanjyyim@gmail.com?subject={subject}&body={message}"
      class="m-auto w-fit rounded-xl bg-lavender p-4 text-lg text-crust"
      >Open in mail</a
    >
    <button
      type="submit"
      class="m-auto w-fit rounded-xl bg-lavender p-4 text-2xl text-crust"
      >Send</button
    >
  </div>
</form>
