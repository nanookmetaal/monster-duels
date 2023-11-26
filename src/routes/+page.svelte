<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import Battlefield from '$lib/components/battlefield.svelte';
  import { Player } from '$lib/ts';
  import { Enemy } from '$lib/ts/enemy';
  import { AttackAction } from '$lib/ts/attackAction';
  import { DefenceAction } from '$lib/ts/defenceAction';
  import type { BattleAction } from '$lib/ts/battleAction';

  let gameActive = 0;
  const player = new Player('Romashin', 1, 'player.png');
  const enemy = new Enemy('Nazarkin', 1, 'enemy-1.png');

  // array of the battle action elements
  const battleArray: BattleAction[] = [
    new AttackAction('1'),
    new AttackAction('2'),
    new AttackAction('3'),
    new AttackAction('4'),
    new AttackAction('4'),
    new AttackAction('6'),
    new AttackAction('7'),
    new AttackAction('8'),
    new AttackAction('9'),
    new AttackAction('10'),
    new DefenceAction('10'),
    new DefenceAction('9'),
    new DefenceAction('8'),
    new DefenceAction('7'),
    new DefenceAction('6'),
    new DefenceAction('5'),
    new DefenceAction('4'),
    new DefenceAction('3'),
    new DefenceAction('2'),
    new DefenceAction('1')
  ];

  let currentMove: number = 0;

  function startGame() {
    battleArray[currentMove].isActive = true;
    battleArray[(battleArray.length - 1 - currentMove)].isActive = true;

    // change state to active game
    gameActive = 1;
  };

  function advanceGame(): void {
    if (currentMove < 9) {
      battleArray[currentMove].isActive = false;
      battleArray[(battleArray.length - 1 - currentMove)].isActive = false;
      currentMove++;
      battleArray[currentMove].isActive = true;
      battleArray[(battleArray.length - 1 - currentMove)].isActive = true;
      console.log(`current count: ${currentMove}`);
    }
    else {
      gameActive = 2;
    }
  };
</script>

<div id="main" class="main">
  <div id="title" class="center">
    <h1>Welcome to Monster Duels</h1>
  </div>

  {#if gameActive === 0}
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
  {:else if gameActive === 1}
    <div id="battlefield" class="center">
      <Battlefield {player} {battleArray} {enemy} advanceEvent={advanceGame}/>
    </div>
  {/if}
</div>

<style>
  .center {
    display: flex;
    max-width: 900px;
    font-family: 'Franklin Gothic Medium';
    margin: 10px;
    justify-content: center;
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
