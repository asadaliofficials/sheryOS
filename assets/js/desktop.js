import { desktopItems } from './data.js';
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

// ...existing code...

function createIcon(item) {
	const el = document.createElement('div');
	el.className = 'desktop-icon';
	el.style.left = item.x + 'px';
	el.style.top = item.y + 'px';
	el.innerHTML = `<img src="${item.icon}" /><p>${item.name}</p>`;

	// Mark initial grid cell as occupied
	const { col, row } = getGridCell(item.x, item.y);
	occupied[getCellKey(col, row)] = el;

	makeDraggable(el); // Enable movement
	return el;
}

// ...existing code...

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
