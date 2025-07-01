export const taskbarItems = [
	{
		id: 4,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 10,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 6,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 1,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 7,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 8,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 9,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
	{
		id: 5,
		windowRef: null,
		minimized: false,
		isOpen: false,
		pinned: true,
	},
];

export function updateTaskbar() {
	const event = new CustomEvent('taskbarUpdate');
	window.dispatchEvent(event);
}
