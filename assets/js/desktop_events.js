import {
	clipboardItem,
	clipboardAction,
	clipboardSourceId,
	setClipboard,
	clearClipboard,
} from './js-codes.js';
import { deleteItemById } from './data.js';
const customMenu = document.getElementById('customMenu');
const desktop = document.querySelector('.desktop');
import { addItem } from './data.js';
import { createNewWindow } from './desktop.js';
import { desktopItems } from './data.js';
import createDesktop from './desktop.js';
desktop.addEventListener('contextmenu', event => {
	event.preventDefault();
	event.stopPropagation();

	customMenu.style.display = 'block';
	customMenu.style.top = '-9999px';
	customMenu.style.left = '-9999px';
	customMenu.innerHTML = `
        <ul>
            <li class="refresh">Refresh</li>
            <li class="paste">Paste</li>
            <li class="new-folder">New Folder</li>
            <li class="new-note">New Note</li>
            <li class="terminal">Terminal</li>
            <li class="change-bg">Change Wallpaper</li>
            <li class='about'>About</li>
        </ul>
    `;

	const menuHeight = customMenu.offsetHeight;
	const menuWidth = customMenu.offsetWidth;
	const padding = 0;

	let top = event.pageY + padding;
	let left = event.pageX;

	if (event.pageY + menuHeight + padding > window.innerHeight) {
		top = event.pageY - menuHeight - padding;
		if (top < 0) top = 0;
	}

	if (left + menuWidth > window.innerWidth) {
		left = window.innerWidth - menuWidth - padding;
		if (left < 0) left = 0;
	}

	customMenu.style.top = `${top}px`;
	customMenu.style.left = `${left}px`;
	customMenu.style.display = 'block';

	customMenu.querySelector('.refresh').onclick = e => {
		const desktop = document.querySelector('.desktop');
		desktop.style.display = 'none';
		setTimeout(() => {
			desktop.style.display = 'block';
		}, 100);
	};
	customMenu.querySelector('.about').onclick = e => {
		const item = desktopItems.find(item => item.type === 'about');
		createNewWindow(null, item);
	};
	customMenu.querySelector('.terminal').onclick = e => {
		const item = desktopItems.find(item => item.type === 'terminal');
		createNewWindow(null, item);
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
				addItem(folderName, 'assets/images/folder.png', 'folder', createDesktop);
			}
		}, 100);
	};
	customMenu.querySelector('.new-note').onclick = async e => {
		// customMenu.style.display = 'none';
		setTimeout(() => {
			const noteNmae = prompt('Enter note name:');
			if (noteNmae) {
				addItem(noteNmae, 'assets/images/note.png', 'notepad', createDesktop);
			}
		}, 100);
	};
	const pasteMenuItem = customMenu.querySelector('.paste');
	if (clipboardItem) {
		pasteMenuItem.classList.remove('disabled');
	} else {
		pasteMenuItem.classList.add('disabled');
	}
	pasteMenuItem.addEventListener('click', () => {
		if (pasteMenuItem.classList.contains('disabled')) return;
		if (clipboardItem) {
			const newItem = { ...clipboardItem, id: Date.now() + Math.random() };
			desktopItems.push(newItem);
			localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
			createDesktop(desktopItems);
		}
	});
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
backgroundImages.forEach(src => {
	const img = new Image();
	img.src = src;
});
const flappyImages = [
	'assets/images/flappy-bird/background-img.png',
	'assets/images/flappy-bird/Bird.png',
	'assets/images/flappy-bird/Bird-2.png',
];
flappyImages.forEach(src => {
	const img = new Image();
	img.src = src;
});

window.addEventListener('DOMContentLoaded', () => {
	document.body.style.backgroundImage = `url(${backgroundImages[currentBGIndex]})`;
});

document.querySelector('.new-folder').addEventListener('click', async e => {
	setTimeout(() => {
		const folderName = prompt('Enter folder name:');
		if (folderName) {
			addItem(folderName, 'assets/images/folder.png', 'folder', createDesktop);
		}
	}, 100);
});
document.querySelector('.new-note').addEventListener('click', async e => {
	setTimeout(() => {
		const noteNmae = prompt('Enter note name:');
		if (noteNmae) {
			addItem(noteNmae, 'assets/images/note.png', 'note', createDesktop);
		}
	}, 100);
});
