<script>
	import { Player } from '$lib/ts/player';
  import Button from '$lib/components/button.svelte';

	const player = new Player('Leo');

  function startGame() {
    player.name = 'test';
	}
</script>

<div id="main" class="main">
	<div id="title" class="center">
		<h1>Welcome to Monster Duels</h1>
	</div>

	<div id="greeting" class="center">
		<p>
			Greetings, {player.name}. You have been chosen to fight the forces of evil. It will not be
			easy. Many have been come before you and many more will follow. Begin your first fight when
			you are ready.
		</p>
	</div>

  <div id="battle-field" class="hrzn">
    <Button on:click={startGame} symbol='Start Game' bgColor={"#794044"}></Button>
  </div>
</div>

<style>
	.center {
		display: flex;
		max-width: 900px;
	}

	.main {
    display: flex;
		background-color: rgb(224, 223, 223);
		margin: 0;
		padding: 0;
		font-family: 'Franklin Gothic Medium';
		color: rgb(30, 71, 56);
    flex-direction: column;
		align-items: center;
	}
</style>
