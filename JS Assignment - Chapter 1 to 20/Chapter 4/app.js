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

	var 1name;
	var my-name;
	var my name;
	var break;
	var 1234;


	// 3. Display this in your browser
	// a) A heading stating “Rules for naming JS variables”
	// b) Variable names can only contain ______, ______,
	// ______ and ______.For example $my_1stVariable
	// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
	// d) Variable names are case _________
	// e) Variable names should not be JS _________


	var pageHeading = "Rules for naming JS variables";
	document.write("<h1>"+pageHeading+"</h1>"+ "<p>Variable names can only contain numbers, $ and _.For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For example $name, _name or name! <br>Variable names are case sensitive <br>Variable names should not be JS keywords</p>");