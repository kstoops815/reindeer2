var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for(var i = 0; i < colors.length; i++) {

	hohohoElement.innerHTML += (colors[i] + " " + reindeer[i] + "<br />");

	if(reindeer.length < colors.length) {
		reindeer.push(reindeer[i]);

	}
	
}