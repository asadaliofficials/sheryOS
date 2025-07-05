import {
	addChildItem,
	desktopItems,
	findItemById,
	deleteItemById,
	renameItemById,
} from './data.js';
import { taskbarItems, updateTaskbar } from './taskbarData.js';

import {
	clipboardItem,
	clipboardAction,
	clipboardSourceId,
	setClipboard,
	clearClipboard,
	flappyBirdJS,
	calculatorJS,
	notepadJS,
	recycleBinJS,
	terminalJS,
	chromeJS,
} from './js-codes.js';
import {
	flapyBirdCode,
	calculatorCode,
	mongodbCode,
	vscodeCode,
	ChromeCode,
	settingsCode,
	terminalCode,
	notepadCode,
	recycleBinCode,
	thisPcCode,
	folderCode,
	aboutCode,
} from './html-codes.js';
const GRID_SIZE_Y = 100;
const GRID_SIZE_X = 85;
const ICON_OFFSET_X = 10;
const ICON_OFFSET_Y = 30;

let GRID_COLS, GRID_ROWS;

function updateGridSize() {
	const desktop = document.querySelector('.desktop');
	const width = desktop ? desktop.clientWidth : window.innerWidth;
	const height = desktop ? desktop.clientHeight : window.innerHeight;
	GRID_COLS = Math.floor((width - ICON_OFFSET_X) / GRID_SIZE_X);
	GRID_ROWS = Math.floor((height - ICON_OFFSET_Y) / GRID_SIZE_Y);
}

updateGridSize();
window.addEventListener('resize', () => {
	updateGridSize();
});

const occupied = {};

function getGridCell(x, y) {
	const col = Math.max(0, Math.min(GRID_COLS - 1, Math.round((x - ICON_OFFSET_X) / GRID_SIZE_X)));
	const row = Math.max(0, Math.min(GRID_ROWS - 1, Math.round((y - ICON_OFFSET_Y) / GRID_SIZE_Y)));
	return { col, row };
}

function getCellKey(col, row) {
	return `${col},${row}`;
}

function makeDraggable(el) {
	let offsetX = 0;
	let offsetY = 0;
	let isDragging = false;
	let startCol, startRow;

	el.addEventListener('mousedown', e => {
		isDragging = true;
		offsetX = e.clientX - el.offsetLeft;
		offsetY = e.clientY - el.offsetTop;
		el.style.zIndex = 1000;

		const { col, row } = getGridCell(el.offsetLeft, el.offsetTop);
		startCol = col;
		startRow = row;
		document.onmousemove = e => {
			if (!isDragging) return;
			el.style.left = `${e.clientX - offsetX}px`;
			el.style.top = `${e.clientY - offsetY}px`;
		};

		document.onmouseup = () => {
			if (!isDragging) return;
			isDragging = false;
			document.onmousemove = null;
			document.onmouseup = null;

			const { col, row } = getGridCell(el.offsetLeft, el.offsetTop);
			const key = getCellKey(col, row);

			if (occupied[key] && occupied[key] !== el) {
				el.style.left = `${startCol * GRID_SIZE_X + ICON_OFFSET_X}px`;
				el.style.top = `${startRow * GRID_SIZE_Y + ICON_OFFSET_Y}px`;
			} else {
				occupied[getCellKey(startCol, startRow)] = null;

				occupied[key] = el;
				el.style.left = `${col * GRID_SIZE_X + ICON_OFFSET_X}px`;
				el.style.top = `${row * GRID_SIZE_Y + ICON_OFFSET_Y}px`;
			}
			el.style.zIndex = '';
		};
	});
}

