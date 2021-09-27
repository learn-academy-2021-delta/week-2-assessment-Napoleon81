// // ASSESSMENT 2: Coding practical questions with Jest
//
// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest
//
// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest
//
//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// // declare a function named divisibleBy3
  // a) Create a test with expect statements for each of the variables provided.
  var num1 = 15
  // Expected output: "15 is divisible by three"
  var num2 = 0
  // Expected output: "0 is divisible by three"
  var num3 = -7
  // Expected output: "-7 is not divisible by three"
describe("divisibleBy3",() =>{
    test("returns num1  divisible by three",()=>{
        expect(divisibleBy3(15)).toEqual(`15 is divisible by three`)
    })
    test("returns num1 divisible by three",()=>{
        expect(divisibleBy3(0)).toEqual(`0 is divisible by three`)
    })
    test("returns num1 is divisible by three",()=>{
        expect(divisibleBy3(-7)).toEqual(`-7 is not divisible by three`)
    })
// b) Create the function that makes the test pass.
let divisibleBy3=(num1)=>{
    if(num1%3===0){
        return `${num1} is divisible by 3`
    }return `${num1} is not divisible by 3`
}

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// // declare a function named stringCap
// a) Create a test with expect statements for each of the variables provided.
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

discribe(stringCap) = (array) => {
  test('take two arrays of words and returns an array with all the words capitalized'){
  }
    {
      let array1 = "randomNouns1"
        let array2 = "randomNouns2"
        expect(stringCap(array1, array2)).upperCase())
      }
// b) Create the function that makes the test pass.
const stringCap = (array1, array2) =>
 {
    return
    (stringCap.upperCase(""))
    }
}
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.
describe("determine if a string has a vawel",()=>{
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("learn")).toEqual(1)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("academy")).toEqual(0)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("challenges")).toEqual(2)
    })
    test("returns the index of the first index of a vawel in a string",()=>{
        expect(vawel("try")).toEqual("The string has no vawel")
    })
})
// b) Create the function that makes the test pass.
let vawel=(str)=>{
    let copy=str.toLowerCase()
    for(let i=0;i<copy.length;i++){
        if(!copy.includes('e')&& !copy.includes('a')&& !copy.includes('u') && !copy.includes('i')&&!copy.includes('o')){
           return "The string has no vawel"
        }
        else if(copy.charAt(i)==='e'||copy.charAt(i)==='a'||copy.charAt(i)==='u'||copy.charAt(i)==='i'||copy.charAt(i)==='e'||copy.charAt(i)==='o'){
          return i
        }
    }
}
