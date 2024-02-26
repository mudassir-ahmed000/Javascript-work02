// CHAPTER # 04

var firstVariable = 10, secondVariable = "Hello", thirdVariable = true;
document.write("Variable 1:", firstVariable  + "<br>");
document.write("Variable 2:", secondVariable + "<br>");
document.write("Variable 3:", thirdVariable + "<br>");


// 

// 5 legal variables

// var myVariable = 10;
// var _myVariable = 10;
// var  anotherVariable123 = 10;
// var $specialVariable = 10;
// var camelCaseExample = 10;

// 5 illegal variables

// var 123variablee = 10;
// var illegal-variable = 10;
// var  my Variable = 10;
// var my-Variable = 10;
// var typeof = 10;


// 

document.write('<h1>Rule for naming JS variables</h1>' + "<br>" + "<br>")
document.write("Variables name only contain numbers , $ and _ . for example: $my_1stVariable" + "<br>")
document.write("Variable must begin with a letter , $ or _ . for example: $name , _name or name" + "<br>")
document.write("Variables name are case sensitive" + "<br>")
document.write("Variables names should not be JS keywords" + "<br>")



// CHAPTER # 05

var firstNum = 3;
var secondNum = 5;
var sum = firstNum + secondNum;
document.write("The sum of 3 and 5 is "+sum + "<br>");

var firstNum = 3;
var secondNum = 5;
var sum = firstNum - secondNum;
document.write("The difference of 3 and 5 is "+sum + "<br>");

var firstNum = 3;
var secondNum = 5;
var sum = firstNum * secondNum;
document.write("The product of 3 and 5 is "+sum + "<br>");

var firstNum = 3;
var secondNum = 5;
var sum = firstNum / secondNum;
document.write("The quotient of 3 and 5 is "+sum + "<br>");


var firstNum = 3;
var secondNum = 5;
var sum = firstNum % secondNum;
document.write("The modulus of 3 and 5 is "+sum + "<br>");

// 

var declare;
document.write("The value after variable declaration is "+declare + "<br>");
var declare = 5;
document.write("The value after variable initialization is "+declare + "<br>");
var increment = ++declare;
document.write("The value after increment is "+ increment + "<br>");
var add = increment + 7;
document.write("The value after addition is "+ add + "<br>");
var decrement = --add;
document.write("The value after decrement is "+ decrement + "<br>");
var divide = decrement % 3;
document.write("The remainder is "+ divide + "<br>");

// 

var price = 600;
var total = price * 5;
document.write("Total cost to buy six tickets to a movie is "+ total +"PKR" +"<br>");

// 

// take number input from the user
const number = 4;

// take range input from the user
const range = 10;

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    document.write(`${number} * ${i} = ${result}` + "<br>");
}

// 

var celsius = 25;
var farenheit = (celsius*9/5)+32;
document.write(celsius+"°C is "+ farenheit+" <br>");

var farenheit = 70;
var celsius = (farenheit-32)*5/9;
document.write(farenheit+"°F is "+ celsius+"°C <br>");

// 

var price1 = 650;
document.write("price of item 1 is " + price1 + "<br>")
var quantity1 = 3;
document.write("quantity of item 1 is " + quantity1 + "<br>")
var price2 = 100;
document.write("price of item 2 is " + price2 + "<br>")
var quantity2 = 7;
document.write("quantity of item 2 is " + quantity2 + "<br>")
var shippingCharges = 100;
document.write("shipping charges are "+ shippingCharges + "<br>" )
var total = price1*3 + price2*7 + shippingCharges;
document.write("Total cost of your order is " + total + "<br>")


//


var USD = 10;
var riyals = 25;
var convert = 10*104.80 + 25*28;
var total = convert;
document.write( "Total currency in PKR "+ total + "<br>")


// 

var num = 2;
var arithmetic = (((num+5) *10) /2);
document.write("The answer is "  + arithmetic + "<br>");

// 

var currentYear = 2024;
document.write("Currnt Year : " + currentYear + "<br>");
var birthYear = 2006;
document.write("Birth year : " + birthYear + "<br>");
var age = currentYear - birthYear;
document.write("your age is "+ age + "<br>");

// 

var radius = 20;
document.write("Radius of a circle : " + radius + "<br>")
var circumference = 2*3.142*radius;
document.write("The circumference of a circle is "+ circumference + "<br>");


//  CHAPTER # 06


var a = 10;
document.write("result:" + "<br>" + "The value of a is " + a + "<br>" )

var a = 10;
var a = ++a;
document.write("The value of ++a is " + a +"<br>");
document.write("Now the value of a is " + a +"<br>");

var a = 11;
var a = a++;
document.write("The value of a++ is " + a +"<br>");
document.write("Now the value of a is 12" + "<br>");

var a = 12;
var a = --a;
document.write("The value of --a is " + a +"<br>");
document.write("Now the value of a is " + a +"<br>");

var a = 11;
var a = a--;
document.write("The value of a-- is " + a +"<br>");
document.write("Now the value of a is 10" + "<br>");

// 



var a = 2 , b = 1;
document.write(--a + "<br>");
document.write(--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b-- + "<br>");
var result = --a - --b + ++b + b--;
document.write(result + "<br>");


// 

// var userName = prompt("enter your name");


 // Prompt the user for input
// var tableNum = prompt("Enter a table number");

 // Convert user input to a number or use default (5) if not provided
//  var defaultNum = tableNum ? parseInt(tableNum) : 5;

 // Display the multiplication table in the browser
//  document.write("<h2>Multiplication Table of " + defaultNum + "</h2>");
//  for (let i = 1; i <= 10; i++) {
//    document.write(defaultNum + " x " + i + " = " + (defaultNum * i) + "<br>");
//  }


//  

var firstSubject = prompt("Enter first subject name")
var secondSubject = prompt("Enter second subject name")
var thirdSubject = prompt("Enter third subject name")
var totalMarks = 100;
var obtained1 = +prompt("Enter obtained marks of " + firstSubject);
var obtained2 = +prompt("Enter obtained marks of " + secondSubject);
var obtained3 = +prompt("Enter obtained marks of " + thirdSubject);
var percentage1 = (obtained1/totalMarks)*100 , percentage2 = (obtained2/totalMarks)*100 , percentage3 = (obtained3/totalMarks)*100 ;
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + firstSubject + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>" + percentage1 + "</td></tr>");
document.write("<tr><td>" + secondSubject + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>" + percentage2 + "</td></tr>");
document.write("<tr><td>" + thirdSubject + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>" + percentage3 + "</td></tr>");


