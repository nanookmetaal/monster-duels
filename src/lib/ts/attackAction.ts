import { BattleAction } from './battleAction';

export class AttackAction extends BattleAction {
  constructor(id: string) {
    super(id, 0);
  }
}
