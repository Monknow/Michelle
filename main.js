document.querySelector(".yes").addEventListener("click", function (e) {
	party.confetti(this);
});

const yesGif = document.querySelector(".yesGif");
const yesText = document.querySelector(".yesText");
const noGif = document.querySelector(".noGif");
const noText = document.querySelector(".noText");

const yesAudio = new Audio("./audios/correct-ding.mp3");
const noAudio = new Audio("./audios/incorrect-buzzer.mp3");
const booAudio = new Audio("./audios/boo.mp3");
const shimmyshimmyayshimmyayshimmyyaAudio = new Audio("./audios/shimmyshimmyayshimmyayshimmyya.mp3");

document.querySelector(".yes").addEventListener("click", function (e) {
	yesGif.classList.add("visible");
	yesText.classList.add("visible");

	noGif.classList.remove("visible");
	noText.classList.remove("visible");

	yesAudio.play();
	shimmyshimmyayshimmyayshimmyyaAudio.play();
	booAudio.pause();
});

document.querySelector(".no").addEventListener("click", function (e) {
	noGif.classList.add("visible");
	noText.classList.add("visible");

	yesGif.classList.remove("visible");
	yesText.classList.remove("visible");

	noAudio.play();
	booAudio.play();
	shimmyshimmyayshimmyayshimmyyaAudio.pause();
});
