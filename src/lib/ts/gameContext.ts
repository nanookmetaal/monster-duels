import { ActiveGameState } from './gameState';
import { Player } from './player';
import type { GameState } from './gameState';

export class GameContext {
	private state: GameState;
	private player: Player;

	constructor() {
		this.state = new ActiveGameState();
		this.player = new Player('hero');
	}

	setState(state: GameState) {
		this.state = state;
	}

	handleInput(input: string) {
		this.state.handleInput(this, input);
	}

	update() {
		this.state.update(this);
	}
}
