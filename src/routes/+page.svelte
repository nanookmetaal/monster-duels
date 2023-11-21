<script>
	import Button from '$lib/components/button.svelte';
	import { Player } from '$lib/ts';

  let gameActive = false;
  const player = new Player('hero');

	function startGame() {
    // change state to active game
    gameActive = true;
	}
</script>

<div id="main" class="main">
	<div id="title" class="center">
		<h1>Welcome to Monster Duels</h1>
	</div>

  {#if !gameActive}
	<div id="greeting" class="center">
		<p>
			Greetings, {player.name}, you have been chosen to fight the forces of evil. It will not be
			easy. Many have been come before you and many more will follow. Begin your first fight when
			you are ready.
		</p>
	</div>

	<div id="battle-field" class="hrzn">
		<Button on:click={startGame} symbol="Start Game" bgColor={'#794044'} />
	</div>
  {:else}
	<div id="greeting" class="center">
		<p>
      <!-- battlefield component will go here -->
      Game Start
		</p>
	</div>
  {/if}
</div>

<style>
	.center {
		display: flex;
		max-width: 900px;
		font-family: 'Franklin Gothic Medium';
    margin: 10px;
	}

	.main {
		display: flex;
		background-color: rgb(224, 223, 223);
    height: 100vh;
		color: rgb(30, 71, 56);
		flex-direction: column;
		align-items: center;
	}
</style>
