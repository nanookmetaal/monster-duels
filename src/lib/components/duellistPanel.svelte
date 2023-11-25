<script lang="ts">
  import type { Duellist } from '$lib/ts';

  // Props for character data
  export let character: Duellist;
</script>

<div class="character-card">
  <img
    class="character-image"
    src="./src/lib/assets/images/characters/{character.portraitPath}"
    alt={character.name}
  />
  <div class="character-info">
    <h2>{character.name}</h2>
    <p>Health: {character.health}</p>
    <p>Attack: {character.attack}</p>
  </div>
</div>

<style>
  .character-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    width: 200px;
  }

  .character-image {
    width: 100%;
    border-radius: 4px;
  }

  .character-info {
    margin-top: 10px;
  }
</style>
