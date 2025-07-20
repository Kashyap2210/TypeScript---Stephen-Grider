// ARRAYS

/* 

// Definition

Typed arrays are arrays where each element is some consistent type of value

We can do all the things that we can do with a normal array.

Generally in an array in TS we keep the elements that are consistent in type. For eg if we have a string[] that means all the elements in the array will be string only.

*/

// Example

const carMakers: string[] = ["ford", "toyota", "checy"];

/* 

There will be times when we need to put type annotations on an array.
During that time we initialize the array as an empty array.
If annotations is not there then the type will be any which we want to minimize as much as possible.
Hence, we always initialize it with the type.

*/

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];
const carsByMakeU: string[][] = [];
// This will accept only the string arrays. so you can only push string arrays in carByMakeU

// WHY DO WE CARE ABOUT TYPED ARRAYS?
// - TS can do type inference for us. so if we access an element from index for an array of string then TS knows that the element will be a string and gives us full access to the methods of the strings.
const carElement = carsByMake[0][0];
console.log("typeof carElement", typeof carElement); // <-- string
console.log("carElement", carElement.toUpperCase()); // <-- this is allowed because TS knows that carElement is going to be string

// - TS can prevent us from pushing any incompatible values to the array
// @ts-ignore
carsByMake.push(100); // <-- this gives errro because carsByMake is of the type string[][] so only string array can be pushed. See below is the correct format
carsByMake.push(["100"]);

// We can get help with 'map', 'forEach', 'reduce' functions
for (const car of carMakers) {
  console.log("car", car);
  console.log(carMakers.map((maker) => console.log(maker)));
}

// FLEXIBLE - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
// Everytime we want to add multiple types to array then we will have to manually add the types using the pipe(|) operator
// TS can also infer the multiple types if while declaring the value of the array we have added multiple types.

importantDates.push("string");
importantDates.push(new Date());
// @ts-ignore
importantDates.push(2); // <-- This will give error

// IF WE DONT PUT ANNOTATIONS IN AN EMPTY ARRAY THEN WE ONLY GET AN ARRAY WITH TYPE OF "any[]"

// WHEN TO USE TYPED-ARRAYS?
// - We use typed-array when we need to represent a collection of records with some arbitrary sort order. For eg. data of user pulled from db, array of number[] for userIds


