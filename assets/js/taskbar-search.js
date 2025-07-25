import { desktopItems } from './data.js';
import { taskbarItems, updateTaskbar } from './taskbarData.js';
import { createNewWindow, bringWindowToFront } from './desktop.js';

const searchInputBox = document.querySelector('.search input');
const searchPanel = document.getElementById('searchPanel');
const resultsDiv = searchPanel.querySelector('.search-panel-results');
const searchDiv = document.querySelector('.search');
const taskbarSearchInput = document.querySelector('.taskbar-search-input');

searchInputBox.addEventListener('focus', showPanel);
searchInputBox.addEventListener('click', showPanel);

function showPanel() {
	// Position and size the panel to match the search input
	const rect = searchInputBox.getBoundingClientRect();
	const parentRect = searchDiv.getBoundingClientRect();
	searchPanel.style.left = parentRect.left + 'px';
	searchPanel.style.width = rect.width + 'px';
	searchPanel.style.display = 'flex';
	updateResults();
}


document.addEventListener('click', e => {
	if (!searchPanel.contains(e.target) && !searchDiv.contains(e.target)) {
		searchPanel.style.display = 'none';
		taskbarSearchInput.value = '';
	}
});


searchInputBox.addEventListener('input', updateResults);

function updateResults() {
	const query = searchInputBox.value.trim().toLowerCase();
	resultsDiv.innerHTML = '';
	if (!query) {
		const empty = document.createElement('div');
		empty.className = 'search-panel-empty';
		empty.textContent = 'Enter name to search';
		resultsDiv.appendChild(empty);
		return;
	}

	const matches = desktopItems
		.filter(item => item.name && item.name.toLowerCase().includes(query))
		.slice(0, 5);

	if (matches.length === 0) {
		const empty = document.createElement('div');
		empty.className = 'search-panel-empty';
		empty.textContent = 'No apps found';
		resultsDiv.appendChild(empty);
		return;
	}

	matches.forEach((item, idx) => {
		const div = document.createElement('div');
		div.className = 'search-panel-result';
		div.tabIndex = 0;
		div.innerHTML = `<img src="${item.icon}" alt="${item.name}"><span>${item.name}</span>`;
		div.addEventListener('click', e => {
			taskbarSearchInput.value = '';

			searchPanel.style.display = 'none';
			const taskbarItem = taskbarItems.find(i => i.id === item.id && i.isOpen);
			if (!taskbarItem) {
				createNewWindow(null, item);
			} else if (taskbarItem.minimized && taskbarItem.windowRef) {
				taskbarItem.windowRef.style.display = 'block';
				taskbarItem.minimized = false;
				updateTaskbar();
				bringWindowToFront(taskbarItem.windowRef);
			} else if (taskbarItem.windowRef) {
				taskbarItem.windowRef.style.display = 'block';
				bringWindowToFront(taskbarItem.windowRef);
			}
		});
		resultsDiv.appendChild(div);
	});
}
