<script lang="ts">
  import { onMount } from 'svelte';

  export let remaining: number;
  export let duration: number;
  let durationDiv: HTMLDivElement;
  console.log('Component script executed');
  // $: console.log(
  //   `Component re-rendered. Remaining: ${remaining}, Duration: ${duration}`
  // );
  // $: {
  //   console.log('DOM updated with remaining:', remaining);
  // }
  onMount(() => {
    console.log('Component mounted');
  });
</script>

<div class="countdown">
  <button on:click
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><title>pause</title><path
        d="M14,19H18V5H14M6,19H10V5H6V19Z"
        fill="#999"
      /></svg
    ></button
  >

  <!-- --p is the css variable -->
  <div class="duration" bind:this={durationDiv}>
    <div class="remaining" style="--p:{remaining / duration}"></div>
  </div>
</div>

<style>
  .countdown {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  button {
    font-size: 8em;
    width: 1em;
    background: transparent;
    border: none;
  }

  /* svg{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    } */

  .duration {
    flex: 1;
    height: 1em;
    background-color: #ccc;
  }
  .remaining {
    position: absolute;
    width: calc(100% * var(--p));
    height: 100%;
    background-color: #999;
  }
</style>
