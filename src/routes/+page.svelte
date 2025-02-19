<script lang="ts">
  import Game from './Game.svelte';
  import '../styles.css';
  import { onMount } from 'svelte';
  import Modal from './Modal.svelte';
  import { levels } from './levels';

  //this is union type in javascript
  //TypeScript ensures that you cannot assign any value to state that is not one of the allowed values.
  let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost';
  let game: Game;
  const stateMessages = {
    waiting: 'Choose a Level',
    won: 'You Won',
    paused: 'Paused',
    lost: 'You Lost',
  } as const;

  onMount(() => {
    state = 'waiting';
  });
  console.log('this is state message', stateMessages);
</script>

<div>
  <h1 class="game-heading">Memory Card Game</h1>
  <Game
    bind:this={game}
    on:play={() => (state = 'playing')}
    on:pause={() => (state = 'paused')}
    on:win={() => (state = 'won')}
    on:lose={() => (state = 'lost')}
  />

  {#if state !== 'playing'}
    <Modal>
      {#if state && state in stateMessages}
        <div class="modal-title">
          <h1>{stateMessages[state]}</h1>
        </div>
      {/if}

      <div class="buttons">
        {#if state === 'paused'}
          <button on:click={() => game.resume()}>resume</button>
          <button on:click={() => game.quit()}>quit</button>
        {:else}
          {#each levels as level}
            <button class="level-button" on:click={() => game.startGame(level)}
              >{level.label}</button
            >
          {/each}
        {/if}
      </div>
    </Modal>
  {/if}
</div>

<style>
  .level-button {
    margin: 20px;
    padding: 10px 20px;
  }

  .modal-title {
    text-align: center;
  }

  .game-heading {
    text-align: center;
  }
</style>
