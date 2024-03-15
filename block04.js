






console.log('------------------------------- Block 04 start -------------------')

// Ex 0 
const isTrue = (argument) => {
 if( argument == undefined || argument == ' ' || argument == false || argument == null || argument == 0) {
      return false
 }
 else{
   return true
 }
}
console.log('Ex 0:', isTrue("I exist!")) // true; 
console.log('Ex 0:', isTrue("")) // false; 

console.log('------------------------------------------------------------------')

// Ex 1
  const check_who_is_older = (name1, age1, name2, age2) => {

  if(age1 == age2) {
      return "they are of the same age"
   }

   if(age1 < age2) {
     return `${name2} age ${age2} is older than ${name1} age ${age1}`
   }
   else{
     return `${name1} age ${age1} is older than ${name2} age ${age2}`
   }
  } 
   console.log('Ex 1:', check_who_is_older("stefano", 27, "antonello", 35)) 
   console.log('Ex 1:', check_who_is_older("John", 57, "Peter", 95)) 

   console.log('------------------------------------------------------------------')

   // Ex 2
   // EMPTY

   console.log('------------------------------------------------------------------')

  // Ex 3
  // EMPTY

  console.log('------------------------------------------------------------------')

  // Ex 4
  function checker(text) {
    let commas = [];
    let question_marks = [];
    Array.from(text).forEach(char => {
        if (char === ',') {
            commas.push(char);
        } else if (char === '?') {
            question_marks.push(char);
        }
    });

    let result = `${commas.length} comma${commas.length !== 1 ? 's' : ''}, ${question_marks.length} question mark${question_marks.length !== 1 ? 's' : ''}`;
    return result;
}

console.log('Ex 4:', checker("Hello, how are you today? I am not bad and you?")); 
console.log('Ex 4:', checker("Do you like bananas?")); 

console.log('------------------------------------------------------------------')

// Ex 5
function howManyCaps(howMany) {
  let capitalLetters = howMany.match(/[A-Z]/g);
  let count = capitalLetters ? capitalLetters.length : 0;
  let letters = capitalLetters ? capitalLetters.join(',') : '';

  return `There are ${count} capitals and these are ${letters}`;
}

console.log('Ex 5:', howManyCaps("Antonello Sanna Likes videoGames")); 

console.log('------------------------------------------------------------------')

// Ex 6
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 7
function booleanChecker(boolean_array, maxCapacity) {
  let bools = [];

  boolean_array.forEach(item => {
      if (typeof item === 'boolean' && bools.length < maxCapacity) {
          bools.push(item);
      }
  });

  if (bools.length === 0) {
      return `0 booleans were found`;
  } else {
      let foundBooleans = bools.join(',');
      return `${bools.length} booleans were found ${foundBooleans}`;
  }
}

console.log('Ex 7:', booleanChecker(["12", "55", "hello"], 3)); 
console.log('Ex 7:', booleanChecker(["12", "55", true, false, true, true, true], 3)); 
console.log('Ex 7:', booleanChecker(["12", "55", true, false, true, true, true], 1));

console.log('------------------------------------------------------------------')

// Ex 8
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 9
// EMPTY

console.log('------------------------------------------------------------------')

// Ex 10
// EMPTY

console.log('------------------------------- Block 04 end -------------------')




