// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// declare a function named divisibleBy3
const divisibleBy3 = (number % 3)=>{
  if (number is divisible by 3)
  return (the number, and text ", is divisible by three"")
  else if (the number is not divisble by 3)
  return (the number, and text ",is not divisible by three " )
}

// a) Create a test with expect statements for each of the variables provided.
var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"
describe("divisibleBy3",()=>{
  test("take number and decide if the number is evenly divisble by three or not")
    expect(divisibleBy3("yes")).toEqual({number}, is divisble by three)
    expect(divisibleBy3("no")).toEqual({number}, is not divisible by three)
// b) Create the function that makes the test pass.
const divisibleBy3 = (num % 3)=> {
  if(num === "yes"){
    return (`$`{num}, is divisble by three`)
  } else if (num === "no") {
    return (`$`{num},is not divisible by three')
  }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// declare a function named stringCap
    const stringCap = (array) => {
        // function should take in two arguments
        (array.upperCase()){
            //return
            expect(stringCap(array).upperCase()
        }
    }
// a) Create a test with expect statements for each of the variables provided.
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe("stringCap",()=>
{
  test('take two arrays of words and returns an array with all the words capitalized')=>
    {
        let array1 = "randomNouns1"
        let array2 = "randomNouns2"
        expect(stringCap(array1, array2)).upperCase()
      }

// b) Create the function that makes the test pass.
const stringCap = (array1, array2) =>
 {
    return (stringCap.upperCase())
    }
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// declare a function named firstVowel
    const firstVowel = (string) => {
// function should take in two arguments
      (string1.indexOf()){
            //return
            expect(firstVowel()).indexOf()
        }
    }
// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2
discribe("firstVowel",())=>{
  test('take in a string and log the index of the first vowel')=>{
    let string1 = "vowelTester1"
    let string2 = "vowelTester2"
    let string3 = "vowelTester3"
    expect(firstVowel(string)).indexOf(0 == "0"))
  }

}

// b) Create the function that makes the test pass.
const firstVowel = (vowelTester1, vowelTester2, vowelTester3)=>{
  returns (firstVowel(string1)).indexOf(1)=>
  {
    returns (firstVowel(string2))indexOf(0)=>
    returns (firstVowel(string3))indexOf(2)
  }
}
