<script>
import Magnify from "~icons/mdi/magnify";
import {onMount, tick} from 'svelte' 
import Line from "$atoms/Line.svelte";

let ref = null



const weatherPromise = fetch("https://wttr.in/London?format=j1")
    .then(async (res) => res.json())


onMount(async () => {
    ref.value = ""
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
    {:then data}
        {@const current_condition  = ( ({
            FeelsLikeC,
            temp_C,
            weatherCode,
            weatherDesc,
        }) => ({
                FeelsLikeC,
                temp_C,
                weatherCode,
                weatherDesc,
            }) )(data.current_condition[0])
        }

        {@const weather = data.weather.map((d) => {
            return {
                date: d.date,
                minTemp: d.mintempC,
                maxTemp: d.maxtempC,
                hourly: d.hourly.map((h) => 
                {return {
                        forecast: (({
                            FeelsLikeC,
                            chanceofrain,
                            tempC,
                            time,
                            weatherCode,
                        }) => ({
                                FeelsLikeC,
                                chanceofrain,
                                tempC,
                                time,
                                weatherCode,
                            }))(h)
                    }}
                ),
            } 

        })}
        <pre>{JSON.stringify(current_condition, null, 2)}</pre> 
        <pre>{JSON.stringify(weather, null, 2)}</pre> 

    {:catch}
        Could not get weather
    {/await}
</div>


  <!-- // -->
  <!-- // return { -->
  <!-- //     current_condition, -->
  <!-- //     weather, -->
  <!-- //   // .weather -->
  <!-- //       // .map((d) => d.hourly -->
  <!-- //       //   // .map((h, i) => {return { -->
  <!-- //       //   //   time: i * 300,  -->
  <!-- //       //   //   desc: h.weatherDesc[0].value -->
  <!-- //       //   // }}) -->
  <!-- //       // ) -->
  <!-- // -->
  <!-- // } -->
