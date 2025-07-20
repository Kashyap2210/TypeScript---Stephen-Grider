// TUPLES
// - Tuples are very similar to arrays, but each element represents some property of a record
// - Tuple usually carries multiple different elements to represent a single thing.
// - In a tuple we mix & match elements with different types.

/*  

Assume we need to define a carbonated drink with multiple properties, so in JS we usually use objects, which in TS is called as Record, which will be line

*/

const carbonatedDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// So the same info as above can be stored in a tuple
const carbonatedDrinkTuple = ["brown", true, 40];

// Only dis-advantage here is the loss of information for the keys of carbonatedDrink

// A holistic way of doing the above thing will be

interface ICarbonatedDrink {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const carbonatedDrinkU: ICarbonatedDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const beverageShelf: ICarbonatedDrink[] = [carbonatedDrinkU];

// Benefits of interface are:
// - It doesnt care about order of the keys, in tuple we need to keep mainitaining the order of information.
// - All the beverages have basic 3 properties

// Now lets focus on tuples again
const pepsi = ["brown", true, 40]; // <- this is an array of  (string | number | boolean)[], which is actually a tuples, this is how tuples are represented

(pepsi[0] = 40), (pepsi[2] = "brown");

// above code is completely correct but we can use pepsi reilably in our code as it might destroy our app if the developer assumes that pepsi[0] will always be "brown"

const pepsiU: [string, boolean, number] = ["brown", true, 40];
//[string, boolean, number] when we do this we define that the array is always going to have a specific order

// we can also create a type alias for [string, boolean, number]
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 400];
const tea: Drink = ["brown", false, 400];

// We dont use tuples very much.

// WHY DO WE CARE & WHERE CAN WE USE TUPLES?
