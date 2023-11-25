import { Duellist } from './duellist';

export class Enemy extends Duellist {
  constructor(name: string, attack: number, portraitPath: string) {
    super(name, attack, portraitPath);
  }
}
