const breadBtn = document.getElementById("bread-btn");
const sideNav = document.getElementById("sideNav");
const sideNavSpace = document.getElementById("sideNavSpace");

breadBtn.addEventListener('click', () => {
    sideNav.style.left = '0%'
})

sideNavSpace.addEventListener("click", () => {
	sideNav.style.left = "-200%";
});