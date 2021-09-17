function changeColor() {
	// Generating the RGB values
	let newColor = "#";
	for(let i = 0; i < 3; i++) {
		newColor += (Math.floor(Math.random() * 256)).toString(16).padStart(2, "0");
	}

	document.body.style.background = newColor;

	document.getElementById("color").innerText = newColor;
}

window.onload = changeColor;