import { addItem } from './data.js';

export default function terminalJS(container) {
	// initInput(container);
	onEnter('help', container.querySelector('.terminal-content'), initInput);

	let input = '';
	let cursorPos = 0;

	function renderInput(terminalContent) {
		const before = input.slice(0, cursorPos);
		const after = input.slice(cursorPos);
		const inputLine = terminalContent.querySelector('.terminal-line:last-child');
		inputLine.innerHTML = `
    <span class="terminal-path">C:\\Users\\Asad Ali&gt;</span>
    <span class="terminal-input" style="color:orange;">${before}<span class="terminal-cursor"></span>${after}</span>
`;
	}

	function initInput(currentContainer) {
		input = '';
		cursorPos = 0;
		const terminalContent = currentContainer.querySelector('.terminal-content');
		renderInput(terminalContent);

		// Remove previous event listeners by cloning
		const newContainer = currentContainer.cloneNode(true);
		currentContainer.parentNode.replaceChild(newContainer, currentContainer);

		const newTerminalContent = newContainer.querySelector('.terminal-content');

		newContainer.addEventListener('keydown', e => {
			if (/^[a-zA-Z \-_,]$/.test(e.key)) {
				input = input.slice(0, cursorPos) + e.key + input.slice(cursorPos);
				cursorPos++;
				renderInput(newTerminalContent);
				e.preventDefault();
			} else if (e.key === 'Backspace') {
				if (cursorPos > 0) {
					input = input.slice(0, cursorPos - 1) + input.slice(cursorPos);
					cursorPos--;
					renderInput(newTerminalContent);
				}
				e.preventDefault();
			} else if (e.key === 'Enter') {
				onEnter(input, newTerminalContent, (/* no param needed */) => initInput(newContainer));
				input = '';
				cursorPos = 0;
				renderInput(newTerminalContent);
				e.preventDefault();
			}
		});
		newContainer.tabIndex = 0;
		newContainer.focus();
	}

	initInput(container);
}

function onEnter(input, terminalContent, initInput) {
	if (input.trim() === '') return;

	const inputLine = terminalContent.querySelector('.terminal-line:last-child');
	// Insert the command line
	const commandLine = document.createElement('div');
	commandLine.className = 'terminal-line';
	commandLine.innerHTML = `<span class="terminal-path">C:\\Users\\Asad Ali&gt;</span> <span style="color:orange">${input}</span>`;
	terminalContent.insertBefore(commandLine, inputLine);

	// Helper to insert output below the command
	const addOutput = msg => {
		const outputLine = document.createElement('div');
		outputLine.className = 'terminal-line';
		outputLine.innerHTML = msg;
		terminalContent.insertBefore(outputLine, inputLine);

		// Add a blank line for spacing
		const blankLine = document.createElement('div');
		blankLine.className = 'terminal-line';
		blankLine.innerHTML = '&nbsp;';
		terminalContent.insertBefore(blankLine, inputLine);

		// Scroll to bottom
		terminalContent.scrollTop = terminalContent.scrollHeight;
	};

	if (input.trim().toLowerCase() === 'clear') {
		terminalContent.innerHTML = `
          <div class="terminal-line">
            <span class="terminal-path">C:\\Users\\Asad Ali&gt;</span>
            <span class="terminal-cursor"></span>
          </div>
        `;
		initInput();
	} else if (input.trim().toLowerCase() === 'help') {
		const helpCommands = [
			{ cmd: 'help', desc: 'Show this help message' },
			{ cmd: 'clear', desc: 'Clear the terminal' },
			{ cmd: 'time', desc: 'Show current time' },
			{ cmd: 'date', desc: 'Show current date' },
			{ cmd: 'about', desc: 'About this terminal' },
			{ cmd: 'print [msg]', desc: 'Print a message' },
			{ cmd: 'mkdir [name]', desc: 'Create a folder' },
			{ cmd: 'mknote [name]', desc: 'Create a note' },
		];
		helpCommands.forEach(({ cmd, desc }) => {
			const line = document.createElement('div');
			line.className = 'terminal-line';
			line.innerHTML = `<span style="color:orange;min-width:110px;display:inline-block;">${cmd}</span>
                          <span style="color:#d4d4d4;margin-left:24px;">${desc}</span>`;
			terminalContent.insertBefore(line, inputLine);
		});
		// Add a blank line after help
		const blankLine = document.createElement('div');
		blankLine.className = 'terminal-line';
		blankLine.innerHTML = '&nbsp;';
		terminalContent.insertBefore(blankLine, inputLine);

		// Scroll to bottom
		terminalContent.scrollTop = terminalContent.scrollHeight;
	} else if (input.trim().toLowerCase() === 'date') {
		const today = new Date();
		const dateStr = today.toLocaleDateString();
		addOutput(`<span>Date: <span style="color:orange">${dateStr}</span></span>`);
	} else if (input.trim().toLowerCase() === 'time') {
		const now = new Date();
		const timeStr = now.toLocaleTimeString();
		addOutput(`<span>Time: <span style="color:orange">${timeStr}</span></span>`);
	} else if (input.trim().toLowerCase() === 'about') {
		addOutput(
			`<span>Shery OS Terminal &copy; 2025. <span style="color:orange">Made by Asad Ali</span></span>`
		);
	} else if (input.trim().toLowerCase().startsWith('mkdir')) {
		const folderName = input.split(' ')[1];
		addItem(folderName, 'assets/images/folder.png', 'folder');
		addOutput(`<span>Directory created: <span style="color:orange">${folderName}</span></span>`);
	} else if (input.trim().toLowerCase().startsWith('mknote')) {
		const noteName = input.split(' ')[1];
		addItem(noteName, 'assets/images/note.png', 'note');
		addOutput(`<span>Note created: <span style="color:orange">${noteName}</span></span>`);
	} else if (input.trim().toLowerCase().startsWith('print')) {
		const message = input.split(' ').slice(1).join(' ');
		addOutput(`<span><span style="color:orange">${message}</span></span>`);
	} else {
		addOutput(`<span class="terminal-error">Command not found: ${input}</span>`);
	}
}
