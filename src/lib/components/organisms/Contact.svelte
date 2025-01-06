<script>
  import ContactForm from "$molecules/ContactForm.svelte";
  import ContactDetailsButton from "$atoms/ContactDetailsButton.svelte";
  import Email from "~icons/mdi/email";
  import Phone from "~icons/mdi/phone";
</script>

<div class="flex flex-row flex-wrap justify-around gap-y-2">
  <ContactDetailsButton
    activeStyle="group-active:text-red"
    text="johanjyyim@gmail.com"
    icon={Email}
  />
  <ContactDetailsButton
    activeStyle="group-active:text-lavender"
    text="+44 7510 787854"
    icon={Phone}
  />
</div>
<ContactForm />
