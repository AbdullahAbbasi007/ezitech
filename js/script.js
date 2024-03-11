let btn = document.getElementById("fa-bars");
let nav = document.querySelector(".center-text");
btn.onclick = function () {
	if (nav.style.display != "none") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
};
