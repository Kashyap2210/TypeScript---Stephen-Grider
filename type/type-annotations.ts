// TYPE ANNOTATIONS + TYPE INFERENCES

// Type Annotations
// - Code we add to tell TS what type of value a variable will refer to. Like Interfaces. We as developers tell TS what type is this value

// Type Inference
// - TS automatically tries to figure out what type of value a variable refers to. TS guesses the type onn its own.

// : number is type annotation.
let apples: number = 5;
// Type Annotation tells TS that we will only ever assign the value of apples with type of number

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null; // value is same as the name of the type. Same happens for undefined.
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
// in the above code when we declare type by string[] that doesnt define the value as array.
// We just tell TS that this variable colors will hold a value that will be an ARRAY & all the element inside will be string

let myNumbers: number[] = [1, 333, 54];

let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
// let point: Record<string, number> = {
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
// In functions we only care about what type of values are going to go in the function & what are the values that we expect in return from the function
const logNumber: (i: number) => void = (i: number) => {
  //(i: number) => void --> is not a functioon its description of the type of the function
  console.log(i);
};

// Now in the above code we had no need to add type annotations because TS on its own understands what might be the type of value of variables.
// The above process is called Type Inference. Now we will use Type Inference as much as possible & only add type annotations in the places where the type might get really complex.

// Now in the above code if we remove the type annotations we still get the same type when we hover on the variable. This is Type Inference in action.

// When to rely on Type Inference & when on Type Annotations?

// Type inference will not work for the color as it will show any
let color;
color = "red";

// We rely on Type Inference only when the Variable Declaration && Initialization is on the same line.

// So we use Type Annotations when:
// - We declare a variable on one line then initialize it later
// - When we want a variable to have a type that can't be inferred
// - When a function returns the "any" type & we need to clarify the value
const json = '{"x": 10, "y": 20}';

// const coordinates= JSON.parse(json); --> coordinates here has any type
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log("coordinates", coordinates);

// So anytime we call JSON.parse() we get the type any. Because anything can be stored as stringand when we parse that string of anything we can get ANYthing.

// - So any is just a type, just like string, boolean
// - It means that TS has no idea what this is - cant check for correct property references
// - Avoid variables with 'any' at all costs
// So when the return type is any TS cannot do any checking regarding that type. So we can write
// coordinates.ssssssssssssssssss;
// and see how even though "ssssssssssssssssss" method does not exists on coordinates we dont get an error.

// Hence we need to add type annotation for coordinates.
// After adding type annotation we get error on
// coordinates.ssssssssssssssssss as we have now defined the type

// WE SHOULD RELY ON TYPE INFERENCE AS MUCH AS POSSIBLE
