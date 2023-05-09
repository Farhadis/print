
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




document.getElementById("flecheR").addEventListener("click", changeImage);
document.getElementById("flecheL").addEventListener("click", change);


let i = 0;

var myImage = document.getElementById("slide");

var myText = document.getElementById("texto");

const dots = document.querySelectorAll('.dot');


function changeImage(){
	if(i < slides.length-1)
	{
		i++;
	}
	else
	{
		i = 0;
	}
	
	var imgScr = "./assets/images/slideshow/" + slides[i].image;
	myImage.setAttribute("src", imgScr);

	myText.innerHTML = slides[i].tagLine;
	
	dots.forEach((dot, index) => {
		if (index === i) {
		  dot.classList.add('dot_selected');
		} else {
		  dot.classList.remove('dot_selected');
		}
	  });
}

function change(){
	if(i > 0)
	{
		i--;	
	}
	else
	{
		i = slides.length-1;	
	}

	var imgScr = "./assets/images/slideshow/" + slides[i].image;
	myImage.setAttribute("src", imgScr);
	
	myText.innerHTML = slides[i].tagLine;

    dots.forEach((dot, index) => {
      if (index === i) {
        dot.classList.add('dot_selected');
      } else {
        dot.classList.remove('dot_selected');
      }
    });

}
