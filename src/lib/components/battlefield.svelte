<script lang="ts">
  import type { Duellist } from '$lib/ts';
  import type { BattleAction } from '$lib/ts/battleAction';
  import DuellistPanel from './duellistPanel.svelte';
  import FightMap from './fightMap.svelte';

  export let player: Duellist;
  export let battleArray: BattleAction[];
  export let enemy: Duellist;
  export let advanceEvent: Function;
</script>

<div class="battlefield">
  <div id="player-stats" class="duellist-screen player-stats">
    <DuellistPanel character={player} />
  </div>

  <div id="attack-selector" class=battle-array>
    <!-- battle field component goes here -->
    <FightMap battleArray={battleArray} onSomeEvent={advanceEvent}></FightMap>
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

  .battle-array {
    display: flex;
  }
</style>
