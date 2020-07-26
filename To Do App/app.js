var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var listText = document.createTextNode(todo_item.value)
    li.setAttribute('class', 'list-group-item')
    li.appendChild(listText)

    // delete Button

    var delBtn = document.createElement("button");
    delBtn.setAttribute('class', 'btn btn-primary float-right ml-1');
    delBtn.setAttribute('onclick', 'deleteItem(this)');
    var icon = document.createElement("i");
    icon.setAttribute('class', 'fa fa-trash');
    icon.setAttribute('aria-hidden', 'true')

    delBtn.appendChild(icon);

    // edit btn

    var editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'btn btn-primary float-right ml-1');
    editBtn.setAttribute('onclick', 'editItem(this)');
    var editicon = document.createElement("i");
    editicon.setAttribute('class', 'fa fa-pencil-square-o');
    editicon.setAttribute('aria-hidden', 'true');

    editBtn.appendChild(editicon);
    delBtn.appendChild(icon);

    li.appendChild(delBtn);
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
}


function deleteItem(e) {
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = ""
}

function editItem(e){
	var val = e.parentNode.firstChild.nodeValue;
	var editValue = prompt("Enter the value",val);
	e.parentNode.firstChild.nodeValue = editValue;

}
