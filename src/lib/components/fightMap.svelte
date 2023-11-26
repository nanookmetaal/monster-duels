<script lang="ts">
  import type { BattleAction } from '$lib/ts/battleAction';
  import Button from './button.svelte';
  import FightTile from './fightTile.svelte';

  export let battleArray: BattleAction[];
  export let onSomeEvent: Function;
</script>

<div class="main">
  <div id="fight-step">
    <div class="selector-panel">
      {#each battleArray as item}
        <FightTile radioSelection={item.selection} isActive={item.isActive} />
      {/each}
    </div>
  </div>

  <div id="button">
    <Button on:click={onSomeEvent()} symbol="End Move" bgColor="#794044" />
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .selector-panel {
    display: flex;
    border: 3px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
</style>
