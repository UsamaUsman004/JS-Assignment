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


