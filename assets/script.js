// document.getElementById("flecheL").addEventListener("click", function() {
// 	alert("Hello World!");
//   });

document.getElementById("flecheR").addEventListener("click", function() {
	alert("Hello World!");
  });



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


var myImage = document.getElementById("banner-img");
var imageArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4png"];
var imageIndex = 1;

function changeImage(){
	myImage.setAttribute("src", imageArray[imageIndex]);
	// imageIndex++;
	if (imageIndex > 3) {
		imageIndex + 0;
	}
}

// const tag = document.createElement("p");
// const text = document.createTextNode("Tirages haute définition grand format <span>pour vos bureaux et events</span>");
// tag.appendChild("text");

// const element = document.getElementById("banner");
// const child = document.getElementsByClassName("banner-text");
// element.appendChild(tag, child);




// test();
// function test() {
// 	document.getElementsByClassName("banner-text").innerText = "Tirages haute définition grand format <span>pour vos bureaux et events</span";
// }






