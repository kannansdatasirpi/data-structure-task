//1 Declare a Integer Array

var arr1 = [50,60,65,90];
console.log(arr1);

//2 Print Sum of all elements in Array
	var arr = [4, 8, 7, 13, 12]
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	console.log("Sum is " + sum)

//3 Declare a Linked List with 5 to 10 data

class Node{
    constructor()
    {
        this.data=0;
        this.next=null;
    }
}
function printList(n)
{
    while(n !=null)
    {
        document.write(n.data + "")
        n = n.next;
    }
}

let head = null;
let second = null;
let third = null;
let fourth = null;
let fifth = null;

head = new Node();
second = new Node();
third = new Node();
fourth = new Node();
fifth = new Node();

head.data = 1;
head.next = second;

second.data = 2;
second.next = third;

third.data = 3;
third.next = fourth;

fourth.data = 4;
fourth.next = fifth;

fifth.data = 5;
fifth.next = null;

printList(head);

//4 Reverse the list with Stack
function Stack() {
    this.arr = [];
    this.top = 0;
  }
  
  Stack.prototype.push = function (val) {
    this.arr[this.top] = val;
    this.top = this.top + 1;
  }
  
  Stack.prototype.pop = function () {
    if (this.is_empty()) {
      throw new Error("Underflow, stack is empty");
    }
  
    var topEl = this.arr[this.top - 1];
  
    this.top = this.top - 1;
    this.arr.pop();
  
    return topEl;
  }
  
  Stack.prototype.is_empty = function () {
    return this.top === 0;
  }
  
  Stack.prototype.reverse = function () {
    if (this.is_empty()) {
      throw new Error("Underflow, stack is empty");
    }
  
    var revStr = '';
  
    for (var i = this.top - 1; i >= 0; i--) {
      revStr += this.arr[i];
    }
  
    return revStr;
  }
  
  
  var stack = new Stack();
  
  stack.push('a');
  stack.push('b');
  stack.push('c');
  
  console.log(stack.reverse()); // cba


//5 Pass the even index elements into Queue

let arr = [4,5,7,8,14,45,76];
function even(arr) {
    let ar = [];
    for(var i=0;i<arr.length;i++)
        if(arr[i]%2===0){
            ar.push(arr[i]);
            i++;
        }
        return ar;
}
console.log(even(arr));


//6 Create a Map and Pass the odd index elements in Map

        function odd(arr) {
            const result = arr.filter((value, i) => {
              if (i % 2 != 0) {
                if (value % 2 != 0) {
                  return value;
                }
              }
            })
            return result;
          }
          
          console.log(odd([1, 3, 5, 7, 9, 11]));


//7 Print Map, stack, queue, Linked List

//print stack
var stack = [];
stack.push(2);       
stack.push(5);       
var i = stack.pop(); 
alert(i);            

//print queue
var queue = [];
queue.push(2);         
queue.push(5);         
var i = queue.shift(); 
alert(i);

//print Map

let items = new Map();

items.set('s', 'kan');
items.set('k', 'ste');
items.set('g', 'vel');

console.log(items);



//8 Check the expression is valid or not using Stack

function isBalanced(str) {
  const stack = []
  
  for (let char of str) {
    if ( char === '(' ) {
      stack.push(char)
    } else if ( stack.pop() !== '(' ) {
      return false
    } 
  }
  
  return stack.length !== 0 ? false : true
}

// balanced
console.log( isBalanced('') )
console.log( isBalanced('()') )


// not balanced
console.log( isBalanced(' ') )
console.log( isBalanced('(') )
console.log( isBalanced(')') )



