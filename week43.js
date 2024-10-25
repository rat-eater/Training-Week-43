// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);  
        let stars = '*'.repeat(2 * i - 1);    
        console.log(spaces + stars);
    }
    console.log(' '.repeat(height - 1) + 'x'); 
}

drawTree(5);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    
    for (let i = 1; i <= size; i++) {
        console.log('* '.repeat(i).trim());
    }
    
    for (let i = size - 1; i > 0; i--) {
        console.log('* '.repeat(i).trim());
    }
}

drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {
    const horizontalEdge = '+' + '-'.repeat(m) + '+';
    const middle = '|' + ' '.repeat(m) + '|';

    console.log(horizontalEdge); 
    for (let i = 0; i < n; i++) {
        console.log(middle);     
    }
    console.log(horizontalEdge); 
}

drawBox(2, 8);


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    let letters = {};
    word = word.toLowerCase().replace(/[^a-z]/g, ''); 

    for (let char of word) {
        if (letters[char]) return false; 
        letters[char] = true;
    }
    return true; 
}

console.log(isHeterogram("lamp"));    
console.log(isHeterogram("elephant")); 



/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
function areAnagrams(word1, word2) {
    let sorted1 = word1.toLowerCase().split('').sort().join(''); 
    let sorted2 = word2.toLowerCase().split('').sort().join(''); 

    return sorted1 === sorted2; 
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   