function addEventListeners(el, item) {
	el.addEventListener('contextmenu', e => {
		e.preventDefault();
		e.stopPropagation();
		selectedItem = item;
		const customMenu = document.querySelector('.custom-menu');
		customMenu.innerHTML = `
        <ul>
            <li class="open">Open</li>
            <li class="copy">Copy</li>
            <li class="cut">Cut</li>
            <li class="delete">Delete</li>
            <li class="rename">Rename</li>
            <li class="about-file">About this file</li>
        </ul>
    `;
		customMenu.style.display = 'block';
		customMenu.style.top = `${e.clientY}px`;
		customMenu.style.left = `${e.clientX}px`;

		customMenu.querySelector('.open').onclick = () => createNewWindow(el, item);

		customMenu.querySelector('.copy').onclick = () => {
			setClipboard({ ...item, id: Date.now() + Math.random() }, 'copy');
		};
		customMenu.querySelector('.cut').onclick = () => {
			setTimeout(() => {
				alert('this logic is not implemented yet!');
			}, 100);
		};
		customMenu.querySelector('.delete').onclick = () => {
			deleteItemById(desktopItems, item.id);
			createDesktop(desktopItems);
		};

		customMenu.querySelector('.rename').onclick = () => {
			setTimeout(() => {
				const newName = prompt('Enter new name:', item.name);
				if (newName) {
					renameItemById(desktopItems, item.id, newName);
					createDesktop(desktopItems);
				}
			}, 10);
		};

		customMenu.querySelector('.about-file').onclick = () => {
			setTimeout(() => {
				alert(`Name: ${item.name}\nType: ${item.type}`);
			}, 10);
		};

		const rect = customMenu.getBoundingClientRect();
		if (rect.right > window.innerWidth) {
			customMenu.style.left = `${window.innerWidth - rect.width}px`;
		}
		if (rect.bottom > window.innerHeight) {
			customMenu.style.top = `${window.innerHeight - rect.height}px`;
		}
	});
	el.addEventListener('dblclick', () => {
		const taskbarItem = taskbarItems.find(i => i.id === item.id && i.isOpen);
		if (!taskbarItem) {
			createNewWindow(el, item);
		} else if (taskbarItem.minimized && taskbarItem.windowRef) {
			taskbarItem.windowRef.style.display = 'block';
			taskbarItem.minimized = false;
			updateTaskbar();
		}
	});
}

