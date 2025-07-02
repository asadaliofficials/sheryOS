function updateTime() {
	const timeText = document.querySelector('.time-text');
	const dateText = document.querySelector('.date-text');

	const now = new Date();
	let hours = now.getHours();
	const minutes = now.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12;
	const formattedTime = `${addZero(hours)}:${addZero(minutes)} ${ampm}`;
	const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

	timeText.textContent = formattedTime;
	dateText.textContent = formattedDate;
}
function addZero(num) {
	return num < 10 ? '0' + num : num;
}
updateTime();
setInterval(updateTime, 1000);

document
	.querySelectorAll('.control-layout .sliders input[type="range"]')
	.forEach(function (slider) {
		const percentText = slider.parentElement.querySelector('p');

		function updateSlider() {
			const val = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

			slider.style.background = `linear-gradient(to right, #2196f3 ${val}%, #e0e0e0 ${val}%)`;

			if (percentText) percentText.textContent = `${Math.round(val)}%`;
		}

		updateSlider();

		slider.addEventListener('input', updateSlider);
	});

const time = document.querySelector('.time');
const calendar = document.querySelector('.calendar');

time.addEventListener('click', () => {
	calendar.classList.toggle('calendar--open');
});

const wifiSound = document.querySelector('.wifi-sound');
const controlLayout = document.querySelector('.control-layout');

document.addEventListener('click', function (e) {
	if (!controlLayout.contains(e.target) && !wifiSound.contains(e.target)) {
		controlLayout.classList.remove('control-layout--open');
	}
	if (!time.contains(e.target)) {
		calendar.classList.remove('calendar--open');
	}
	if (!startImg.contains(e.target) && !startBtn.contains(e.target)) {
		startImg.classList.remove('start-img--open');
	}
});

wifiSound.addEventListener('click', function (e) {
	controlLayout.classList.toggle('control-layout--open');
});

const startBtn = document.querySelector('.startButton');
const startImg = document.querySelector('.start-img');

startBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	startImg.classList.toggle('start-img--open');
	controlLayout.classList.remove('control-layout--open');
	document.getElementById('searchPanel').style.display = 'none';
	calendar.classList.remove('calendar--open');
});

const taskbar = document.querySelector('.taskbar');
taskbar.addEventListener('contextmenu', function (e) {
	e.preventDefault();
});
