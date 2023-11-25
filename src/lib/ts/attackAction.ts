import { Action } from './action';

export class AttackAction extends Action {
  constructor(id: string) {
    super(id, 0);
  }
}