function createNewWindow(el, item) {
	const clutter = document.createElement('div');
	clutter.className = 'window-wrapper';
	clutter.style.width = item.width || '50%';
	clutter.style.height = item.height || '50%';
	clutter.style.top = item.top || '25px';
	clutter.style.left = item.left || '25%';
	clutter.innerHTML = `
        <div class="header">
            <div>
                <img width="30" src="${item.icon}" alt="" />
                <p>${item.name}</p>
            </div>
            <div class="controls">
                <div class="minimize">
                    <img class="minimize" src="assets/images/minimize.png" alt="" />
                </div>
                <div class="control maximize">
                    <img src="assets/images/maximize.png" alt="" />
                </div>
                <div class="control close">
                    <img src="assets/images/close.png" alt="" />
                </div>
            </div>
        </div>
        <div class="window-wrapper-body">
        </div>
        <!-- here are divs to make window resizeable -->
				${item.isResizeable ? '<div class="window-resizer nw"></div>' : ''}
				${item.isResizeable ? ' <div class="window-resizer n"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer ne"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer e"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer se"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer s"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer sw"></div>' : ''}
				${item.isResizeable ? '<div class="window-resizer w"></div>' : ''}
    `;
	if (!item.isResizeable) {
		clutter.querySelector('.maximize').style.opacity = '0.3';
		clutter.querySelector('.maximize').style.pointerEvents = 'none';
		clutter.querySelector('.maximize').style.cursor = 'not-allowed';
	}
	document.body.appendChild(clutter);

	let taskbarItem = taskbarItems.find(i => i.id === item.id);
	if (taskbarItem) {
		taskbarItem.windowRef = clutter;
		taskbarItem.isOpen = true;
		taskbarItem.minimized = false;
	} else {
		taskbarItems.push({
			id: item.id,
			windowRef: clutter,
			minimized: false,
			isOpen: true,
			pinned: false,
			justOpened: true,
		});
	}
	updateTaskbar();

	clutter.querySelector('.close').addEventListener('click', () => {
		clutter.remove();
		const idx = taskbarItems.findIndex(i => i.id === item.id);
		if (idx !== -1) {
			if (taskbarItems[idx].pinned) {
				taskbarItems[idx].isOpen = false;
				taskbarItems[idx].windowRef = null;
				taskbarItems[idx].minimized = false;
			} else {
				taskbarItems.splice(idx, 1);
			}
			updateTaskbar();
		}
	});

	clutter.querySelector('.minimize').addEventListener('click', () => {
		clutter.style.display = 'none';
		const taskbarItem = taskbarItems.find(i => i.id === item.id);
		if (taskbarItem) {
			taskbarItem.minimized = true;
			updateTaskbar();
		}
	});
	clutter.querySelector('.maximize').addEventListener('click', () => {
		if (item.isResizeable) {
			if (clutter.classList.contains('maximized')) {
				clutter.classList.remove('maximized');
				clutter.style.width = item.width || '50%';
				clutter.style.height = item.height || '50%';
				clutter.style.top = item.top || '25px';
				clutter.style.left = item.left || '25%';
			} else {
				clutter.classList.add('maximized');
				clutter.style.width = '100%';
				clutter.style.height = '100%';
				clutter.style.top = '0';
				clutter.style.left = '0';
			}
		}
	});
	clutter.querySelector('.minimize').addEventListener('click', () => {
		clutter.style.display = 'none';
		const taskbarItem = taskbarItems.find(i => i.id === item.id);
		if (taskbarItem) {
			taskbarItem.minimized = true;
			updateTaskbar(taskbarItem);
		}
	});
	clutter.addEventListener('mousedown', () => {
		bringWindowToFront(clutter);
	});
	const allWindows = document.querySelectorAll('.window-wrapper');
	allWindows.forEach(win => {
		win.style.zIndex = 1;
	});
	clutter.style.zIndex = 10;

	if (item.isResizeable) {
		const resizers = clutter.querySelectorAll('.window-resizer');
		resizers.forEach(resizer => {
			resizer.addEventListener('mousedown', e => {
				e.preventDefault();
				e.stopPropagation();
				const startX = e.clientX;
				const startY = e.clientY;
				const startWidth = parseInt(document.defaultView.getComputedStyle(clutter).width, 10);
				const startHeight = parseInt(document.defaultView.getComputedStyle(clutter).height, 10);
				const startTop = parseInt(document.defaultView.getComputedStyle(clutter).top, 10);
				const startLeft = parseInt(document.defaultView.getComputedStyle(clutter).left, 10);
				const direction = resizer.classList[1];
				document.documentElement.addEventListener('mousemove', resize);
				document.documentElement.addEventListener('mouseup', stopResize);
				const MIN_WIDTH = 200;
				const MIN_HEIGHT = 100;
				function resize(e) {
					if (direction.includes('e')) {
						const newWidth = startWidth + e.clientX - startX;
						clutter.style.width = Math.max(newWidth, MIN_WIDTH) + 'px';
					}
					if (direction.includes('w')) {
						const newWidth = startWidth - (e.clientX - startX);
						clutter.style.width = Math.max(newWidth, MIN_WIDTH) + 'px';
						clutter.style.left = startLeft + (e.clientX - startX) + 'px';
					}
					if (direction.includes('s')) {
						const newHeight = startHeight + e.clientY - startY;
						clutter.style.height = Math.max(newHeight, MIN_HEIGHT) + 'px';
					}
					if (direction.includes('n')) {
						const newHeight = startHeight - (e.clientY - startY);
						clutter.style.height = Math.max(newHeight, MIN_HEIGHT) + 'px';
						clutter.style.top = startTop + (e.clientY - startY) + 'px';
					}
				}

				function stopResize() {
					document.documentElement.removeEventListener('mousemove', resize);
					document.documentElement.removeEventListener('mouseup', stopResize);
				}
			});
		});
	}

	clutter.querySelector('.header').addEventListener('mousedown', e => {
		bringWindowToFront(clutter);
		e.preventDefault();
		e.stopPropagation();
		let offsetX = e.clientX - clutter.offsetLeft;
		let offsetY = e.clientY - clutter.offsetTop;
		document.onmousemove = e => {
			clutter.style.left = `${e.clientX - offsetX}px`;
			clutter.style.top = `${e.clientY - offsetY}px`;
		};
		document.onmouseup = () => {
			document.onmousemove = null;
			document.onmouseup = null;
		};
	});

	const body = clutter.querySelector('.window-wrapper-body');
	if (item.type === 'flappy-bird') {
		body.innerHTML = flapyBirdCode;
		body.style.overflow = 'hidden';
		body.setAttribute('tabindex', '0');
		if (body.focus) body.focus({ preventScroll: true });
		flappyBirdJS(body);
	} else if (item.type === 'calculator') {
		body.innerHTML = calculatorCode;
		calculatorJS();
	} else if (item.type === 'mongodb') {
		body.innerHTML = mongodbCode;
		body.style.overflow = 'hidden';
	} else if (item.type === 'vs-code') {
		body.innerHTML = vscodeCode;
	} else if (item.type === 'chrome') {
		body.innerHTML = ChromeCode;
		chromeJS(body);
	} else if (item.type === 'settings') {
		body.innerHTML = settingsCode;
	} else if (item.type === 'terminal') {
		body.innerHTML = terminalCode;
		terminalJS(body, (input, terminalContent) => {
			const output = document.createElement('div');
			output.className = 'terminal-line';
			output.innerHTML = `<span>${input ? 'You typed: ' + input : ''}</span>`;
			terminalContent.insertBefore(
				output,
				terminalContent.querySelector('.terminal-line:last-child')
			);
		});
	} else if (item.type === 'notepad') {
		body.innerHTML = notepadCode;
		notepadJS(body, item, desktopItems);
	} else if (item.type === 'recyclebin') {
		body.innerHTML = recycleBinCode;
		initializeChildrens(item, clutter);
		recycleBinJS(body);
	} else if (item.type === 'thispc') {
		body.innerHTML = thisPcCode;
	} else if (item.type === 'about') {
		body.innerHTML = aboutCode;
	} else if (item.type === 'folder') {
		body.innerHTML = folderCode;
		clutter.folderNavStack = [item];
		clutter.folderNavIndex = 0;
		initializeChildrens(item, clutter);
	}
	if (item.type === 'folder') {
		const newFolderBtn = clutter.querySelector('.folder-btn.new-folder');
		const newNoteBtn = clutter.querySelector('.folder-btn.new-note');
		const backBtn = clutter.querySelector('.folder-btn.back');
		const forwardBtn = clutter.querySelector('.folder-btn.forward');

		newFolderBtn.onclick = () => {
			const folderName = prompt('Enter folder name:');
			const current = clutter.currentFolderItem || item;
			if (folderName) {
				addChildItem(current.id, folderName, 'assets/images/folder.png', 'folder', createDesktop);
				const updatedItem = findItemById(desktopItems, current.id);
				initializeChildrens(updatedItem, clutter);
				clutter.currentFolderItem = updatedItem;
			}
		};

		newNoteBtn.onclick = () => {
			const noteName = prompt('Enter note name:');
			const current = clutter.currentFolderItem || item;
			if (noteName) {
				addChildItem(current.id, noteName, 'assets/images/note.png', 'notepad', createDesktop);
				const updatedItem = findItemById(desktopItems, current.id);
				initializeChildrens(updatedItem, clutter);
				clutter.currentFolderItem = updatedItem;
			}
		};

		backBtn.onclick = () => {
			if (clutter.folderNavStack && clutter.folderNavIndex > 0) {
				clutter.folderNavIndex--;
				const prevItem = clutter.folderNavStack[clutter.folderNavIndex];
				const folderTitle = clutter.querySelector('.folder-title');
				if (folderTitle) {
					folderTitle.innerHTML = `<img src="${prevItem.icon}" /> ${prevItem.name}`;
				}
				const searchInput = clutter.querySelector('.folder-search');
				if (searchInput) searchInput.value = '';
				initializeChildrens(prevItem, clutter);
				clutter.currentFolderItem = prevItem;
			}
			updateNavButtons(clutter);
		};

		forwardBtn.onclick = () => {
			if (clutter.folderNavStack && clutter.folderNavIndex < clutter.folderNavStack.length - 1) {
				clutter.folderNavIndex++;
				const nextItem = clutter.folderNavStack[clutter.folderNavIndex];
				const folderTitle = clutter.querySelector('.folder-title');
				if (folderTitle) {
					folderTitle.innerHTML = `<img src="${nextItem.icon}" /> ${nextItem.name}`;
				}
				const searchInput = clutter.querySelector('.folder-search');
				if (searchInput) searchInput.value = '';
				initializeChildrens(nextItem, clutter);
				clutter.currentFolderItem = nextItem;
			}
			updateNavButtons(clutter);
		};
	}
	clutter.addEventListener('contextmenu', e => {
		e.preventDefault();
	});

	if (item.type === 'flappy-bird') {
		const header = clutter.querySelector('.header');
		if (header) header.style.zIndex = 9;
	}
}

