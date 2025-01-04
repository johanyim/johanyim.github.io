<script lang="ts">
  import Particles, { particlesInit } from "@tsparticles/svelte";
  import { fade } from "svelte/transition";
  import { loadSlim } from "@tsparticles/slim";
  import { onMount } from "svelte";
  let { className, id } = $props();

  let particlesConfig = {
    autoPlay: true,
    // background: {
    //   color: {
    //     value: "#11111b",
    //   },
    // },
    delay: 0,
    detectRetina: true,
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    duration: 0,
    fpsLimit: 10,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: {
          delay: 0.1,
          enable: false,
        },
      },
      modes: {
        bubble: {
          distance: 150,
          mix: false,
          opacity: 0.2,
          size: 6,
        },
        push: {
          quantity: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#cdd6f4",
      },
      move: {
        decay: 0,
        distance: {},
        direction: "top",
        enable: true,
        path: {
          clamp: true,
          delay: {
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        speed: {
          min: 0.02,
          max: 0.05,
        },
        straight: true,
      },
      number: {
        value: 100,
        limit: {
          value: 300,
          mode: "delete",
        },
        density: {
          enable: true,
          value_area: {
            density_auto: false,
          },
        },
      },
      opacity: {
        value: {
          min: 1,
          max: 1,
        },
      },
      reduceDuplicates: true,
      shape: {
        close: true,
        fill: true,
        type: "polygon",
        options: {
          polygon: {
            sides: 5,
          },
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },

      links: {
        enable: true,
        color: {
          value: "#cdd6f4",
        },
        distance: 180,
        frequency: 0.2,
        opacity: 0.7,
        width: 2,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
    zLayers: 1,
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  };

  let loaded = $state(false);

  // let onParticlesLoaded = (event) => {
  //   const particlesContainer = event.detail.particles;
  // };

  onMount(() => {
    loaded = true;
  });

  void particlesInit(async (engine) => {
    await loadSlim(engine);
  });
</script>

{#if loaded}
  <div transition:fade={{ delay: 0, duration: 300 }} class="content">
    <Particles {id} class={className} options={particlesConfig} />
  </div>
  <!-- on:particlesLoaded={onParticlesLoaded} -->
{/if}
