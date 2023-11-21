export abstract class Duellist {
	private _name: string;
	private _health: number;
	private _attack: number;
	private _portraitPath: string;

	constructor(name: string, attack: number, portraitPath: string) {
		this._health = 10;
		this._name = name;
		this._attack = attack;
		this._portraitPath = portraitPath;
	}
	public get name(): string {
		return this._name;
	}

	public get health(): number {
		return this._health;
	}

	public set attack(attack: number) {
		this._attack = attack;
	}

	public get attack(): number {
		return this._attack;
	}

	public get portraitPath(): string {
		return this._portraitPath;
	}

	public removeHealth(amount: number): number {
		this._health = this._health - amount;

		return this._health;
	}
}
