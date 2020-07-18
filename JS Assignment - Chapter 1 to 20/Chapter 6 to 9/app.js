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

