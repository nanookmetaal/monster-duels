<script lang="ts">
  import type { Duellist } from '$lib/ts';
  import DuellistPanel from './duellistPanel.svelte';

  export let player: Duellist;
  export let enemy: Duellist;
</script>

<div class="battlefield">
  <div id="player-stats" class="duellist-screen player-stats">
    <DuellistPanel character={player} />
  </div>

  <div id="attack-selector">
    <!-- battle field component goes here -->
  </div>

  <div id="enemy-stats" class="duellist-screen">
    <DuellistPanel character={enemy} />
  </div>
</div>

<style>
  .battlefield {
    display: flex;
    background-color: rgb(224, 223, 223);
    flex-direction: row;
  }
</style>
