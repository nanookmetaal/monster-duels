import { describe, it, expect } from 'vitest';
import { Player } from '$lib/ts';

describe('Player test', () => {
	const testPlayer = new Player('TestPlayer');

	it('Can instantiate', () => {
		expect(testPlayer.name).toContain('TestPlayer');
	});

	it('Starts with 10 health', () => {
		expect(testPlayer.health).toEqual(10);
	});

	it('Can remove health', () => {
		testPlayer.removeHealth(2);
		expect(testPlayer.health).toEqual(8);
	});
});
