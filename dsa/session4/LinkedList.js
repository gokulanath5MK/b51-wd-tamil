/*
    Arrays Vs Strings Vs Linked Lists
*/

// let numbers = [1, 2, 3, 4, 5];

// // console.log(numbers);

// // console.log(numbers[3]);

// numbers[1] = 20;

// console.log(numbers);

// let word = 'apple';

// // console.log(word[2]);

// // strings are immutable
// // word[1] = 'm';

// let char = 'm';
// let index = 1;


// word = word.slice(0, index) + char + word.slice(index + 1,);

// // console.log(word.slice(3, ));

// // console.log(word.slice(index+1, ));


// console.log(word);

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(3);

// let node2 = new Node(4);

// let node3 = new Node(5);

// node1.next = node2;

// node1.next.next = node3;

// console.log(node1);

/*
    node1 = Node {
        data: 3,
        next: Node {
            data: 4,
            next: null
        }
    }

    node2 = Node {
        data: 4,
        next: null
    }
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    // methodname: insertAtTail
    push(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // linked list is empty
            this.head = newNode;
        } else {
            // linked list is not empty
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next is null
            tail.next = newNode;
        }
    }

    length() {
        let nodes = 0;
        let tail = this.head;

        while (tail != null) {
            nodes++;
            tail = tail.next;
        }
        return nodes;
    }

    pop() {
        if (this.head != null) {
            if (this.head.next == null) {
                // list has only one node
                this.head = null;
            } else {
                let tail = this.head;

                while (tail.next.next != null) {
                    tail = tail.next;
                }

                tail.next = null;
            }
        }
    }

    unshift(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    shift() {
        this.head = this.head.next;
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(10);
list.push(11);
list.pop();

list.unshift(2);
list.unshift(1);

list.shift();
list.shift();
list.shift();

console.log(list.toArray());
console.log(list.length());

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: Node {
                        data: 6,
                        next: Node {
                            data: 10,
                            next: null
                        }
                    }
                }
            }
        }
    }

    step 1: create a new node

    newNode = Node {
        data: 2,
        next: null
    }

    step 2: assign list.head to newNode.next

    newNode = Node {
        data: 2,
        next: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: Node {
                        data: 6,
                        next: Node {
                            data: 10,
                            next: null
                        }
                    }
                }
            }
        }
    }

    step 3: assign the newNode to the list.head


    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: Node {
                        data: 5,
                        next: Node {
                            data: 6,
                            next: Node {
                                data: 10,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
*/

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: null,
                },
            }
        }
    }

    tail = Node {
        data: 4,
        next: Node {
            data: 5,
            next: null,
        },
    }

    newNode = Node {
        data: 5,
        next: null,
    }
*/