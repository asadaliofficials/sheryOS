export let desktopItems = [
	{
		id: 1,
		name: 'My User',
		icon: 'assets/images/user-folder.png',
		type: 'folder',
		isResizeable: true,
		width: '80%',
		height: '80%',
		top: '5%',
		left: '10%',
		childrens: [
			{
				id: 1.1,
				name: 'Documents',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [],
			},
			{
				id: 1.2,
				name: 'Downloads',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [],
			},
			{
				id: 1.3,
				name: 'Pictures',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [],
			},
			{
				id: 1.4,
				name: 'my notes',
				icon: 'assets/images/note.png',
				type: 'notepad',
				isResizeable: true,
				width: '50%',
				height: '50%',
				top: '25%',
				left: '25%',
				value: 'this is a dummy text for note!',
			},
		],
	},
	{
		id: 2,
		name: 'This PC',
		icon: 'assets/images/this-pc.png',
		type: 'thispc',
		isResizeable: true,
		width: '80%',
		height: '70%',
		top: '10%',
		left: '10%',
	},
	{
		id: 3,
		name: 'Recycle Bin',
		icon: 'assets/images/bin.png',
		type: 'recyclebin',
		isResizeable: true,
		width: '70%',
		height: '70%',
		top: '7%',
		left: '15%',
		childrens: [
			{
				id: 3.1,
				name: 'Deleted Files',
				icon: 'assets/images/folder.png',
				type: 'folder',
			},
			{
				id: 3.2,
				name: 'Deleted Notes',
				icon: 'assets/images/note.png',
				type: 'notepad',
				isResizeable: true,
				width: '50%',
				height: '50%',
				top: '25%',
				left: '25%',
				value: '',
			},
		],
	},
	{
		id: 4,
		name: 'Settings',
		icon: 'assets/images/settings.png',
		type: 'settings',
		isResizeable: true,
		width: '80%',
		height: '90%',
		top: '2%',
		left: '10%',
	},

	{
		id: 5,
		name: 'Terminal',
		icon: 'assets/images/terminal.png',
		type: 'terminal',
		isResizeable: true,
		width: '60%',
		height: '60%',
		top: '10%',
		left: '20%',
	},
	{
		id: 6,
		name: 'My Note',
		icon: 'assets/images/note.png',
		type: 'notepad',
		isResizeable: true,
		width: '50%',
		height: '50%',
		top: '25%',
		left: '25%',
		value: '',
	},
	{
		id: 7,
		name: 'Chrome',
		icon: 'assets/images/chrome.png',
		type: 'chrome',
		isResizeable: true,
		width: '80%',
		height: '90%',
		top: '2%',
		left: '10%',
	},
	{
		id: 8,
		name: 'VS Code',
		icon: 'assets/images/vs-code.png',
		type: 'vs-code',
		isResizeable: true,
		width: '90%',
		height: '85%',
		top: '5%',
		left: '5%',
	},
	{
		id: 9,
		name: 'Mongo DB',
		icon: 'assets/images/mongodb.png',
		type: 'mongodb',
		isResizeable: true,
		width: '1100px',
		height: '570px',
		top: '15px',
		left: '20%',
	},
	{
		id: 10,
		name: 'Calculator',
		icon: 'assets/images/calculator.png',
		type: 'calculator',
		isResizeable: false,
		width: '380px',
		height: '600px',
		top: '20px',
		left: '30%',
	},
	{
		id: 11,
		name: 'Flappy Bird',
		icon: 'assets/images/flappy-bird.png',
		type: 'flappy-bird',
		isResizeable: true,
		width: '90%',
		height: '90%',
		top: '2%',
		left: '5%',
	},
	{
		id: 12,
		name: 'New Folder',
		icon: 'assets/images/folder.png',
		type: 'folder',
		isResizeable: true,
		width: '80%',
		height: '80%',
		top: '5%',
		left: '10%',
		childrens: [],
	},
	{
		id: 13,
		name: 'Parent',
		icon: 'assets/images/folder.png',
		type: 'folder',
		isResizeable: true,
		width: '80%',
		height: '80%',
		top: '5%',
		left: '10%',
		childrens: [
			{
				id: 13.1,
				name: 'Child',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 13.11,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.111,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.112,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.12,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.121,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.122,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.13,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.131,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.132,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.14,
						name: 'Grand Child Notes',
						icon: 'assets/images/note.png',
						type: 'notepad',
						isResizeable: true,
						width: '50%',
						height: '50%',
						top: '25%',
						left: '25%',
						value: 'sample notes for Grand child notepad...',
					},
				],
			},
			{
				id: 13.2,
				name: 'Child 2',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 13.21,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.211,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.222,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.22,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.221,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.222,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.23,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.231,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.232,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.24,
						name: 'Grand Child Notes',
						icon: 'assets/images/note.png',
						type: 'notepad',
						isResizeable: true,
						width: '50%',
						height: '50%',
						top: '25%',
						left: '25%',
						value: 'sample notes for Grand child notepad...',
					},
				],
			},
			{
				id: 13.3,
				name: 'Child 3',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 13.31,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.311,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.312,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.32,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.321,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.322,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.33,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 13.331,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 13.332,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 13.34,
						name: 'Grand Child Notes',
						icon: 'assets/images/note.png',
						type: 'notepad',
						isResizeable: true,
						width: '50%',
						height: '50%',
						top: '25%',
						left: '25%',
						value: 'sample notes for Grand child notepad...',
					},
				],
			},
			{
				id: 13.4,
				name: 'Child Notes',
				icon: 'assets/images/note.png',
				type: 'notepad',
				isResizeable: true,
				width: '50%',
				height: '50%',
				top: '25%',
				left: '25%',
				value: 'sample notes for child notepad...',
			},
		],
	},
];

