export const desktopItems = [
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
		id: 7,
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
		id: 10,
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
		id: 11,
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
		id: 12,
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
		id: 13,
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
		id: 15,
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
		id: 7,
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
		id: 6,
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
				id: 6.1,
				name: 'Child',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 6.11,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.111,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.112,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.12,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.121,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.122,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.13,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.131,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.132,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.14,
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
				id: 6.2,
				name: 'Child 2',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 6.21,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.211,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.222,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.22,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.221,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.222,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.23,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.231,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.232,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.24,
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
				id: 6.3,
				name: 'Child 3',
				icon: 'assets/images/folder.png',
				type: 'folder',
				childrens: [
					{
						id: 6.31,
						name: 'Grand Child',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.311,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.312,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.32,
						name: 'Grand Child 2',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.321,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.322,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.33,
						name: 'Grand Child 3',
						icon: 'assets/images/folder.png',
						type: 'folder',
						childrens: [
							{
								id: 6.331,
								name: 'Asad',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
							{
								id: 6.332,
								name: 'Ali',
								icon: 'assets/images/folder.png',
								type: 'folder',
								childrens: [],
							},
						],
					},
					{
						id: 6.34,
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
				id: 6.4,
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
import createDesktop from './desktop.js';
export const addItem = (name, icon, type) => {
	const newItem = {
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
	desktopItems.push(newItem);
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
			id: Date.now() + Math.random(), // Use a unique id for all children!
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
			return true;
		}
		if (items[i].childrens && items[i].childrens.length > 0) {
			if (deleteItemById(items[i].childrens, id)) return true;
		}
	}
	return false;
}
