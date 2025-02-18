
<script lang="ts">

  import { getEmojiUrl } from "./utils";
  import { send } from "./transitons";

    export let emoji :string;
    export let selected: boolean;
    export let found: boolean;
    export let group: 'a' | 'b';

</script>

<!-- This is Svelte’s class directive. It conditionally applies the flipped class to the element if selected is true.
selected is a prop passed to the Square component, and it’s true if a === i or b === i (i.e., the square is currently selected). -->
<div class="square" class:flipped={selected || found}>
    <!-- When you pass on:click={() => { ... }} from the parent, Svelte binds that logic to the click event of the <button> inside the Square component. -->
    <button on:click />
    <div class="background"></div>
    {#if !found}
        <img 
        out:send={{key:`${emoji}:${group}`}}
        alt={emoji} src={getEmojiUrl(emoji)}/>

    {/if}

 </div>

 <style>
    .square{
        display: flex;
        justify-content: center;
        align-items: center;

        transform-style: preserve-3d;
        transition: transform 0.4s;
    }

    .flipped {
        /* background: red; */
        transform: rotateY(180deg);
    }

    button{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: #eee;
        border: 0;
        border-radius: 1em;
        font-size: inherit;
    }


    .background{
        position: absolute;
        width: 100%;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        height: 100%;
        background: white;
        border-radius: 1em;
        border: 0.5em solid #eee;
    }

    img{
        width: 6em;
        height: 6em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    } 

 </style>

<!-- The on:click in your parent component dynamically injects the logic into the Square component’s internal DOM. 
 Svelte’s reactivity and efficient event handling ensure that everything stays synchronized and performant, 
 allowing you to focus on writing declarative, state-driven logic. -->