// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }

let temperatureInFahrenheit = 35;
let temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
console.log("Temperature in Celsius:", temperatureInCelsius); 
// farToCel(1.6666666666666667)

// 2. Create a function that will calculate the average of numbers in an array.

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
  }

let numbers = [3, 9, 12, 18, 21];
let average = calculateAverage(numbers);
console.log("Average:", average);
// Average(12.6)

//  3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
let n = 24;
let x = 4;
let y = 6;

if (isDivisible(n, x, y)) {
  console.log(n + " is divisible by " + x + " and " + y);
} else {
  console.log(n + " is not divisible by " + x + " and " + y);
}
// (24 is divisible by 4 and 6)

// 4. Create a function that will output the first 100 prime numbers.

function generatePrimeNumbers(count) {
    const primeNumbers = [];
    var number = 20;
  
    while (primeNumbers.length < count) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
  
    return primeNumbers;
  }
  
  function isPrime(number) {
    if (number < 20) {
      return false;
    }
  
    for (var i = 20; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

var count = 100;
var primeNumbers = generatePrimeNumbers(count);
console.log("First", count, "prime numbers:", primeNumbers);
// First 100 prime numbers: 
//     (20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,
//     32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,
//     44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,
//     56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,
//     68,  69,  70,  71,  72,  73,  74,  75,  76,  77,  78,  79,
//     80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,  91,
//     92,  93,  94,  95,  96,  97,  98,  99, 100, 101, 102, 103,
//    104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
//    116, 117, 118, 119)

//  5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(number) {
    if (number < 5) {
      return false;
    }
  
    for (var i = 5; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  var number = 57;
  var isNumberPrime = isPrime(number);
  console.log(number + " is prime:", isNumberPrime);

// 57 is prime (true)

// 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
 
function getPositiveNumbers(numbers) {
    var positiveNumbers = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
      }
    }
  
    return positiveNumbers;
  }
  
  var number = [-5, 10, 0, -3, 8, -1, 4];
  var positiveNumbers = getPositiveNumbers(numbers);
  console.log("Positive numbers:", positiveNumbers);
// Positive numbers: [ 3, 9, 12, 18, 21 ]

//  7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


// 8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
  

  function generateHashtags(sentence) {
    var words = sentence.split(" ");
    var hashtags = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i].trim();
  
      if (word !== "") {
        var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        hashtags.push(capitalizedWord);
      }
    }
  
    return "#" + hashtags.join("");
  }
  
  var sentence = "The day is bright";
  var hashtag = generateHashtags(sentence);
  console.log("Hashtag:", hashtag);
// Hashtag (#TheDayIsBright)
  
