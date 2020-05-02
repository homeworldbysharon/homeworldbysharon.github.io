//navigation star//

function move(position) {
	let star = document.getElementById("star-box")
	star.style.top = position;

}

function worldsclicked() {
	move('588px');
}
document.getElementById("navworlds").onclick = worldsclicked;



function menuclicked() {
	move('608px');
}
document.getElementById("navmenu").onclick = menuclicked;


function aboutclicked() {
	move('628px');
}
document.getElementById("navabout").onclick = aboutclicked;

function homeclicked() {
	move('538px')
}
document.getElementById("navhome").onclick = homeclicked;


//show theme overlay//

function showimage() {
	let image = document.getElementById("theme");
	image.classList.toggle("hidden");
}
document.getElementById("theme").onmouseover = showimage;