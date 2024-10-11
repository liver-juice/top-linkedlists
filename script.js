
let linkedList = () => {

    let headNode = null;
    let tailNode = null;
    let length = 0;

    // IF NODE.NEXTNODE === NULL; WE ARE AT THE END.

    let append = (value) => {
        // adds a new node containing value to the end of the list

        let newNode = new Node(value);
        
        if (headNode === null){
            // if the list is empty, insert it to the head.
            headNode = newNode;
            tailNode = newNode;
        }else{
            // else we assign it to the end;
            tailNode.nextNode = newNode;
            tailNode = newNode;
        }
        // increment counter
        length++;

        // if (node.nextNode === null) // MEANS ITS THE LAST IN LINE.
    }

    let prepend = (value) => {
        // adds a new node containing value to the start of the list

        // create the node
        let newNode = new Node(value);
        if (headNode === null){
            // conditional branch if the list happens to be empty.
            headNode = newNode;
            tailNode = newNode;
        }else{
            // reassign this new pointer to the (about to be old) headNode
            newNode.next = headNode;
            newNode = headNode
        }
        length++;
    }

    let size = () => {
        // returns the total number of nodes in the list
        return length;
        // return the counter.
    }

    let head = () => {
        // returns the first node in the list
        return headNode;

    }

    let tail = () => {
        // returns the last node in the list
        return tailNode;

    }

    let at = (index) => {

        let currentNode = headNode;
        // increments for x many indexes in our array, each iteration checks for null. returns the index at the end.
        for (let i = 0; i < index; i++){
            if (currentNode === null){
                return null;
            }
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    let pop = () => {
        // removes the last element from the list

        if (headNode === null){
            // if the list is empty
            return null;
        }

        if (headNode.next === null){
            // if the list only has one node:
            let removedNode = headNode;
            headNode = null;
            tailNode = null;
            length--;
            return removedNode;
        }

        // traverse list, find second to last node
        let currentNode = headNode;
        while (currentNode.next.next !== null){
            currentNode = currentNode.next;
        }

        // set the tailnode to be the second to last node.
        let removedNode = currentNode.next;
        currentNode.next = null;
        tailNode = currentNode;
        length--;

        return removedNode;
    }

    let contains = (value) => {
        // returns true if the passed in value is in the list and otherwise returns false.
        let currentNode = headNode;
        for (let i = 0; i < length; i++){
            if (currentNode.value === value){
                return true;
            }
            // we keep it movin
            currentNode = currentNode.next;
        }
        return false;
    }

    let find = (value) => {
        // returns the index of the node containing value, or null if not found.
        let counter = 0;
        let currentNode = headNode;

        if (currentNode.value === value){
            return counter;
        }

        while (currentNode !== null){
            if (currentNode.value === value){
                return counter;
            }
            currentNode = currentNode.next;
            counter++;
        }

        return null;
    }

    let toString = () => {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null

        let strang = '';
        let currentNode = headNode;

        while (currentNode !== null){
            strang += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        strang += 'null'; //slap the null on the end.
        return strang;
    }


    return {append, prepend, size, head, tail, at, pop, contains, find, toString};
}

let Node = (value=null, nextNode=null) => {

    return {value, nextNode};
}


// let linkedlist = new LinkedList;
// let newNode = new Node(value=watermelons);
// linkedlist.append(newNode);