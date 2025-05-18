<script>
import Magnify from "~icons/mdi/magnify";
import {onMount, tick} from 'svelte' 
import Line from "$atoms/Line.svelte";

let ref = null



const weatherPromise = fetch("https://wttr.in/London?format=j1");


onMount(async () => {
    await tick();
    await ref.focus();

})

// let { data } = $props();
let data = ""


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
    <!-- <div class="weather"> -->
    <!--     <h2>Weather in {data.weather.location}, {data.weather.region}, {data.weather.country}</h2> -->
    <!--     <p><strong>Temperature:</strong> {data.weather.currentTempC}°C</p> -->
    <!--     <p><strong>Condition:</strong> {data.weather.currentCondition}</p> -->
    <!--     <p><strong>Feels Like:</strong> {data.weather.feelsLike}°C</p> -->
    <!--     <p><strong>Humidity:</strong> {data.weather.humidity}%</p> -->
    <!--     <p><strong>Wind:</strong> {data.weather.wind}</p> -->
    <!-- </div> -->
    {#await weatherPromise}
        Loading...
    {:then weatherRes}
        {#await weatherRes.json()}
            Loading...
        {:then weather}
            <pre>{JSON.stringify(weather, null, 2)}</pre>
        {/await}
    {:catch}
        Could not get weather
    {/await}
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>



