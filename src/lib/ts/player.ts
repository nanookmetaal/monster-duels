import { Duellist } from './duellist';

export class Player extends Duellist {
	constructor(name: string, attack: number, portraitPath: string) {
		super(name, attack, portraitPath);
	}
}
