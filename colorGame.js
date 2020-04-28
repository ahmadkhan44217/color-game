var numBox = 6;
var color = generateRandomColors(numBox);
var resetButton = document.querySelector("#reset");
var box = document.querySelectorAll(".box");
var rgbDisplay = document.querySelector("#rgbDisplay")
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easy")
var hardbtn = document.querySelector("#hard")

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numBox = 3;
	color = generateRandomColors(numBox);
	//pick new main color
	colorPicked = randomArray(numBox);
	//change main color
	rgbDisplay.textContent = colorPicked
	//change colors
	for (var i = 0; i < 6; i++) {
		if(i<3){
			box[i].style.backgroundColor = color[i];	
		}else{
			box[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"
	resetButton.textContent = "NEW COLORS"
	message.textContent = " ";
})
hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numBox = 6;
	color = generateRandomColors(numBox);
	//pick new main color
	colorPicked = randomArray(numBox);
	//change main color
	rgbDisplay.textContent = colorPicked
	//change colors
	for (var i = 0; i < 6; i++) {
			box[i].style.backgroundColor = color[i];	
			box[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue"
	resetButton.textContent = "NEW COLORS"
	message.textContent = " ";
});

resetButton.addEventListener("click" , function(){
	//pick new colors
	color = generateRandomColors(numBox);
	//pick new main color
	colorPicked = randomArray(numBox);
	//change main color
	rgbDisplay.textContent = colorPicked
	//change colors
	for (var i = 0; i < box.length; i++) {
		box[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue"
	resetButton.textContent = "NEW COLORS"
	message.textContent = " ";
});

colorPicked = randomArray(numBox);
var colorClicked= " ";
rgbDisplay.textContent = colorPicked
for (var i = 0; i < box.length; i++) {
		box[i].style.backgroundColor = color[i];

		//adding click event listener
		box[i].addEventListener("click",function(){
			colorClicked = this.style.backgroundColor;
			//checking the click of user
			if (colorClicked === colorPicked) {
				message.textContent = "Correct!"
				resetButton.textContent = "TRY AGAIN?"
				sameColor();
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try again"
			}
		});

	}		 
function sameColor(){
	for (var k = 0; k < box.length; k++) {
		box[k].style.backgroundColor = colorPicked;
	}
	h1.style.backgroundColor = colorPicked
}

function randomArray(num){
	var random = Math.floor(Math.random() * num)
	return color[random];
}

function generateRandomColors(num){
var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
	          
 }