<script lang="ts">
  import Github from "~icons/mdi/github";
  import LinkedIn from "~icons/mdi/linkedin";
  import Email from "~icons/mdi/email";
  import Rss from "~icons/mdi/rss";
  import WhatsApp from "~icons/mdi/whatsapp";
  import Send from "~icons/mdi/send";
</script>

{#snippet social(href: string, aria: string, color: string, Icon: any) }
    <a
        {href}
        target="_blank"
        aria-label={aria}
    >
        <Icon class="rounded-md {color} hover:bg-surface0 hover:text-text" />
    </a>
{/snippet}

{@render social("https://github.com/johanyim",
    "Visit my GitHub profile", 
    "text-mauve", Github)}
{@render social("https://www.linkedin.com/in/johanjyyim", 
    "Visit my LinkedIn profile", 
    "text-sapphire", LinkedIn)}
{@render social("mailto:johanjyyim@gmail.com", 
    "Open your mail client and send me a message", 
    "text-red", Email)}
{@render social("https://github.com/johanyim.atom", 
    "View my RSS feed", 
    "text-peach", Rss)}
{@render social("https://wa.me/+447510787854", 
    "Message me on my WhatsApp", 
    "text-green", WhatsApp)}
{@render social("#contact", 
    "Send me an Email", 
    "text-lavender", Send)}
