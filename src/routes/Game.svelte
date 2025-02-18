<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import CountDown from './CountDown.svelte';
  import Found from './Found.svelte';
  import Grid from './Grid.svelte';
  import { levels } from './levels';
  import type { Level } from './levels';
  import { shuffle } from './utils';

  //right now its just getting the first level
  //   const level = levels[0]

  const dispatch = createEventDispatcher();
  let size: number;
  let grid: string[] = [];
  let found: string[] = [];
  let remaining: number = 0;
  let duration: number = 0;
  let playing: boolean = false;

  export function startGame(level: Level) {
    size = level.size;
    grid = createGrid(level);
    remaining = duration = level.duration;

    resume();
  }

  function resume() {
    playing = true;
    countDown();

    dispatch('play');
  }
  function createGrid(level: Level) {
    const copy = level.emojis.slice();
    const pairs: string[] = [];

    for (let i = 0; i < level.size ** 2 / 2; i += 1) {
      const index = Math.floor(Math.random() * copy.length);
      const emoji = copy[index];

      copy.splice(index, 1);
      pairs.push(emoji);
    }

    pairs.push(...pairs);
    shuffle;
    return shuffle(pairs);
  }

  function countDown() {
    const start = Date.now();
    let remaining_at_start = remaining;
    function loop() {
      if (!playing) return;
      requestAnimationFrame(loop);
      remaining = remaining_at_start - (Date.now() - start);

      if (remaining <= 0) {
        console.log("time's up");
        dispatch('lose');
        playing = false;
      }
    }
    loop();
  }
</script>

<div class="game" style="--size: {size}">
  <div class="game-info">
    {#if playing}
      <CountDown
        {remaining}
        {duration}
        on:click={() => {
          console.log('clicked');
          playing = false;
          dispatch('pause');
        }}
      />
    {/if}
  </div>
  <div class="grid-container"></div>
  <div class="game-grid">
    <Grid
      {grid}
      on:found={(e) => {
        found = [...found, e.detail.emoji];
        if (found.length === (size * size) / 2) {
          console.log('you win');
          dispatch('win');
        }
      }}
      {found}
    />
  </div>
  <div class="game-info">
    <Found {found} />
  </div>
</div>

<style>
  .game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: min(1vmin, 0.5rem);
  }

  .game-info {
    width: 80em;
    height: 10em;
    /* background-color: purple; */
  }

  .game-grid {
    width: 80em;
    height: 80em;
    /* background-color: teal; */
  }
</style>
