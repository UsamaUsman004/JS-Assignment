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
