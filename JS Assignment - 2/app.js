// Chapter 21 to 25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var fname = prompt('Enter your First Name');
var lname = prompt('Enter your Last Name');
var fullName = fname +" "+ lname

document.write('Greetings '+ fullName) 
document.write("<br><br>")


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var mob = prompt('Enter your Favourite Phone:');

document.write('My Favourite Phone is : '+ mob+'<br>')
document.write('String Length : '+ mob.length) 
document.write("<br><br>")

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var myStr = "Pakistan"
document.write("String:"+ myStr+ "<br> Index of n :"+ myStr.indexOf('n'))
document.write("<br><br>")

// 4.Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var hello = "Hello World";
document.write("String:"+ hello+ "<br> Last Index of l : "+ hello.lastIndexOf('l'))
document.write("<br><br>")

// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

document.write("String:"+ myStr+ "<br> Character at 3rd Index : "+ myStr.charAt(3))
document.write("<br><br>")

// 6. Repeat Q1 using string concat() method.

var firstname = prompt('Enter your First Name');
var lastname = prompt('Enter your Last Name');
var fullName = firstname.concat(lastname)
document.write('Greetings '+ fullName) 
document.write("<br><br>")

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city1 = "Hyderabad";
var city2 = "Islam" + city1.slice(5);
document.write("City:"+city1)
document.write("<br>After Replacement:"+city2)
document.write("<br><br>")

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together."
var result = message.replace(/and/g,"&")
document.write("BEFORE : "+message)
document.write("<br>AFTER : "+result)
document.write("<br><br>")

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var Str = "472";
document.write("Value: "+Str)
document.write("<br>Type: "+typeof(Str))
var myNum = parseInt(Str)
document.write("<br>Value: "+myNum)
document.write("<br>Type: "+typeof(myNum))
document.write("<br><br>")


// 10. Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter Something:");
document.write("User input :" + userInput);
document.write("<br>Upper Case :" +userInput.toUpperCase())
document.write("<br><br>")

//11. Write a program that takes user input. Convert and show the input in title case.
var user = prompt("Enter Something:");
document.write("User input :" + user);
var firstLetter = user.slice(0,1).toUpperCase();
var last = user.slice(1).toLowerCase();
var res = firstLetter+last;
document.write("<br>Title Case :" +res)
document.write("<br><br>")

// 12. Write a program that converts the variable num to string.

var numb = 35.36 ;
document.write("Number : " +numb)
document.write("<br>Result : " + numb.toString())
document.write("<br><br>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64








// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

		var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var input = prompt("Welcome to bakery! What do you want to order");
    var flag = 0;

        for (i = 0; i <= bakkeryItems.length; i++) {
            if (bakkeryItems[i] === input) {
                flag = 1;
                document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
            }
        }

        if (flag == 0) {
            document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
        }


        document.write("<br>" + "<br>");


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.






// 16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser.

var university = "University of Karachi";
var arr = university.split('');

for(var i =0 ; i<arr.length;i++){
	document.write(arr[i]);
	document.write("<br>")
}

// document.write("<br>" + "<br>");


// 17. Write a program to display the last character of a user input.

var inp = prompt("Enter an input : ");
var lastCh = inp.split('')

document.write("User Input : " + inp);
document.write("<br>Last Character : " + lastCh[lastCh.length-1] )
document.write("<br>" + "<br>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string




// Chapter 26 to 30

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var myNumber = +prompt("Enter a Positive number:");
document.write("Number : "+ myNumber);
document.write("<br>Round Off : "+Math.round(myNumber));
document.write("<br>Floor Value : "+Math.floor(myNumber));
document.write("<br>Ceil Value : "+Math.ceil(myNumber));
document.write("<br>" + "<br>");

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var myNumb = +prompt("Enter a negative number:");
document.write("Number : "+ myNumb);
document.write("<br>Round Off : "+Math.round(myNumb));
document.write("<br>Floor Value : "+Math.floor(myNumb));
document.write("<br>Ceil Value : "+Math.ceil(myNumb));
document.write("<br>" + "<br>");

// 3. Write a program that displays the absolute value of a number.
 
 var InpNum = prompt("Enter a Number to get absolute value : ");
 document.write("Given Number : "+InpNum);
 document.write("<br>Absolute Value : " + Math.abs(InpNum))
 document.write("<br>" + "<br>");

 // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser:

 var dice = Math.random()*6
 var result =  Math.round(dice)
 document.write("Random Dice Value :" +result)

// 5- Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var toss = Math.random() * 2;
var decision = Math.floor(toss)

    if(decision==0){
        document.write(decision+"<br>")
        document.write("heads");
    }else{
      document.write(decision+"<br>")
        document.write("tails");
    }

//6- Write a program that shows a random number between 1 and 100 in your browser.

var RandomNumber = Math.random() * 100;
var RandomResult = Math.floor(RandomNumber)
document.write("RandomNumber b/w 1 and 100:"+RandomResult)

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 

var weight = prompt("Enter your Weight");
document.write("The weight of user is :" + weight.toString());

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretInput = +prompt("Enter a secret Number")

var secret = Math.floor(Math.random()*10);
if (secretInput==secret) {
  alert("Congratulations!")
}
else{
  alert("Better Luck Next Time")
}