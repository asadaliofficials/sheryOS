const customMenu = document.getElementById('customMenu');
const desktop = document.querySelector('.desktop');
import { addItem } from './data.js';
desktop.addEventListener('contextmenu', event => {
	event.preventDefault();
	event.stopPropagation();

	// Show menu off-screen to measure its height
	customMenu.style.display = 'block';
	customMenu.style.top = '-9999px';
	customMenu.style.left = '-9999px';
	customMenu.innerHTML = `
        <ul>
            <li class="refresh">Refresh</li>
            <li class="new-folder">New Folder</li>
            <li class="new-note">New Note</li>
            <li>Settings</li>
            <li>Terminal</li>
            <li class="change-bg">Change Wallpaper</li>
            <li>About</li>
        </ul>
    `;

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

	// Attach event listeners after setting innerHTML
	customMenu.querySelector('.refresh').onclick = e => {
		const desktop = document.querySelector('.desktop');
		desktop.style.display = 'none'; // Hide desktop
		setTimeout(() => {
			desktop.style.display = 'block'; // Show desktop afte r a short delay
		}, 100); // Adjust delay as needed
	};

	customMenu.querySelector('.change-bg').onclick = () => {
		if (currentBGIndex >= backgroundImages.length - 1) {
			currentBGIndex = 0;
		} else {
			currentBGIndex++;
		}
		document.body.style.backgroundImage = `url(${backgroundImages[currentBGIndex]})`;
	};

	customMenu.querySelector('.new-folder').onclick = async e => {
		// customMenu.style.display = 'none';
		setTimeout(() => {
			const folderName = prompt('Enter folder name:');
			if (folderName) {
				addItem(folderName, 'assets/images/folder.png', 'folder');
			}
		}, 100);
	};
	customMenu.querySelector('.new-note').onclick = async e => {
		// customMenu.style.display = 'none';
		setTimeout(() => {
			const noteNmae = prompt('Enter note name:');
			if (noteNmae) {
				addItem(noteNmae, 'assets/images/note.png', 'note');
			}
		}, 100);
	};
});

document.addEventListener('click', () => {
	customMenu.style.display = 'none';
});

const backgroundImages = [
	'assets/images/BG.jpg',
	'assets/images/BG4.jpg',
	'assets/images/BG3.jpg',
	'assets/images/BG5.jpg',
];
let currentBGIndex = 1;
document.body.style.backgroundImage = `url(${backgroundImages[currentBGIndex]})`;
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
