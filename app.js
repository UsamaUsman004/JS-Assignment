
	// Chapter1

	// 1. Write a script to greet your website visitor using JS alert box
	alert("Greetings");

	// 2. Write a script to display following message on your web page
	alert("Error! Please enter a valid password.");

	// 3. Write a script to display following message on your web page: (Hint : Use line break)
	alert('Welcome to JS Land...\nHappy Coding');


	// 4. Write a script to display following messages in sequence: 
	alert('Welcome to JS Land...');
	alert('Happy Coding! \n Prevent this page from creating additional dialogs');



	// 5. Generate the following message through browser’s developer console: 
	console.log('Hello! I run this through browser console');


	// 6. Make use of alerts in your new/existing HTML & CSS project. 



	/*
	7. Practice placement of script tag element in following sections of your project in exercise 6:
	 a. Head 
	 b. Body (before your page’s HTML) 
	 c. Body (inside your page’s HTML) d. Body (after your page’s HTML) */

	// Chapter 2

	// 1. Declare a variable called username.
	var userName;


	// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
	var myName = 'Muhammad Osama';


	/*3. Write script to 
	a) Declare a JS variable, titled message. 
	b) Assign “Hello World” to variable message 
	c) Display the message in alert box*/

	var message = 'Hello World';
	alert(message);

	// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes:

	var stdName='Muhammad Osama';
	var age = '21 years';
	var Course = 'Saylani Web Mobile Hybrid Development';

	alert(stdName);
	alert(age);
	alert(Course);


	// 5. Write a script to display the following alert using one JS variable:

	var demo = "Pizza \nPizz\nPiz\nPi\nP";
	alert(demo);


	// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

	var email = 'uusman004@gmail.com';
	alert('My Email is '+email);



	// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
	var book = "A smarter way to learn JavaScript";
	alert('I am trying to learn from the book '+book);
	
	// 8. Write a script to display this in browser through JS
	document.write("Yah ! I can write HTML through JavaScript");


	// 9. Store following string in a variable and show in alert and browser through JS
	var myPattern = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
	alert(myPattern);


// CHAPTER - 3

	// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
	var age = 21;
	alert('I am '+age+' years old');

	// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
	var times = 21;
	alert('You have visited this site '+times+' times');


	// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
	var birthYear = 1999;
	document.write("My birth year is " +birthYear + " <br>Data type of my declared variable is number");


	// 4. A visitor visits an online clothing store www.xyzClothing.com .Write a script to store in variables the following information: 
	// a. Visitor’s name 
	// b. Product title 
	// c. Quantity i.e. 
	// how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

	var VisitorName = "<b>Muhammad Osama</b>";
	var ProductTitle = "<b>Hand Wash</b>";
	var Quantity = "<b>3</b>";


	document.write(VisitorName+" ordered "+Quantity+ " "+ ProductTitle +"(s) on XYZ Clothing store")

			// Chapter 4


	// 1. Declare 3 variables in one statement
	var name = "Osama",FName = "Usman",	age = 21;

	// 2. Declare 5 legal & 5 illegal variable names.

	// legal variables

	var name;
	var father_name;
	var _age;
	var myVar;
	var $name;

	// Illegal variables

	// var 1name;
	// var my-name;
	// var my name;
	// var break;
	// var 1234;


	// 3. Display this in your browser
	// a) A heading stating “Rules for naming JS variables”
	// b) Variable names can only contain ______, ______,
	// ______ and ______.For example $my_1stVariable
	// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
	// d) Variable names are case _________
	// e) Variable names should not be JS _________


	var pageHeading = "Rules for naming JS variables";
	document.write("<h1>"+pageHeading+"</h1>"+ "<p>Variable names can only contain numbers, $ and _.For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For example $name, _name or name! <br>Variable names are case sensitive <br>Variable names should not be JS keywords</p>");

