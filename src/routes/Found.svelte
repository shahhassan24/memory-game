<script lang="ts">
  import { getEmojiUrl } from "./utils";
  import { receive } from "./transitons";

      export let found: string[];

</script>

<div class="found">
      <!-- <h1>All the emojis here {found}</h1> -->
      {#each found as emoji}
      <div class="pair">
        <img 
        in:receive={{key:`${emoji}:a`}}
        alt={emoji} src={getEmojiUrl(emoji)}/>
        <img 
        in:receive={{key:`${emoji}:b`}}
        alt={emoji} src={getEmojiUrl(emoji)}/>
      </div>
      {/each}
</div>


<style>
      .found{
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
      }

      img{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
      }

      .pair{
            width: 4em;
            height: 4em;
      }
</style>


