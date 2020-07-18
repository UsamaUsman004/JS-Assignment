// // Assignment # 38-42

// // 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function PowerFunction(base,power){
 return (base**power);
}
var num = +prompt('Enter the Number:');
var power = +prompt('Enter the power:');
alert( 'The power of '+ num + ' raised to '+power+ ' is: '+ PowerFunction(num,power));


// // 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

function leapyear(year) {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
var year = +prompt("Enter the year to check LeapYear:");
alert(leapyear(year));

// // 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by

function AreaOfTriangle(a, b, c) {

    function S(a, b, c) {
        return ((a + b + c) / 2)
    }

    var S = S(a, b, c);
    var area = S * (S - a) * (S - b) * (S - c);
    alert('Area of triangle = ' + area)
}

var a = +prompt('Enter the Value of A:');
var b = +prompt('Enter the Value of B:');
var c = +prompt('Enter the Value of C:');

AreaOfTriangle(a, b, c);


// // 4- Write a function that receives marks received by a student in 3 subjects and returns the average and percentage

function Result(subj1, subj2, subj3) {

    function percentage(subj1, subj2, subj3) {
        var total = 150;
        var obt = subj1 + subj2 + subj3;
        return ((obt / total) * 100);
    }

    function average(subj1, subj2, subj3) {
        return ((subj1 + subj2 + subj3) / 3);
    }

    var average = average(subj1, subj2, subj3);
    alert('Average = ' + average);

    var percentage = percentage(subj1, subj2, subj3);
    alert('Percentage = ' + percentage);
}

var english = +prompt('Enter English Marks out of 50  : ');
var urdu = +prompt('Enter Urdu Marks out of 50 : ');
var maths = +prompt('Enter Maths Marks out of 50 : ');
Result(english, urdu, maths);


// 5-You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

function indexOf(string, character) {
    let i = 0;
    while (i < string.length) {
        if (string[i] == character) { // yes? just return the index i
            return i
        }
        i++ // no? increase i and move on to next loop iteration
    }
    return 'Letter Not Found'; // made it through the loop and without returning. This means no match was found.
}

var myStr = prompt('Enter the String:');
var myChar = prompt('Enter the character whose index you want to find:');

alert('Index Position of ' + myChar + ' =' + indexOf(myStr, myChar))


// 6- Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

var string = "pakistan zindabad";

function deleteVowels(string){
 string = string.replace( /[aeiou]/g, '' );
 alert('After Removal Of Vowels from Strings = '+string);
}
deleteVowels(string);

// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

function findOccurrences(inputText) {
    var str = inputText;
    var res = str.match(/[aeiou]{2}/g);
    return res ? res.length : 0;
}
var myInput = prompt('Enter the Sentence to check Two Consecutive vowels:')
var found = findOccurrences(myInput);

alert('No of Occurances : ' + found);

// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

function meters(distance) {
    return distance * 1000;
}

function inches(distance) {
    return distance * 39370;
}

function feet(distance) {
    return distance * 3281;
}

function cm(distance) {
    return distance * 100000;
}
var km = +prompt('Enter the Distance b/w two cities in kilometer: ')

alert('Result in Meters = ' + meters(km) + '\n' + 'Result in Inches = ' + inches(km) + '\n' + 'Result in Feets = ' + feet(km) + '\n' + 'Result in centimeters = ' + cm(km));


// 9-Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours.

function OverTime(hours) {
    if (hours > 40) {
        var overtime = hours - 40;
        var overtimePay = 12 * overtime;
        alert('Overtime Payment = ' + overtimePay +'$');
    } else {
        alert('No overtime')
    }
}

var hours = +prompt('Enter your Working Hours');
OverTime(hours);

// 10 -A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

var InputCash = +prompt('Enter the Cash Amount');

function notes(cash){
 var hundreds = cash / 100;
 var fifty = (cash%100) / 50;
 var ten = ((cash%100)%50)/10;

 alert('Notes of hundreds = '+ ~~hundreds + '\nNotes of Fifty = '+ ~~fifty +'\nNotes of Ten = '+ten);
}
notes(InputCash);



// Chapter 43 to 48

function thanks() {
    alert('Thanks for purchasing phone from us');
}


function removeRow(myBtn) {
    var student = document.getElementById('students');
    student.deleteRow(myBtn.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}


var clicks = 0;

function minus() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function add() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}


// Assignment # 49-52


function info() {
    console.log('text')
    var FName = document.getElementById('inputFName').value;
    var LName = document.getElementById('inputLName').value;
    var email = document.getElementById('inputEmail').value;
    var address = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;
    var zip = document.getElementById('inputZip').value;

    document.getElementById('FullName').innerHTML = FName + LName;
    document.getElementById('Email').innerHTML = email;
    document.getElementById('Address').innerHTML = address + ',' + city + ',' + zip

}

function detail() {

    var detailed = "<p> Name : Dettol</p><p> Item ID : 101</p><ol><li>Kills Bacteria</li><li>Saves from Corona</li><li>Keeps pleasant smell</li></ol>";
    document.getElementById("details").innerHTML = detailed;

}