// Chapter 5 


	var Var1 = 5;
	var Var2 = 3 ;
	document.write("Sum of "+Var1+" and " + Var2 +" is " +(Var1+Var2));

	// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

	document.write("<br>subtraction of "+Var1+" and " + Var2 +" is " +(Var1-Var2));
	document.write("<br>multiplication of "+Var1+" and " + Var2 +" is " +(Var1*Var2));
	document.write("<br>division of "+Var1+" and " + Var2 +" is " +(Var1/Var2));
	document.write("<br>modulus of "+Var1+" and " + Var2 +" is " +(Var1%Var2));




	// 3. Do the following using JS Mathematic Expressions 

	// a. Declare a variable. 
	// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
	// c. Initialize the variable with some number. 
	// d. Show the value of variable in your browser like “Initial value: 5”. 
	// e. Increment the variable. 
	// f. Show the value of variable in your browser like “Value after increment is: 6”. 
	// g. Add 7 to the variable. 
	// h. Show the value of variable in your browser like “Value after addition is: 13”. 
	// i. Decrement the variable. 
	// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
	// k. Show the remainder after dividing the variable’s value by 3.  
	// l. Output : “The remainder is : 0”


	var myVar;

	document.write("Value after variable declaration is: "+myVar);
	myVar = 5;
	document.write("<br>Initial value: "+myVar);
	myVar++;
	document.write("<br>Value after increment is : "+myVar);

	myVar = myVar+7;
	document.write("<br>Value after addition is: "+myVar);

	myVar--;
	document.write("<br>Value after decrement is : "+myVar);

	myVar = myVar%3;
	document.write("<br>The remainder is  : "+myVar);



	// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 

	var movieTicket = 600;
	document.write("The price of 5 tickets is " +(movieTicket*5)+"PKR");

	// 5. Write a script to display multiplication table of any number in your browser. 

	var table = 4

	document.write(	"Table of "+table+ "<br>"+table + " x 1 = ",(table*1)+"<br>" + 
					table+ " x 2 = ",(table*2)+"<br>"+ 
					table+ " x 3 = ",(table*3)+"<br>"+
					table+ " x 4 = ",(table*4)+"<br>"+
					table+ " x 5 = ",(table*5)+"<br>"+
					table+ " x 6 = ",(table*6)+"<br>"+
					table+ " x 7 = ",(table*7)+"<br>"+
					table+ " x 8 = ",(table*8)+"<br>"+
					table+ " x 9 = ",(table*9)+"<br>"+
					table+ " x 10 = ",(table*10))



	// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
	var Celcius = 25;
	var farenhiet = 70;

	var convertCelcius = (farenhiet-32)*(5/9);
	var convertFarenhiet = (Celcius*(9/5)+32)

	document.write(Celcius+" celcius is  equal to "+convertFarenhiet)
	document.write("<br>"+farenhiet+" farenhiet is  equal to "+convertCelcius)



	// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable


	var item1 = 650;
	var item2 = 100;
	var q1 = 3;
	var q2 = 7;
	var shipping = 100;

	var Total = ((item1*q1)+(item2*q2)+shipping);

	document.write("<br><br>Price of item1 is :"+item1 +"<br> Quantity of item1 is "+q1+"<br>Price of item2 is :"+item2 +"<br> Quantity of item2 is "+q2+"<br>shipping charges:"+shipping+"<br>")

	document.write("Total cost of your order is : "+Total); 


	// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

	var tMarks = 980;
	var mObt = 804;
	var percentage = (mObt/tMarks)*100;

	document.write("Total Marks : "+ tMarks +"<br>Marks obtained : "+mObt+"<br>Percentage is :" +percentage)


	// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

	var USD = 104.80;
	var Riyal = 28;

	var Total = (10*USD)+(25*Riyal)

	document.write("Total currency in PKR is : "+Total)


	// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
	// a. Add 5 
	// b. Multiply by 10 
	// c. Divide the result by 2 
	// Perform all calculations in a single expression


	var myNum = 1;

	myNum = (((myNum + 5) * (10)) / (2));
	document.write(myNum);


	// 11. The Age Calculator: Forgot how old someone is? Calculate it! 

	var cYear = 2020;
	var bYear = 1999;
	document.write("Your Age is : " +(cYear-bYear)+" years");


	// 12. The Geometrizer: Calculate properties of a circle.

	 var radius = 20;
	 var PI = 3.142;
	 var circumference = 2*PI*radius;
	 var area = PI * (radius*radius)
	 document.write("Radius :"+radius+"<br>Circumference : "+circumference+"<br>Area : "+area);

	 // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 

	 var snack = "Chocolate Chip";
	 var age = 15;
	 var max_age = 65;
	 var amount = 3;
	 var total = (max_age-age)*3;
	 document.write("favorite snack: "+snack + "<br>Current Age "+age + "<br> Estimated Age "+max_age +"<br>amount of snacks "+amount + "<br> You will need :"+total +" till age of " +max_age);


	 	 // Chapter 6 to 9

	 // Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

	 var a = 10;

	 document.write("Result: <br> The value of a is : "+a +"<br> ......................... <br><br>")

	 document.write("Now ,The value of ++a is : "+ ++a +"<br>");
	 document.write("The value of a is : "+ a +"<br><br>");
	 
	 document.write("The value of a++ is : "+ a++ +"<br>");
	 document.write("The value of a is : "+ a +"<br><br>");
	 
	 document.write("The value of --a is : "+ --a +"<br>");
	 document.write("The value of a is : "+ a +"<br><br>");
	 
	 document.write("The value of a-- is : "+ a-- +"<br>")
	 document.write("The value of a is : "+ a +"<br><br>");


	 // 2. What will be the output in variables a, b & result after execution of the following script:

	var a = 2, b = 1;
	var result = --a - --b + ++b + b--;

	// // --a;	1
	// // --a - --b;	(1-0)
	// // --a - --b + ++b;	(1-0+1)
	// // --a - --b + ++b + b--; 	(1-0+1+1)

	document.write("a is : "+a +"<br>b is : "+b +"<br>Result is :" +result)


	// 3. Write a program that takes input a name from user & greet the user.

	var person = prompt("Enter your Name:");
	document.write("Welcome " +person);


	// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

	var table = prompt("Enter your required Table :",5);

	document.write(	"Table of "+table+ "<br>"+table + " x 1 = ",(table*1)+"<br>" + 
					table+ " x 2 = ",(table*2)+"<br>"+ 
					table+ " x 3 = ",(table*3)+"<br>"+
					table+ " x 4 = ",(table*4)+"<br>"+
					table+ " x 5 = ",(table*5)+"<br>"+
					table+ " x 6 = ",(table*6)+"<br>"+
					table+ " x 7 = ",(table*7)+"<br>"+
					table+ " x 8 = ",(table*8)+"<br>"+
					table+ " x 9 = ",(table*9)+"<br>"+
					table+ " x 10 = ",(table*10))


	// 6-Marksheet
        document.write("<h3>" + "Marksheet" + "</h3>");

        // a) Take three subjects name from user and store them in 3 different variables. 
        subject1 = prompt("Enter Name of Subject 1: ");
        subject2 = prompt("Enter Name of Subject 2: ");
        subject3 = prompt("Enter Name of Subject 3: ");

        // b) Total marks for each subject is 100, store it in another variable.
        var totalMarks = 300;
        
        // c) Take obtained marks for first subject from user and stored it in different variable.
        subject1Marks = +prompt("Enter Marks of " + subject1);

        // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
        subject2Marks = +prompt("Enter Marks of " + subject2);
        subject3Marks = +prompt("Enter Marks of " + subject3);

        // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
        var percentage1 = (subject1Marks / 100) * 100;
        var percentage2 = (subject2Marks / 100) * 100;
        var percentage3 = (subject3Marks / 100) * 100;

        var obtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
        var percentage = (obtainedMarks / totalMarks) * 100;
        percentage = percentage.toFixed(3);
       

        document.write("<Table>");

            document.write("<tr>");
                document.write("<th>" + "Subject"  + "</th>");
                document.write("<th>" + "Total Marks"  + "</th>");
                document.write("<th>" + "Obtained Marks"  + "</th>");
                document.write("<th>" + "Percentage"  + "</th>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subject1  + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subject1Marks  + "</td>");
                document.write("<td>" + percentage1 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subject2  + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subject2Marks  + "</td>");
                document.write("<td>" + percentage2 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subject3 + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subject3Marks  + "</td>");
                document.write("<td>" + percentage3 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<th>" + "</th>");
                document.write("<th>" + totalMarks  + "</th>");
                document.write("<th>" + obtainedMarks  + "</th>");
                document.write("<th>" + percentage + "%" + "</th>");
            document.write("</tr>");


        document.write("</Table>");



				// Chapter 9-11


	// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

	var city = prompt("Enter your City Name:");

	if (city == "Karachi"){
		document.write("Welcome to city of lights");
	}

	else{
		document.write("Welcome to "+city);
	}

	document.write("<br><br>");


	// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am


	var gender = prompt("Enter your gender");

	if (gender == "female"){
		document.write("Good Morning Ma’am");
	}

	else{
		document.write("Good Morning Sir")
	}

	document.write("<br><br>");


	// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:


	var signal = prompt("Enter the signal color");

	if (signal=="red"){
		document.write("Must Stop");
	}

	else if (signal=="yellow") {
		document.write("Ready to Move");
	}
	else{
		document.write("Move Now");
	}

	document.write("<br><br>");


	// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 


	var fuel = prompt("Enter your remaining fuel: ");

	if (fuel< 0.25){
		document.write("Please refill the fuel in your car")
	}
	else{
		document.write("Save Journey")
	}

	document.write("<br><br>");


	// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. a. 

	var a = 4; 
	if (++a === 5)
		{ 
			alert("given condition for variable a is true"); 
		}

	var b = 82; 
	if (b++ === 83)
		{ 
			alert("given condition for variable b is true"); 
		} 

	var c = 12; 
	if (c++ === 13)
		{ 
			alert("condition 1 is true"); 
		} 

	if (c === 13)
		{ 
			alert("condition 2 is true"); 
		} 
	if (++c < 14){ 
		alert("condition 3 is true"); 
	} 
	if(c === 14)
		{ 
			alert("condition 4 is true"); 
		} 

	var materialCost = 20000; 
	var laborCost = 2000; 
	var totalCost = materialCost + laborCost; 

	if (totalCost === laborCost + materialCost)
	{ 
		alert("The cost equals"); 
	} 

	if (true)
		{ 
			alert("True"); 
		} 

	if (false)
		{ 
			alert("False"); 
		} 

	if("car" < "cat")
		{ 
			alert("car is smaller than cat"); 
		}


		document.write("<br><br>");


	// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:


		var obtainedMarks = +prompt("Enter Obtained Marks in three subjects: ");
        var totalMarks = +prompt("Enter total Marks: ");
        var percent = (obtainedMarks / totalMarks) * 100;

        document.write("<h3>" + "Mark Sheet" + "<h3>");
        document.write("Total Marks: " + totalMarks + "</br>");
        document.write("Marks Obtained: " + obtainedMarks + "</br>");
        document.write("Percentage: " + percent + "</br>");


	if (percent>=80){
		document.write("Grade : A1 <br>Remarks : Excellent");
	}

	else if (percent>=70){
		document.write("Grade : A <br>Remarks : Good");
	}

	else if (percent>=60){
		document.write("Grade : B <br>Remarks : You need to improve");
	}
	else{
		document.write("Grade : Fail <br>Remarks : Sorry");
	}


	document.write("<br><br>");


	// 7. Guess game


	var secret = prompt("Enter a number");

	var SecretNumber = 6;


	if (secret==SecretNumber){
		document.write("<br>Bingo! Correct answer");
	}

	else if (++secret == SecretNumber){
		document.write("<br>Close enough to the correct answer");
	}

	else{
		document.write("<br>better luck next time");
	}


	document.write("<br><br>");


	// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

	var divisible = prompt("Enter a number:");

	var result = divisible%3;

	if (result==0) {
		document.write("The number is divisible by 3")
	}
	else
	{
		document.write("The number is not divisible by 3")
	}


	document.write("<br><br>");


	// 9. Write a program that checks whether the given input is an even number or an odd number


	var value = prompt("Enter a Number")

	if (value%2 == 0){
		document.write("Even Number");
	}

	else{
		document.write("Odd Number");
	}


	document.write("<br><br>");


	//10. Write a program that takes temperature as input and shows a message based on following criteria

	var temp = prompt("Enter the Temperature:");

	if (temp>40){
		document.write("It is too hot outside")
	}
	else if (temp>30){
		document.write("The Weather today is Normal")
	}
	else if (temp>20){
		document.write("Today’s Weather is cool")
	}
	else{
		document.write("OMG! Today’s weather is so Cool");
	}


	document.write("<br><br>");


	// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user


		var a = +prompt("Enter First Number");
        var b = +prompt("Enter Second Number");
        var operation = prompt("Enter opertion you want to perform","+, -, *, /, %");
        var result;

        if(operation == "+")
        {
            result = a + b;
            document.write("The sum of" + " " + a + " " + "and"  + " " + b + " " + "is:"  + " " + result)
        }
        else if(operation == "-")
        {
            result = a - b;
            document.write("The subtraction of" + " " + a + " " + "and"  + " " + b + " " + "is:"  + " " + result)
        }
        else if(operation == "*")
        {
            result = a * b;
            document.write("The multiplication of" + " " + a + " " + "and"  + " " + b + " " + "is:"  + " " + result)
        }
        else if(operation == "/")
        {
            result = a / b;
            document.write("The division of" + " " + a + " " + "and"  + " " + b + " " + "is:"  + " " + result)
        }
        else if(operation == "%")
        {
            result = a % b;
            document.write("The reminder of" + " " + a + " " + "and"  + " " + b + " " + "is:"  + " " + result)
        }
        else
        {
            document.write("You enter wrong operation")
        }

        document.write("<br>" + "<br>");




	// Chap 12 -13

	// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter

	var char = prompt("Enter the character to check whether the given input is a number, uppercase letter or lower case letter.");
        char.charCodeAt(0);

        if (char >= 48 && char <= 57) {
            document.write("The given charecter is a number");
        }
        else if (char >= 65 && char <= 97) {
            document.write("The given charecter is a uppercaseleetr");
        }
        else if (char >= 97 && char <= 122) {
            document.write("The given charecter is a lowercaseletter");
        }


        document.write("<br>" + "<br>");



	// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal

	var num1 = prompt("Enter Number -1");

	var num2 = prompt("Enter Number -2");

	if (num1>num2){
		document.write(num1 +" is greater than " + num2)
	}

	else if (num2>num1){
		document.write(num2 +" is greater than " + num1)
	}

	else{
		document.write("Equal numbers")
	}

	document.write("<br>" + "<br>");



	// Write a program that takes input a number from user & state whether the number is positive, negative or zero


	var numb = prompt("Enter the Number:");

	if (numb>0){
		document.write("positive number")
	}

	else if (numb<0){
		document.write("negative number")
	}

	else{
		document.write("zero")
	}

	document.write("<br>" + "<br>");


	// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false 


	var alphabet = +prompt("Enter the alphabet to check it is vowel or not");

        if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" || alphabet == "A" || alphabet == "E" || alphabet == "I" || alphabet == "O" || alphabet == "U") {
            document.write("The given alphabet is vowel");
        }
        else {
            document.write("The given alphabet is not a vowel");
        }


	document.write("<br>" + "<br>");


	// password program


	var password = "Hello123@";

	var user_input = prompt("Please enter your password:");

	if (user_input=="") {
		document.write("Please enter your password")
	}

	else if (user_input===password){
		document.write("Correct password")
	}
	else{
		document.write("Please Enter your correct password")
	}


	document.write("<br>" + "<br>");


	// 6. This if/else statement does not work. Try to fix it: 
	var greeting; 
	var hour = 13; 
	if (hour < 18) 
		{ 
			greeting = "Good day"; }

	else {
		greeting ="Good evening"; 
	}

	document.write(greeting)

	document.write("<br>" + "<br>");


	// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statement

	var time = prompt("Enter the time:")

	if (time >="0000" && time < 1200){
		document.write("Good Morning");
	}

	else if (time>=1200 && time<1700){
		document.write("Good Afternoon");
	}
	else if (time>=1700 && time<2100){
		document.write("Good evening");
	}
	else{
		document.write("Good Night")
	}

	// CHAPTER 14 to 16


// 1. Declare an empty array using JS literal notation to store student names in future. 
        var  myArr = [];


        // // 2. Declare an empty array using JS object notation to store student names in future. 
        // var xyz = newArray();

	// // Declare and initialize a strings array

	var string_array;
	string_array = ['Muhammad','Osama'];

	// // 4.  Declare and initialize a numbers array. 

	var Numbers;
	Numbers = [1,2,3,4,5];


	// 5.  Declare and initialize a boolean array. 

	var Boolean_input;
	Boolean_input = [true,false];

	// // 6. Declare and initialize a mixed array.

	var mixed;
	mixed = [1,2,3,'Osama','Usman',true,false];

	//  // Declare and Initialize an array and store available education qualifications in Pakistan

	 var education = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']

	 document.write("Qualifications<br><br>"+education[0]+"<br>" +education[1]+"<br>"  +education[2]+"<br>" +education[3]+"<br>" +education[4]+"<br>" +education[5]+"<br>" +education[6]+"<br>" +education[7])


	 var student = ['Osama','Usman','Shahbaz'];
	 var marks = [480,470,450];
	 var total_marks = 500

	 document.write("<br>Score of "+student[0]+ " is "+marks[0] +". Percentage: "+((marks[0]/total_marks)*100)+"%")
	 document.write("<br>Score of "+student[1]+ " is "+marks[1] +". Percentage: "+((marks[1]/total_marks)*100)+"%")
	 document.write("<br>Score of "+student[2]+ " is "+marks[2] +". Percentage: "+((marks[2]/total_marks)*100)+"%")



	 var colors = ['red','blue','pink','yellow']

	 document.write("<br>"+colors)


	 var user_color = prompt(" what color you want to add to the beginning");

	 colors.unshift(user_color)
	 document.write("<br><br>"+colors)

	 var user_color1 = prompt(" what color you want to add to the end");

	 colors.push(user_color1)
	 document.write("<br><br>"+colors)

	 colors.unshift("green","black");
	 document.write("<br>"+colors);


	 

	 colors.shift()
	 document.write("<br>"+colors);

	 colors.pop()
	 document.write("<br>"+colors);


	 var position = prompt('Enter your desired Index');
	 var color_name = prompt("Enter color name");


	 colors.splice(position,0,color_name)

	 document.write("<br>"+colors)


	 var delete_position = prompt("Enter the position:")
	 var amount = prompt("How many colors you want to delete")

	 colors.splice(delete_position,amount)
	 document.write("<br>"+colors)


	 var scores = [230,120,520,420];

	 document.write("<br>Scores :"+scores);
	 document.write("<br>Sorted Scores : "+scores.sort());


	 var city = ['Karachi','Islamabad','Quetta','Peshawar','Lahore'];

	 var Selected = city.slice(1,4);

	 document.write("<br>"+city)
	 document.write("<br>"+Selected)


	 // Write a program to create a single string from the below mentioned array: 
	 var arr = ['This ', ' is ', ' my ', ' cat'];

	 arr_join = arr.join(' ');

	 document.write("Array : "+arr)
	 document.write("<br> Joined Array : "+arr_join)

	 var devices = ['Mouse','Keyboard','CPU','Printer'];

	 document.write("<br><br>Devices:<br>"+devices+"<br>")

	 document.write("<br>Out:<br>"+devices.shift())

	 document.write("<br>Out:<br>"+devices.shift())

	 document.write("<br>Out:<br>"+devices.shift())

	 document.write("<br>Out:<br>"+devices.shift())


	 var devices1 = ['Mouse','Keyboard','CPU','Printer'];

	 document.write("<br><br>Devices:<br>"+devices1+"<br>")

	 document.write("<br>Out:<br>"+devices1.pop())

	 document.write("<br>Out:<br>"+devices1.pop())

	 document.write("<br>Out:<br>"+devices1.pop())

	 document.write("<br>Out:<br>"+devices1.pop())




var myArray = ["Apple", "Samsung", "Nokia", "Motorolla", "Huawei"];

// var dropdown = document.getElementById("Phone");

// for (var i = 0; i < myArray.length; ++i) {
//     dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
// }



// CHAPTER 17 to 20

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
        var arr = [];


        // 2. Declare and initialize a multidimensional array representing the following matrix:
        var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


// // Write a program to print numeric counting from 1 to 10.

for(var i =1;i<11;i++){
	document.write("<br>"+i)
}


document.write("<br>")



var table_value = prompt("Enter Table Value");
var table_length = prompt("Enter Table length");


for (var i=1;i<=table_length;i++){
	document.write(table_value+" x " +i +" = " +(i*table_value)+"<br>")
}


// 5. Write a program to print items of the following array using for loop: 
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


for (var i=0;i<fruits.length;i++){
	document.write("<br>"+fruits[i])
}

for (var j=0;j<fruits.length;j++){
	document.write("<br> Element at "+j+" is "+fruits[j]);
}


document.write("<br><br>COUNTING:<br>")

for(var counting =1;counting<16;counting++){
	document.write(counting+",")
}


document.write("<br><br>REVERSE COUNTING:<br>")

for(var counting =16;counting>0;counting--){
	document.write(counting+",")
}


document.write("<br><br>EVEN COUNTING:<br>")

for(var counting =0;counting<16;counting+=2){
	document.write(counting+",")
}

document.write("<br><br>ODD COUNTING:<br>")

for(var counting =1;counting<16;counting+=2){
	document.write(counting+",")
}


document.write("<br><br>SERIES COUNTING:<br>")

for(var counting =2;counting<=20;counting+=2){
	document.write(counting+"K,")
}

document.write("<br><br><br>")



		// 7. You have an array 
        // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
        // Write a program to enable “search by user input” in an array. 
        // After searching, prompt the user whether the given item is found in the list or not. 
        var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
        var input = prompt("Welcome to bakery! What do you want to order");
        var flag = 0;

        for (i = 0; i <= bakkeryItems.length; i++) {
            if (bakkeryItems[i] == input) {
                flag = 1;
                document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
            }
        }

        if (flag == 0) {
            document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
        }


        document.write("<br>" + "<br>");


        // 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
        var a = [24, 53, 78, 91, 12];
        var largeNumber = a[0];

        for (i = 0; i < a.length; i++) {

            if (a[i] > largeNumber) {

                largeNumber = a[i];
            }
        }

        document.write("Array items: " + " " + a + "<br>");
        document.write("the largest no is : " + " " + largeNumber);


        document.write("<br>" + "<br>");



		var A = [24, 53, 78, 91, 12];
		var small =[]

		for (var z=0;z<A.length;z++){
			if (A[z]>A[z+1]){
				small=A[z+1]
			}
			else{
				small=A[z]
			}	
		}





document.write("<br> Smallest Number is"+small+"<br>")
// Write a program to print multiples of 5 ranging 1 to 100.



document.write("<br><br>MULTIPLES OF 5 <br>")

for(var counting =5;counting<=100;counting+=5){
	document.write(counting+",")
}





















 

























	

 





















