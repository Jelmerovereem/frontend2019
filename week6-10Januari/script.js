var scrollpos = window.pageYOffset;
var navigatiebar = document.querySelector("nav");
var zoekbalkNav = document.getElementById("zoekbalkNav");

function add_class_on_scroll() {
	navigatiebar.classList.add("solid-nav");
	zoekbalkNav.classList.add("zoekbalkShow");
}

function remove_class_on_scroll() {
	navigatiebar.classList.remove("solid-nav");
	zoekbalkNav.classList.remove("zoekbalkShow");
}

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;

	if (scrollpos > 100) {
		add_class_on_scroll();
	} else {
		remove_class_on_scroll();
	}
	console.log(scrollpos);
});

var hamburgerMenu = document.getElementById("hamburger");
var uitklapMenu = document.getElementById("menu");

function showmenu1() {
	uitklapMenu.classList.toggle("menu_show");
	navigatiebar.classList.toggle("solid-nav-instant");
	zoekbalkNav.classList.toggle("zoekbalkShow-instant");
}

hamburgerMenu.addEventListener('click', showmenu1);
