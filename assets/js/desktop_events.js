const customMenu = document.getElementById('customMenu');
const desktop = document.querySelector('.desktop');
import { addItem } from './data.js';
desktop.addEventListener('contextmenu', event => {
	event.preventDefault();

	const menuHeight = customMenu.offsetHeight;
	const menuWidth = customMenu.offsetWidth;
	const padding = 0; // space between pointer and menu

	let top = event.pageY + padding;
	let left = event.pageX;

	// Check if there's enough space below, else show above
	if (event.pageY + menuHeight + padding > window.innerHeight) {
		top = event.pageY - menuHeight - padding;
		if (top < 0) top = 0;
	}

	// Prevent menu from going off right edge
	if (left + menuWidth > window.innerWidth) {
		left = window.innerWidth - menuWidth - padding;
		if (left < 0) left = 0;
	}

	customMenu.style.top = `${top}px`;
	customMenu.style.left = `${left}px`;
	customMenu.style.display = 'block';
});

document.addEventListener('click', () => {
	customMenu.style.display = 'none';
});

document.querySelector('.refresh').addEventListener('click', e => {
	const desktop = document.querySelector('.desktop');
	desktop.style.display = 'none'; // Hide desktop
	setTimeout(() => {
		desktop.style.display = 'block'; // Show desktop after a short delay
	}, 100); // Adjust delay as needed
});

const backgroundImages = [
	'assets/images/BG.jpg',
	'assets/images/BG4.jpg',
	'assets/images/BG3.jpg',
	'assets/images/BG5.jpg',
];
let currentBGIndex = 0;
document.querySelector('.change-bg').addEventListener('click', () => {
	if (currentBGIndex >= backgroundImages.length - 1) {
		currentBGIndex = 0;
	} else {
		currentBGIndex++;
	}
	document.body.style.backgroundImage = `url(${backgroundImages[currentBGIndex]})`;
});

document.querySelector('.new-folder').addEventListener('click', async e => {
	// customMenu.style.display = 'none';
	setTimeout(() => {
		const folderName = prompt('Enter folder name:');
		if (folderName) {
			addItem(folderName, 'assets/images/folder.png', 'folder');
		}
	}, 100);
});
document.querySelector('.new-note').addEventListener('click', async e => {
	// customMenu.style.display = 'none';
	setTimeout(() => {
		const noteNmae = prompt('Enter note name:');
		if (noteNmae) {
			addItem(noteNmae, 'assets/images/note.png', 'note');
		}
	}, 100);
});
