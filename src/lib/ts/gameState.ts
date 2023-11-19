import type { GameContext } from '$lib/ts/gameContext';

export interface GameState {
	handleInput(gameContext: GameContext, input: string): void;
	update(gameContext: GameContext): void;
}

export class ActiveGameState implements GameState {
	handleInput(gameContext: GameContext, input: string): void {
		if (input === 'GAME_OVER') {
			gameContext.setState(new GameOverState());
		}
		// Handle other inputs specific to the active game state
	}

	update(gameContext: GameContext): void {
		// Update game logic
		// If a condition for game over is met, change state
		if (gameContext) {
			gameContext.setState(new GameOverState());
		}
	}
}

export class GameOverState implements GameState {
	handleInput(gameContext: GameContext, input: string): void {
		// Handle inputs specific to the game over state
	}

	update(gameContext: GameContext): void {
		// Update logic specific to game over state
	}
}
