<script>
    import Magnify from "~icons/mdi/magnify";
    import {onMount, tick} from 'svelte' 
    import Line from "$atoms/Line.svelte";

    let ref = null
    onMount(async () => {
        await tick();
        await ref.focus();
    })

    let { data } = $props();

    
</script>

<div class="h-screen w-screen 
    flex flex-col
    p-4

    ">


    <form method="get" action="https://www.google.com/search"  class="flex text-4xl items-center ">
        <Magnify class="flex-0"/>
        <input type="text" name="q"
            class="
            outline-none
            flex-1
            bg-crust text-text
            w-full
            "  
            bind:this={ref}
        >
            <!-- border-2 border-lavender rounded-lg  -->
    </form>
    <Line style="mb-16 mt-2 mx-2" color="#cdd6f4" />
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre> 
</div>



