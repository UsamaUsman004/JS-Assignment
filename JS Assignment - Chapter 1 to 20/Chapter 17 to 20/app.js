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