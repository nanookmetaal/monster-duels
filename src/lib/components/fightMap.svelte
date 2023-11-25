<script lang="ts">
	let selection = 1;
  
</script>

<div id="fight-step" class="fight-step">
	<div class="selector-panel">
    {#each items as item}
    {/each}
	</div>
</div>

<style>
	.fight-step {
		display: flex;
		flex-direction: row;
	}

	.radio-button {
		cursor: pointer;
	}
</style>
