var scrollpos = window.pageYOffset;
var navigatiebar = document.querySelector("nav");
var zoekbalkNav = document.getElementById("zoekbalkNav");

/* Als je naar beneden scrollt wordt de navigatie bar zichtbaar */
window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;

	if (scrollpos > 100) {
			navigatiebar.classList.add("solid-nav");
	zoekbalkNav.classList.add("zoekbalkShow");
	} else {
			navigatiebar.classList.remove("solid-nav");
	zoekbalkNav.classList.remove("zoekbalkShow");
	}
	console.log(scrollpos);
});

var hamburgerMenu = document.getElementById("hamburger");
var uitklapMenu = document.getElementById("menu");

/* Als je op hamburger menu klikt, dan komt menu tevoorschijn */
function showmenu1() {
	uitklapMenu.classList.toggle("menu_show");
	navigatiebar.classList.toggle("solid-nav-instant");
	zoekbalkNav.classList.toggle("zoekbalkShow-instant");
}

hamburgerMenu.addEventListener('click', showmenu1);



var starwars = document.getElementById('SWButton');
var textarea = document.getElementById('textarea');
var heroimage = document.querySelector('.licensePage>main>section:nth-child(2)');
var title = document.querySelector('.licensePage>main>section:nth-child(2)>h1');
var body = document.querySelector('body');

function StarWarsMode() {
/*heroimage.style.background = "url(img/starwars.jpg)";*/
heroimage.style.cssText = "background-image: url(img/starwars.jpg); background-size: contain;";
title.style.cssText = " font-style: italic;"
title.innerHTML = '"Do or do not. There is no try."';
document.getElementById('Myaudio').play();
}

starwars.addEventListener('click', StarWarsMode);

function reset() {
	window.location.reload();
}

heroimage.addEventListener('click', reset);