let savedData = localStorage.getItem('desktopItems');
if (savedData) {
	desktopItems = JSON.parse(savedData);
} else {
	localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
}
import createDesktop from './desktop.js';
export const addItem = (name, icon, type) => {
	let newItem = null;
	if (type === 'folder') {
		newItem = {
			name: name,
			icon: icon,
			type: type,
			isResizeable: true,
			width: '80%',
			height: '80%',
			top: '5%',
			left: '10%',
			childrens: [],
			id: desktopItems.length + 1,
		};
	} else {
		newItem = {
			name: name,
			icon: icon,
			type: type,
			isResizeable: true,
			width: '50%',
			height: '50%',
			top: '25%',
			left: '25%',
			value: '',
			id: desktopItems.length + 1,
		};
	}

	desktopItems.push(newItem);
	localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
	createDesktop(desktopItems);
};

export const addChildItem = (parentId, name, icon, type) => {
	const parentItem = findItemById(desktopItems, parentId);
	const isFolder = type === 'folder';
	if (parentItem) {
		const newChildItem = {
			name: name,
			icon: icon,
			type: type,
			id: Date.now() + Math.random(), 
			...(isFolder && { childrens: [] }),
			...(!isFolder && {
				isResizeable: true,
				width: '50%',
				height: '50%',
				top: '25%',
				left: '25%',
				value: '',
			}),
		};
		if (!parentItem.childrens) parentItem.childrens = [];
		parentItem.childrens.push(newChildItem);
		localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
		createDesktop(desktopItems);
	}
};
export function findItemById(items, id) {
	for (const item of items) {
		if (item.id === id) return item;
		if (item.childrens && item.childrens.length > 0) {
			const found = findItemById(item.childrens, id);
			if (found) return found;
		}
	}
	return null;
}

export function deleteItemById(items, id) {
	for (let i = 0; i < items.length; i++) {
		if (items[i].id === id) {
			items.splice(i, 1);
			localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
			return true;
		}
		if (items[i].childrens && items[i].childrens.length > 0) {
			if (deleteItemById(items[i].childrens, id)) {
				return true;
			}
		}
	}
	return false;
}

export function renameItemById(items, id, newName) {
	for (const item of items) {
		if (item.id === id) {
			item.name = newName;
			localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
			return true;
		}
		if (item.childrens && item.childrens.length > 0) {
			if (renameItemById(item.childrens, id, newName)) {
				return true;
			}
		}
	}
	return false;
}
