// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

var date = new Date();
var month = date.getMonth() + 1; //+1 because months start at 0
var day = date.getDate();
var year = date.getFullYear();

//add leading zeros to month and day
if(month < 10){
    month = "0" + month;
}

if(day < 10){
    day = "0" + day;
}

document.getElementById("dateOutput").textContent = 
    "Today is " + month + "/" + day + "/" + year;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

var value1 = "50";
var value2 = "25.25";
var value3 = "bye";
var value4 = "100";

var number1 = Number(value1);
var number2 = Number(value2);
var number3 = Number(value3);
var number4 = Number(value4);

var check1NaN = Number.isNaN(number1);
var check1Int = Number.isInteger(number1);
var check2NaN = Number.isNaN(number2);
var check2Int = Number.isInteger(number2);
var check3NaN = Number.isNaN(number3);
var check3Int = Number.isInteger(number3);
var check4NaN = Number.isNaN(number4);
var check4Int = Number.isInteger(number4);

var sentence1 = "Original value: '" + value1 + "' -> Converted: " + number1 + " -> isNaN: " + check1NaN + " -> isInteger: " + check1Int;
var sentence2 = "Original value: '" + value2 + "' -> Converted: " + number2 + " -> isNaN: " + check2NaN + " -> isInteger: " + check2Int;
var sentence3 = "Original value: '" + value3 + "' -> Converted: " + number3 + " -> isNaN: " + check3NaN + " -> isInteger: " + check3Int;
var sentence4 = "Original value: '" + value4 + "' -> Converted: " + number4 + " -> isNaN: " + check4NaN + " -> isInteger: " + check4Int;

var output = sentence1 + "<br>" + sentence2 + "<br>" + sentence3 + "<br>" + sentence4;

document.getElementById("numberConversionOutput").innerHTML = output;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)