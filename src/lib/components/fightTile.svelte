<script lang="ts">
  export let radioSelection: number;
  export let isActive: boolean;
</script>

<div id="fight-step" class="fight-step">
  {#if isActive}
    <input type="radio" class="radio-button" bind:group={radioSelection} value="1" />
  {:else}
    <input type="radio" class="hidden" bind:group={radioSelection} value="1" />
  {/if}

  {#if isActive}
    <input type="radio" class="radio-button" bind:group={radioSelection} value="2" />
  {:else}
    <input type="radio" class="hidden" bind:group={radioSelection} value="2" />
  {/if}

  {#if isActive}
    <input type="radio" class="radio-button" bind:group={radioSelection} value="3" />
  {:else}
    <input type="radio" class="hidden" bind:group={radioSelection} value="3" />
  {/if}
</div>

<style>
  .fight-step {
    display: flex;
    flex-direction: column;
  }

  .radio-button {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0.4em;
  }
  .hidden {
    visibility: hidden;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0.4em;
  }
</style>
