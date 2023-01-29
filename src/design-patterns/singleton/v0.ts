// https://www.patterns.dev/posts/singleton-pattern/
// Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

let instance: Counter;
let counter: number = 0;

class Counter {
  constructor() {
    if (instance) throw new Error("Only one instance is allowed");
    instance = this;
  }
  getInstance() {
    return this;
  }
  getCounter() {
    return counter;
  }
  increment() {
    return ++counter;
  }
}

// The Object.freeze method makes sure that consuming code cannot modify the Singleton. Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
