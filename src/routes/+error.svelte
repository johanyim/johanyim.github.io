<script>
const lines = [
    "Oh, there doesn't seem to be anything here. That's okay. Let's just enjoy the stars.",
    "",
    "",
    "Still here?",
    "Are you looking for something?",
    "There's nothing here, just empty space. I think you're lost.",
    "But maybe that's okay.",
    "Maybe we don't have to search anymore?",
    "Maybe we don't even remember what we're looking for?",
    "Maybe we already have everything we need?",
    "Maybe we feel most lost when we try to look for something we can't find?", 
    "Maybe the feeling of home is when we don't need to look for anything anymore?", 
    "It's easy to see what's important and what isn't...", 
    "...when you don't have much at all.", 
    "When we have less, the important pieces of our lives take up a bigger part of us.", 
    "It's kind of like - the more things we have, the more we yearn for something else.", 
    "The more things we feel are missing from our lives.", 
    "The more we feel lost.",
    "",
    "",
    "Is having so little really okay?",
    "",
    "",
]
</script>


<div class="w-full border-1 text-overlay1 text-lg">
    <div class="h-[40vh]"></div>
    {#each lines as line}
        <div class="w-full h-[150vh] text-center align-baseline">
            { line }
        </div>
    {/each}
    <div class="w-full h-[50vh] text-center">
        That's enough, let's get you back <a href="/" class="text-lavender">home</a>.
    </div>
</div>
