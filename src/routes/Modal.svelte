<div class="modal-background">
  <div class="modal">
    <h1 class="game-heading">Memory Game</h1>
    <slot />
  </div>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    display: grid;
    place-items: center;
    z-index: 999;
  }
  .game-heading {
    text-align: center;
  }
</style>
