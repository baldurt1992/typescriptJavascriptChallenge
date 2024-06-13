class Nodes<T> {
  value: T;
  next: Nodes<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class TicketQueue<T> {
  private head: Nodes<T> | null;
  private tail: Nodes<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(person: T): void {
    const newNode = new Nodes(person);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue(): T | null {
    if (!this.head) {
      return null;
    }

    const person = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return person;
  }

  getSize(): number {
    let size = 0;
    let current = this.head;

    while (current) {
      size++;
      current = current.next;
    }

    return size;
  }

  getFront(): T | null {
    return this.head ? this.head.value : null;
  }

  getRear(): T | null {
    return this.tail ? this.tail.value : null;
  }
}

const ticketQueue = new TicketQueue<string>();
ticketQueue.enqueue("Persona 1");
ticketQueue.enqueue("Persona 2");
ticketQueue.enqueue("Persona 3");

console.log(ticketQueue.getSize());
console.log(ticketQueue.getFront());
console.log(ticketQueue.getRear());

const removedPerson = ticketQueue.dequeue();
console.log(removedPerson);
console.log(ticketQueue.getSize());
console.log(ticketQueue.getFront());
console.log(ticketQueue.getRear());
