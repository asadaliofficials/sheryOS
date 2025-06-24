import { desktopItems } from './data.js';
import {
	flapyBirdCode,
	calculatorCode,
	mongodbCode,
	vscodeCode,
	ChromeCode,
	settingsCode,
	terminalCode,
} from './html-codes.js';
import flappyBirdJS from './flappy-bird.js';
import CalculatorJs from './calculator.js';
const GRID_SIZE_Y = 100; // vertical gap (row height)
const GRID_SIZE_X = 85; // horizontal gap (column width, decrease for less gap)
const ICON_OFFSET_X = 10;
const ICON_OFFSET_Y = 30;

let GRID_COLS, GRID_ROWS;

// Calculate grid cols/rows based on window size
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
	// Optionally, re-render icons here if you want them to reposition on resize
});
// Track occupied grid cells
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

		// Save starting cell
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

			// Snap to nearest grid cell
			const { col, row } = getGridCell(el.offsetLeft, el.offsetTop);
			const key = getCellKey(col, row);

			// If cell is occupied, revert to original
			if (occupied[key] && occupied[key] !== el) {
				el.style.left = `${startCol * GRID_SIZE_X + ICON_OFFSET_X}px`;
				el.style.top = `${startRow * GRID_SIZE_Y + ICON_OFFSET_Y}px`;
			} else {
				// Free old cell
				occupied[getCellKey(startCol, startRow)] = null;
				// Occupy new cell
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
		const customMenu = document.querySelector('.custom-menu');
		customMenu.innerHTML = `
					<ul>
					<li class="Open">Open</li>
					<li class="copy">Copy</li>
					<li class="cut">Cut</li>
					<li>Delete</li>
					<li>Rename file</li>
					<li>About this file</li>
				</ul>
				`;
		customMenu.style.display = 'block';
		customMenu.style.top = `${e.clientY}px`;
		customMenu.style.left = `${e.clientX}px`;

		// Position menu within viewport
		const rect = customMenu.getBoundingClientRect();
		if (rect.right > window.innerWidth) {
			customMenu.style.left = `${window.innerWidth - rect.width}px`;
		}
		if (rect.bottom > window.innerHeight) {
			customMenu.style.top = `${window.innerHeight - rect.height}px`;
		}
	});
	el.addEventListener('dblclick', () => {
		createNewWindow(el, item);
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
	document.body.appendChild(clutter);

	const body = clutter.querySelector('.window-wrapper-body');
	if (item.type === 'flappy-bird') {
		body.innerHTML = flapyBirdCode;
		flappyBirdJS();
	} else if (item.type === 'calculator') {
		body.innerHTML = calculatorCode;
		CalculatorJs();
	} else if (item.type === 'mongodb') {
		body.innerHTML = mongodbCode;
	} else if (item.type === 'vs-code') {
		body.innerHTML = vscodeCode;
	} else if (item.type === 'chrome') {
		body.innerHTML = ChromeCode;
	} else if (item.type === 'settings') {
		body.innerHTML = settingsCode;
	} else if (item.type === 'terminal') {
		body.innerHTML = terminalCode;
	}

	if (item.type === 'flappy-bird') {
		const header = clutter.querySelector('.header');
		if (header) header.style.zIndex = 9;
	}
}
function createIcon(item) {
	const el = document.createElement('div');
	el.className = 'desktop-icon';
	el.style.left = item.x + 'px';
	el.style.top = item.y + 'px';
	el.innerHTML = `<img src="${item.icon}" /><p>${item.name}</p>`;

	// Mark initial grid cell as occupied
	const { col, row } = getGridCell(item.x, item.y);
	occupied[getCellKey(col, row)] = el;

	makeDraggable(el);
	addEventListeners(el, item);
	return el;
}

const createDesktop = desktopItems => {
	const documentFragment = document.createDocumentFragment();
	desktopItems.forEach((item, index) => {
		// Place icons in columns: fill down, then next column
		const col = Math.floor(index / GRID_ROWS);
		const row = index % GRID_ROWS;
		const icon = createIcon({
			...item,
			x: col * GRID_SIZE_X + ICON_OFFSET_X,
			y: row * GRID_SIZE_Y + ICON_OFFSET_Y,
		});
		documentFragment.appendChild(icon);
	});
	console.log('desktop changed');
	// Clear existing desktop content
	document.querySelector('.desktop').innerHTML = ''; // Clear existing icons
	document.querySelector('.desktop').appendChild(documentFragment);
};
createDesktop(desktopItems);
export default createDesktop;
