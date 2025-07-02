import { taskbarItems } from './taskbarData.js';
import { desktopItems } from './data.js';
import { createNewWindow } from './desktop.js';
import { updateTaskbar } from './taskbarData.js';
import { bringWindowToFront } from './desktop.js';

const taskbarIcons = document.querySelector('.taskbar-icons');

function renderTaskbarIcons() {
	taskbarIcons.innerHTML = `<div class="icon task-view taskbar-hover">
        <img src="assets/images/task view.png" alt="" />
    </div>`;

	taskbarItems.forEach(item => {
		const desktopItem = desktopItems.find(i => i.id === item.id);
		if (!desktopItem) return;

		const taskbarItem = document.createElement('div');
		taskbarItem.classList.add('icon', 'taskbar-hover');
		taskbarItem.setAttribute('data-id', item.id);
		taskbarItem.innerHTML = `<img src="${desktopItem.icon}" alt="${desktopItem.name}">`;

		// Animation: Add animate-in class if just opened
		if (item.justOpened) {
			taskbarItem.classList.add('taskbar-icon-animate-in');
			setTimeout(() => {
				taskbarItem.classList.remove('taskbar-icon-animate-in');
				item.justOpened = false;
			}, 400);
		}

		if (item.isOpen) {
			taskbarItem.classList.add('taskbar-open');
			if (item.minimized) {
				taskbarItem.classList.add('taskbar-minimized');
			} else {
				taskbarItem.classList.remove('taskbar-minimized');
			}
		} else {
			taskbarItem.classList.remove('taskbar-open', 'taskbar-minimized');
		}

		taskbarItem.addEventListener('click', () => {
			if (item.isOpen) {
				if (item.minimized && item.windowRef) {
					item.windowRef.style.display = 'block';
					item.windowRef.focus();
					item.minimized = false;
					updateTaskbar();
					bringWindowToFront(item.windowRef);
				} else if (item.windowRef) {
					item.windowRef.style.display = 'block';
					item.windowRef.focus();
					bringWindowToFront(item.windowRef);
				}
			} else {
				createNewWindow(null, desktopItem);
			}
		});

		taskbarIcons.appendChild(taskbarItem);
	});

	// Animate out icons that are being removed (not open and not pinned)
	const currentIds = taskbarItems.map(i => i.id);
	const existingIcons = taskbarIcons.querySelectorAll('.icon[data-id]');
	existingIcons.forEach(icon => {
		const id = Number(icon.getAttribute('data-id'));
		const item = taskbarItems.find(i => i.id === id);
		if (!item || (!item.isOpen && !item.pinned)) {
			icon.classList.add('taskbar-icon-animate-out');
			setTimeout(() => {
				if (icon.parentNode) icon.parentNode.removeChild(icon);
			}, 320);
		}
	});
}

window.addEventListener('taskbarUpdate', renderTaskbarIcons);

renderTaskbarIcons();
