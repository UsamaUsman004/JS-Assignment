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
