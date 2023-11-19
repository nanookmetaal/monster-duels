abstract class State {
  protected context: Context;

  public setContext(context: Context) {
      this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

class ConcreteStateA extends State {
  public handle1(): void {
      console.log('ConcreteStateA handles request1.');
      console.log('ConcreteStateA wants to change the state of the context.');
      this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
      console.log('ConcreteStateA handles request2.');
  }
}

class ConcreteStateB extends State {
  public handle1(): void {
      console.log('ConcreteStateB handles request1.');
  }

  public handle2(): void {
      console.log('ConcreteStateB handles request2.');
      console.log('ConcreteStateB wants to change the state of the context.');
      this.context.transitionTo(new ConcreteStateA());
  }
}