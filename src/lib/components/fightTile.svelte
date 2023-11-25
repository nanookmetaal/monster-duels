<script lang="ts">
  let selection = 1;
</script>

<div id="fight-step" class="fight-step">
  <div class="selector-panel">
    <input type="radio" class="radio-button" bind:group={selection} value="1" />
    <input type="radio" class="radio-button" bind:group={selection} value="2" />
    <input type="radio" class="radio-button" bind:group={selection} value="3" />
  </div>
</div>

<style>
  .fight-step {
    display: flex;
    flex-direction: row;
  }

  .selector-panel {
    display: flex;
    flex-direction: column;
  }

  .radio-button {
    cursor: pointer;
  }
</style>
