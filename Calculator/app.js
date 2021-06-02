function getnum(num) {
    var result = document.getElementById('result');
    result.value += num;
}

function clearResult() {
    var result = document.getElementById('result');
    result.value = ""

}

function getResult() {
    var result = document.getElementById('result');
    result.value = eval(result.value);
}

function deleteVal() {
    var str= result.value;
	var newStr = str.substring(0, str.length - 1);
	result.value = newStr;
}