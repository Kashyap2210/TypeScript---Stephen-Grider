/* 

-->Type Annotations On Functions
- Its the code we add to tell TS what type of arguments a function will receive & what type of values it will return

-->Type Inference for functions
- TS tries to figure out what type of value a function will return
Type inference only works around the return value of the function & not of the argument
 
*/

/*

-->Functions
- In functions we only care about what type of values are going to go in the function & what are the values that we expect in return from the function

const logNumberU: (i: number) => void = (i: number) => {
  //(i: number) => void --> is not a functioon its description of the type of the function
  console.log(i);
};

- In the above snippet the logNUmberU what is happening is that the type annotation that we have given is for the variable logNumberU & not for the function

*/

const add = (a: number, b: number) => {
  // if a , b both are numbers then return type with a+b will also be number
  return a + b;

  /* 
  console.log(); // will give below error
  // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)
 */
};

function divide(
  // here we have type annotated the arguments
  a: number,
  b: number
): // this is the return type of the function
number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  /* 
    Technically a function that has return type of void can return null or undefined
*/
};

const throwError = (message: string): never => {
  /* 
    Never signifies that we are never going to return anything from here and we will basically throw error from inside this function always
  */

  throw new Error(message);
};

// Destructuring with annotations
/* 
    We can also destructure the values from the arguments. See below example...
*/

const forecastForTheDay = {
  date: new Date(),
  weather: "sunny",
};

function forecast(forecastForTheDay: { date: Date; weather: string }) {
  console.log(
    `The weather on ${forecastForTheDay.date} will be ${forecastForTheDay.weather}`
  );
}
/* 
// Now the above function uses the forecastForTheDay as a parameter

// now what we can do is that we can deStructure in internal properties of a function in the arguments itself so that we dont have to type forecastForTheDay.date again and again

// We can do sometihing like below

*/

function forecastU(
  // Here we have destructured the variables date, weather in the argument itself
  { date, weather }: { date: Date; weather: string }
): void {
  console.log(`The weather on ${date} will be ${weather}`);
}
