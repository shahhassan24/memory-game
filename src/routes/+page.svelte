<script lang="ts">
  import Game from "./Game.svelte";
  import "../styles.css"
  import { onMount } from "svelte";
  import Modal from "./Modal.svelte";
  import { levels } from "./levels";

  let state: 'waiting' | 'playing'  | 'paused' | 'won' | 'lost';
  let game: Game;
  const stateMessages = {
    waiting: 'choose a level',
    won: 'you won',
    paused: 'paused',
    lost: 'you lost'
  } as const;

  onMount(() => {
    state = 'waiting'
  })
</script>


<Game bind:this={game}
  on:play={() => state = 'playing'}
  on:pause={() => state = 'paused'}
  on:win={() => state = 'won'}
  on:lose={() => state = 'lost'}
/>


{#if state !== 'playing'}
  <Modal>
    {#if state && state in stateMessages}
      <p>{stateMessages[state]}</p>
    {/if}

    <div class="buttons">
      {#if state === 'paused'}
        <button>resume</button>
        <button>quit</button>

      {:else}
        {#each levels as level}
          <button on:click={() => game.startGame(level)}>{level.label}</button>
        {/each}
      {/if}
    </div>
  </Modal>
{/if}