// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// Your answer: " D E L T A   2 0 2 1 node"
// b) Verify and explain:


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:"Hello, LEARN Student"
// b) Verify and explain:


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

 a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:


// --------------------4) What will this log?

//var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

 a) Your answer: 11, 13, 14, 15
// b) Verify and explain:


// --------------------5) What will this log?

 class Learn {
   constructor(name){
     this.student = name,
     this.cohort = "Delta",
     this.year = 2021
   }
 }
 var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
