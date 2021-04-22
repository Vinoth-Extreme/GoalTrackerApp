const firstLoader = document.getElementById("firstLoader");
const progressbar = document.getElementById("progressbar");
let currWidth = 0;
let x = setInterval(() => {
	currWidth += 20;
	progressbar.style.width = currWidth + "%";
	if (currWidth === 100) {
		clearInterval(x);
		firstLoader.style.left = "-200%";
	}
}, 1500);
