function colorChanger(color) {
	document.getElementById("color_box").style.backgroundColor = color; 

	/*originally did the switch statement below, but discovered the above technique, and it blew my mind!
	Especially in conjuction with 'this.id' in my html page
 
	switch(color) {
		case "red":
			document.getElementById("color_box").style.backgroundColor = "red";
			break;
		case "orange":
			document.getElementById("color_box").style.backgroundColor = "orange";
			break;
		case "yellow":
			document.getElementById("color_box").style.backgroundColor = "yellow";
			break;
		case "green":
			document.getElementById("color_box").style.backgroundColor = "green";
			break;
		case "blue":
			document.getElementById("color_box").style.backgroundColor = "blue";
			break;
		case "indigo":
			document.getElementById("color_box").style.backgroundColor = "indigo";
			break;
		case "violet":
			document.getElementById("color_box").style.backgroundColor = "violet";
			break; 
	}
*/
}