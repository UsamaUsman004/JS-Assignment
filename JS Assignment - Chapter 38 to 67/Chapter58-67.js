// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element.
var q2 = document.getElementById('main-content').childNodes;
console.log(q2)

// iii. Get all elements of class “render” and show their innerHTML in browser.
for (var i = 1; i < 5; i++) {
    document.write(document.getElementsByClassName('content')[1].childNodes[i].innerHTML);
    document.write("<br>")
}

// iv. Fill input value whose element id first-name using javascript.
var fName = document.getElementById('first-name');
fName.innerHTML = 'Usama';

// v. Repeat part iv for id ”last-name” and “email”.

var lName = document.getElementById('last-name');
lName.innerHTML = 'Usman';

var em = document.getElementById('email');
em.innerHTML = 'Uusman004@gmail.com';

// i. What is node type of element having id “form-content”

var myNode = document.getElementById('form-content').nodeType;
alert('Node type = '+ myNode)

// ii. Show node type of element having id “lastName” and its child node.

var lastNode = document.getElementById('lastName');
alert('Element Node type = ' + lastNode.parentNode.nodeType + '\n childNode type = '+lastNode.nodeType) 

// iii. Update child node of element having id “lastName”
lastNode.innerHTML= 'Updated Text Name';

// iv. Get First and last child of id “main-content”.

var fChild = document.getElementById('main-content').firstChild;
var lChild = document.getElementById('main-content').lastChild;

// v. Get next and previous siblings of id “lastName”.

var nSibling = document.getElementById('lastName').nextSibling;
var pSibling = document.getElementById('lastName').previousSibling

// vi. Get parent node and node type of element having id “email”

var pId = document.getElementById('email').parentNode
var nType = document.getElementById('email').nodeType





