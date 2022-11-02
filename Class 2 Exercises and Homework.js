// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const mySelf = {
  firstName : 'Tanzin',
  lastName : 'Rahman',
  'favorite food': 'Rice',
  bestFriend : {firstName: 'X', lastName: 'Y', 'favorite food': "Fish"}
};


// 2. console.log best friend's firstName and your favorite food

console.log(" My best Friend is: "+ mySelf.bestFriend.firstName +
"\n and  My Favorite food is: "+ mySelf['favorite food'] );

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

console.log("Creating the tic-tac-toe Array: ");

let arr = [
  ["-","O","-"],
  ["-","X","O"],
  ["X","-","X"]
]

for(let i=0; i<3; i++)
{
    console.log(arr[i].toString());
}

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

arr[0][2] = "0" // /update top right square

// 5. Log the grid to the console.

console.log("After updating the upper right square to 'O': ");
for(let i=0; i<3; i++)
{
    console.log(arr[i].toString());
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method 

// Reference of regular Expression of email varification: 
// https://brentmarquez.com/in-a-nutshell-series/regular-expressions-in-a-nutshell/


console.log("\nUsing Regular Expression to test validity of an Email");

const myEmail = 'tafheem_23@sust.edu.com';

const globalRegex = new RegExp('^[^0-9][_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$');

if (globalRegex.exec(myEmail)) {
  console.log(myEmail+": "+"This is a valid email ID");;
}
else{
  console.log(myEmail+": "+"This is NOT a valid email ID");;
}



// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

console.log("\nConverting string to date");

const date = '1/21/2019';

const assignmentDate = new Date(date);

console.log(assignmentDate.toLocaleDateString()); 

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
console.log("\nAfter adding 7 days to the Assignmentdate the due date will be: ");

const days = 7*24*60*60*1000;     // convert 7 days in milliseconds.
let duedate = new Date(assignmentDate.getTime() + days);
console.log(duedate.toLocaleDateString());

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
