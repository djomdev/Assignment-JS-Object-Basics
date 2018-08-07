/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/


// ++ YOUR CODE HERE



function fullNameArgsToObject(first, second, third){
	var name1 = first.split(" ");
	var name2 = second.split(" ");
	var name3 = third.split(" ");
	var objectNames = {}

		objectNames[name1[0]] = name1[1];
		objectNames[name2[0]] = name2[1];
		objectNames[name3[0]] = name3[1];

			return objectNames;
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: fullNameArgsToObject', 'background-color: green; color: white')
console.groupEnd();


var greatMenObj = fullNameArgsToObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = fullNameArgsToObject("Rosa Parks", "Amelia Earhart", "Frida Kahlo")
var greatAthletesObj =  fullNameArgsToObject("Cristiano Ronaldo", "Serena Williams", "Lebron James")


/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(typeof greatMenObj === "object")
console.assert(typeof greatWomenObj === "object")


/* ----------------------- TEST-2  ----------------------- */
// Function accepts 3 first+last names strings arguments, separated by space
//   returns object with 3 properties
//      each property is first name,
//      and property's value as the last name
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")


/* ----------------------- TEST-3  ----------------------- */
// Function accepts 3 first+last names strings arguments, separated by space
//   returns object with 3 properties
//      each property is first name,
//      and property's value as the last name
/* ------------------------------------------------------ */
console.log('TEST-3');

console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Amelia === "Earhart")
console.assert(greatWomenObj.Frida === "Kahlo")


/* ----------------------- TEST-4  ----------------------- */
// Function takes object w/ `color` property with value of 'red'
//   returns object with `color` property with value of 'blue'
/* ------------------------------------------------------ */
console.log('TEST-4');

console.assert(greatAthletesObj.Serena === "Williams")
console.assert(greatAthletesObj['Lebron'] === "James")
console.assert(greatAthletesObj['Cristiano'] === "Ronaldo")
