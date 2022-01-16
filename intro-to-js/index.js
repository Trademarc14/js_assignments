// This is a single line comment

/* Keep this on one line */

/*

over multiple lines

*/

/*****************************
 * This is the comment
 * Each line has an asterisk
 ****************************/

// string
console.log("Hello World");

let value = "Hello world.";
let other_value = 'The whole wide world';
let last_value = `This is a template string`;
console.log(value);

// Numbers

console.log(2 + 5.5);

let num = 2 + 5.5;
// (), [], {}
console.log(`num + 1 = ${ num + 1 }`);


let isOpen = false; // true

let isPublic = null; // = null
console.log(isPublic);

isPublic = true;
console.log(isPublic);

//let type = typeof null
console.log(typeof 45.2);


//CRUD
//Create, Read, Update, Delete.

let firstName = "Femi";
let lastName = "Adeleye";
let age = 35;

function getFullName() {
	return firstName + " " + lastName;
}

console.log(getFullName);


/*
"="
"+"
"-"
"*"
"/"
"**"
"%" // <---Remainder
"."
*/
