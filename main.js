document.querySelector(".yes").addEventListener("click", function (e) {
	party.confetti(this);
});

const yesGif = document.querySelector(".yesGif");
const yesText = document.querySelector(".yesText");
const noGif = document.querySelector(".noGif");
const noText = document.querySelector(".noText");

document.querySelector(".yes").addEventListener("click", function (e) {
	yesGif.classList.add("visible");
	yesText.classList.add("visible");

	noGif.classList.remove("visible");
	noText.classList.remove("visible");
});

document.querySelector(".no").addEventListener("click", function (e) {
	noGif.classList.add("visible");
	noText.classList.add("visible");

	yesGif.classList.remove("visible");
	yesText.classList.remove("visible");
});
