export const desktopItems = [
	{
		id: 1,
		name: 'My User',
		icon: 'assets/images/user-folder.png',
		type: 'folder',
	},
	{
		id: 2,
		name: 'This PC',
		icon: 'assets/images/this-pc.png',
		type: 'pc',
	},
	{
		id: 3,
		name: 'Recycle Bin',
		icon: 'assets/images/bin.png',
		type: 'recycle-bin',
	},
	{
		id: 4,
		name: 'Settings',
		icon: 'assets/images/settings.png',
		type: 'settings',
	},

	{
		id: 5,
		name: 'Terminal',
		icon: 'assets/images/terminal.png',
		type: 'terminal',
	},
	{
		id: 6,
		name: 'Folder',
		icon: 'assets/images/folder.png',
		type: 'folder',
	},
	{
		id: 7,
		name: 'My Note',
		icon: 'assets/images/note.png',
		type: 'file',
	},
	{
		id: 8,
		name: 'Image Editor',
		icon: 'assets/images/editor.png',
		type: 'editor',
	},
	{
		id: 9,
		name: 'Paint',
		icon: 'assets/images/paint.png',
		type: 'paint',
	},
	{
		id: 10,
		name: 'Chrome',
		icon: 'assets/images/chrome.png',
		type: 'chrome',
	},
	{
		id: 11,
		name: 'VS Code',
		icon: 'assets/images/vs-code.png',
		type: 'vs-code',
	},
	{
		id: 12,
		name: 'Mongo DB',
		icon: 'assets/images/mongodb.png',
		type: 'mongodb',
	},
	{
		id: 13,
		name: 'Calculator',
		icon: 'assets/images/calculator.png',
		type: 'calculator',
	},
	{
		id: 15,
		name: 'Flappy Bird',
		icon: 'assets/images/flappy-bird.png',
		type: 'flappy-bird',
	},
];
import createDesktop from './desktop.js';
export const addItem = (name, icon, type) => {
	const newItem = {
		name: name,
		icon: icon,
		type: type,
	};
	desktopItems.push(newItem);
	createDesktop(desktopItems);
};
