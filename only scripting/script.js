/*
Assignment 2 ques 3
function isEven(x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

function find(arr, a) {
	for (i = 0; i < arr.length; i++) {
		val = a(arr[i]);
		return val;
	}
}

var myArray = [4, 5, 6, 7];
document.write(find(myArray, isEven));
*/
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
var obj = new Rectangle(4, 6);

function getArea(a, b) {
	area = a * b;
	return area;
}

getArea.prototype;
