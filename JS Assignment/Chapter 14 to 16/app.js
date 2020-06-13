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