var button = document.getElementById("result-button");

function choice() {
	//document.getElementById("mychoice").style.visibility = "visible";
	document
		.getElementById("mychoice")
		.setAttribute(
			"style",
			"font-size: 20px; font-style: italic; color:#ff0000; visibility:visible; text-decoration: none; "
		);
}

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var expo = document.getElementById("expo");
var mean = document.getElementById("mean");
var quit = document.getElementById("quit");

function run() {
	var inputArray = [];
	for (i = 1; i <= 2; i++) {
		input = parseInt(prompt("Enter the number"));
		if (isNaN(input) || input < 1 || input > 30) {
			alert("Please enter valid input");
			if ((window.alert = () => true)) {
				input = parseInt(prompt("Enter the number"));
				inputArray.push(input);
			}
		} else {
			inputArray.push(input);
		}
	}
}
