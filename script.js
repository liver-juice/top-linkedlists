// step 1: breathe. step 2: think. what the fuck are we doing here. 
// we have to create the functionaliy to make a linked list.
// we have to make the functionality to make new nodes in that linked list.
// we need the methods/algorithms to actually search through that linked list and access our data nodes.
// this is a linear data structure. linked lists, doubly linked, circular linked.\
// linked lists do not require a contiguous block in memory. each node is just sprinkled randomly within our ram sticks-
// because they can access eachother through pointers. 
// linked lists are an entry into more sophisticated data structures and traversals.
// a data structure is just an efficient way of storing data for a specific task.
// an object, array, variable, are all data structures.
// these structures sometimes hold millions of pieces of data, so efficient algorithms are necessary.
// we calculate an algorithms efficiency in time complexity, typically with Big O notation(most possible steps).
// something like a binary tree uses the divide and conquer technique, nodes can point to multiple nodes. O(log n);
// i assume a linked list is O(n), considering we must traverse the entire list starting at the head, calling the pointers to find our value.
// linked lists are not useful in javascript compared to other languages, and I dont remember why.
// objects that point to objects.

let linkedList = () => {

    let append = (value) => {
        // adds a new node containing value to the end of the list
        // create the node with value
        // our last node is given a pointer to this node.
    }

    let prepend = (value) => {
        // adds a new node containing value to the start of the list
        // create the node
        // give this node a pointer to the first node.
    }

    let size = () => {
        // returns the total number of nodes in the list

        // iterate through the nodes, incrementing a counter.
        // return the counter.
    }

    let head = () => {
        // returns the first node in the list
    }

    let tail = () => {
        // returns the last node in the list
    }

    let at = (index) => {
        // returns the node at the given index
        // iterate x indexes. return the node.
    }

    let pop = () => {
        // removes the last element from the list
        // iterates to the end. 
        // pops that bitch off
    }

    let contains = (value) => {
        // returns true if the passed in value is in the list and otherwise returns false.
        // iterate through the linked list.
        // if node.value === value
        // return true
        // else return false.
    }

    let find = (value) => {
        // returns the index of the node containing value, or null if not found.
        // iterate through the linked list incrementing a counter.
        // if node.value === value return counter.
        // else return null
    }

    let toString = () => {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }

    return {append, prepend, size, head, tail, at, pop, contains, find, toString};
}

let Node = (value=null, nextNode=null) => {
    
    return {};
}


// let linkedlist = new LinkedList;
// let newNode = new Node(value=watermelons);
// linkedlist.append(newNode);