export { createNewWindow };

function createIcon(item) {
	const el = document.createElement('div');
	el.className = 'desktop-icon';
	el.style.left = item.x + 'px';
	el.style.top = item.y + 'px';
	el.innerHTML = `<img src="${item.icon}" /><p>${item.name}</p>`;
	el.dataset.id = item.id;

	const { col, row } = getGridCell(item.x, item.y);
	occupied[getCellKey(col, row)] = el;

	makeDraggable(el);
	addEventListeners(el, item);
	return el;
}

const createDesktop = desktopItems => {
	const documentFragment = document.createDocumentFragment();
	desktopItems.forEach((item, index) => {
		const col = Math.floor(index / GRID_ROWS);
		const row = index % GRID_ROWS;
		const icon = createIcon({
			...item,
			x: col * GRID_SIZE_X + ICON_OFFSET_X,
			y: row * GRID_SIZE_Y + ICON_OFFSET_Y,
		});
		documentFragment.appendChild(icon);
	});
	document.querySelector('.desktop').innerHTML = '';
	document.querySelector('.desktop').appendChild(documentFragment);
};

createDesktop(desktopItems);
export default createDesktop;

function initializeChildrens(item, clutter) {
	const folderContent = clutter.querySelector('.folder-content');
	if (item.childrens.length > 0) {
		let childrensHTML = '';
		item.childrens.forEach((child, idx) => {
			childrensHTML += `
                <div class="folder-row" data-child-idx="${idx}">
                    <img src="${child.icon}" />
                    <span>${child.name}</span>
                </div>
            `;
		});
		folderContent.innerHTML = childrensHTML;

		const rows = folderContent.querySelectorAll('.folder-row');
		rows.forEach(row => {
			row.addEventListener('dblclick', () => {
				const idx = row.getAttribute('data-child-idx');
				const child = item.childrens[idx];
				if (child.type === 'folder') {
					if (clutter.folderNavStack && clutter.folderNavIndex !== undefined) {
						clutter.folderNavStack = clutter.folderNavStack.slice(0, clutter.folderNavIndex + 1);
						clutter.folderNavStack.push(child);
						clutter.folderNavIndex++;
					} else {
						clutter.folderNavStack = [child];
						clutter.folderNavIndex = 0;
					}
					const folderTitle = clutter.querySelector('.folder-title');
					if (folderTitle) {
						folderTitle.innerHTML = `<img src="${child.icon}" /> ${child.name}`;
					}
					const searchInput = clutter.querySelector('.folder-search');
					if (searchInput) searchInput.value = '';
					initializeChildrens(child, clutter);
					clutter.currentFolderItem = child;
				} else if (child.type === 'notepad') {
					createNewWindow(null, child);
				}
			});
		});
	} else {
		folderContent.innerHTML = `<div class="folder-empty">This folder is empty</div>`;
	}
	updateNavButtons(clutter);
}
function updateNavButtons(clutter) {
	const backBtn = clutter.querySelector('.folder-btn.back');
	const forwardBtn = clutter.querySelector('.folder-btn.forward');
	if (!backBtn || !forwardBtn) return;

	if (clutter.folderNavStack && clutter.folderNavIndex > 0) {
		backBtn.disabled = false;
		backBtn.style.cursor = 'pointer';
		backBtn.style.opacity = '1';
	} else {
		backBtn.disabled = true;
		backBtn.style.cursor = 'not-allowed';
		backBtn.style.opacity = '0.5';
	}

	if (clutter.folderNavStack && clutter.folderNavIndex < clutter.folderNavStack.length - 1) {
		forwardBtn.disabled = false;
		forwardBtn.style.cursor = 'pointer';
		forwardBtn.style.opacity = '1';
	} else {
		forwardBtn.disabled = true;
		forwardBtn.style.cursor = 'not-allowed';
		forwardBtn.style.opacity = '0.5';
	}
}
function bringWindowToFront(clutter) {
	const allWindows = document.querySelectorAll('.window-wrapper');
	allWindows.forEach(win => {
		win.style.zIndex = 1;
	});
	clutter.style.zIndex = 10;
}
export { bringWindowToFront };
export function onTerminalEnter() {}

let selectedItem = null;
