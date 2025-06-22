export const desktopItems = [
	{
		name: 'My User',
		icon: 'assets/images/user-folder.png',
		type: 'folder',
	},
	{
		name: 'This PC',
		icon: 'assets/images/this-pc.png',
		type: 'pc',
	},
	{
		name: 'Recycle Bin',
		icon: 'assets/images/bin.png',
		type: 'recycle-bin',
	},
	{
		name: 'Settings',
		icon: 'assets/images/settings.png',
		type: 'settings',
	},

	{
		name: 'Terminal',
		icon: 'assets/images/terminal.png',
		type: 'terminal',
	},
	{
		name: 'Folder',
		icon: 'assets/images/folder.png',
		type: 'folder',
	},
	{
		name: 'My Note',
		icon: 'assets/images/note.png',
		type: 'file',
	},
	{
		name: 'Image Editor',
		icon: 'assets/images/editor.png',
		type: 'editor',
	},
	{
		name: 'Paint',
		icon: 'assets/images/paint.png',
		type: 'paint',
	},
	{
		name: 'Chrome',
		icon: 'assets/images/chrome.png',
		type: 'chrome',
	},
	{
		name: 'VS Code',
		icon: 'assets/images/vs-code.png',
		type: 'vs-code',
	},
	{
		name: 'Mongo DB',
		icon: 'assets/images/mongodb.png',
		type: 'mongodb',
	},
	{
		name: 'Calculator',
		icon: 'assets/images/calculator.png',
		type: 'calculator',
	},
	{
		name: 'Typing',
		icon: 'assets/images/typing.png',
		type: 'typing',
	},
	{
		name: 'Flappy Bird',
		icon: 'assets/images/flappy-bird.png',
		type: 'flappy-bird',
	},
	{
		name: 'Road Cross',
		icon: 'assets/images/crossy-road.png',
		type: 'crossy-road',
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
