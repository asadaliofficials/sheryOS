import { addItem } from './data.js';

// terminalJS Code
export function terminalJS(container) {
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
				onEnter(input, newTerminalContent, () => initInput(newContainer));
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

	const commandLine = document.createElement('div');
	commandLine.className = 'terminal-line';
	commandLine.innerHTML = `<span class="terminal-path">C:\\Users\\Asad Ali&gt;</span> <span style="color:orange">${input}</span>`;
	terminalContent.insertBefore(commandLine, inputLine);

	const addOutput = msg => {
		const outputLine = document.createElement('div');
		outputLine.className = 'terminal-line';
		outputLine.innerHTML = msg;
		terminalContent.insertBefore(outputLine, inputLine);

		const blankLine = document.createElement('div');
		blankLine.className = 'terminal-line';
		blankLine.innerHTML = '&nbsp;';
		terminalContent.insertBefore(blankLine, inputLine);

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

		const blankLine = document.createElement('div');
		blankLine.className = 'terminal-line';
		blankLine.innerHTML = '&nbsp;';
		terminalContent.insertBefore(blankLine, inputLine);

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
		addItem(noteName, 'assets/images/note.png', 'notepad');
		addOutput(`<span>Note created: <span style="color:orange">${noteName}</span></span>`);
	} else if (input.trim().toLowerCase().startsWith('print')) {
		const message = input.split(' ').slice(1).join(' ');
		addOutput(`<span><span style="color:orange">${message}</span></span>`);
	} else {
		addOutput(`<span class="terminal-error">Command not found: ${input}</span>`);
	}
}

// calculatorJS Code

export function calculatorJS() {
	let input = document.getElementById('inputBox');
	let buttons = document.querySelectorAll('button');

	let string = '';
	let arr = Array.from(buttons);
	arr.forEach(button => {
		button.addEventListener('click', e => {
			if (e.target.innerHTML == '=') {
				string = eval(string);
				input.value = string;
			} else if (e.target.innerHTML == 'AC') {
				string = '';
				input.value = string;
			} else if (e.target.innerHTML == 'DEL') {
				string = string.substring(0, string.length - 1);
				input.value = string;
			} else {
				string += e.target.innerHTML;
				input.value = string;
			}
		});
	});
}

// Chrome JS Code
export function chromeJS(body) {
	const chromeContent = body.querySelector('.chrome-content');
	const searchForm = chromeContent.querySelector('.bing-search');
	const searchInput = chromeContent.querySelector('.bing-search-input');
	const iframeContainer = chromeContent.querySelector('.bing-iframe-container');
	const iframe = chromeContent.querySelector('.bing-iframe');

	let bingLogo = body.querySelector('.bing-logo');
	let bingSearch = body.querySelector('.bing-search');

	searchForm.addEventListener('submit', e => {
		e.preventDefault();
		bingLogo.style.display = 'none';
		bingSearch.style.display = 'none';
		const query = encodeURIComponent(searchInput.value.trim());
		if (query) {
			iframe.src = `https://www.bing.com/search?q=${query}`;
			iframeContainer.style.display = 'block';
			searchInput.blur();
			iframe.onload = function () {
				try {
					const links = iframe.contentDocument.querySelectorAll('a[target="_blank"]');
					links.forEach(link => {
						link.setAttribute('target', '_self');
						link.removeAttribute('rel');
						link.addEventListener('click', function (e) {
							e.preventDefault();
							iframe.src = link.href;
						});
					});
				} catch (e) {}
			};
		}
	});
	const addressInput = body.querySelector('.bing-input');
	addressInput.addEventListener('keydown', e => {
		if (e.key === 'Enter') {
			const query = encodeURIComponent(addressInput.value.trim());
			if (query) {
				bingLogo.style.display = 'none';
				bingSearch.style.display = 'none';
				setTimeout(() => {
					addressInput.value = '';
				}, 500);
				iframe.src = `https://www.bing.com/search?q=${query}`;
				iframeContainer.style.display = 'block';
				iframe.onload = function () {
					try {
						const links = iframe.contentDocument.querySelectorAll('a[target="_blank"]');
						links.forEach(link => {
							link.setAttribute('target', '_self');
							link.removeAttribute('rel');
							link.addEventListener('click', function (e) {
								e.preventDefault();
								iframe.src = link.href;
							});
						});
					} catch (e) {}
				};
			}
		}
	});
}

// clipboard js code
export let clipboardItem = null;
export let clipboardAction = null;
export let clipboardSourceId = null;

export function setClipboard(item, action) {
	clipboardItem = item;
	clipboardAction = action;
	clipboardSourceId = action === 'cut' ? item.id : null;
}

export function clearClipboard() {
	clipboardItem = null;
	clipboardAction = null;
	clipboardSourceId = null;
}

// flappyJS Code

export function flappyBirdJS(container) {
	let move_speed = 3,
		grativy = 0.5;
	let bird = container.querySelector('.bird');
	let img = container.querySelector('#bird-1');
	let score_val = container.querySelector('.score_val');
	let message = container.querySelector('.message');
	let score_title = container.querySelector('.score_title');

	let game_state = 'Start';
	img.style.display = 'none';
	message.classList.add('messageStyle');

	let bird_dy = 0;
	let animationIds = [];
	let pipe_seperation = 0;
	let pipe_gap = 35;

	// Remove all pipes
	function removePipes() {
		container.querySelectorAll('.pipe_sprite').forEach(e => e.remove());
	}

	// Game loop functions
	function move() {
		if (game_state != 'Play') return;
		let pipe_sprite = container.querySelectorAll('.pipe_sprite');
		let bird_props = bird.getBoundingClientRect();
		const gameArea = container;
		const gameAreaRect = gameArea.getBoundingClientRect();

		pipe_sprite.forEach(element => {
			let pipe_sprite_props = element.getBoundingClientRect();
			bird_props = bird.getBoundingClientRect();

			if (pipe_sprite_props.right <= 0) {
				element.remove();
			} else {
				if (
					bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width &&
					bird_props.left + bird_props.width > pipe_sprite_props.left &&
					bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height &&
					bird_props.top + bird_props.height > pipe_sprite_props.top
				) {
					gameOver();
					return;
				} else {
					if (
						pipe_sprite_props.right < bird_props.left &&
						pipe_sprite_props.right + move_speed >= bird_props.left &&
						element.increase_score == '1'
					) {
						score_val.innerHTML = +score_val.innerHTML + 1;
					}
					let newLeft = element.offsetLeft - move_speed;
					element.style.left = newLeft + 'px';
				}
			}
		});
		animationIds[0] = requestAnimationFrame(move);
	}

	function apply_gravity() {
		if (game_state != 'Play') return;
		bird_dy = bird_dy + grativy;

		let newTop = bird.offsetTop + bird_dy;
		const gameArea = container;
		const gameAreaRect = gameArea.getBoundingClientRect();

		if (newTop < 0) newTop = 0;
		bird.style.top = newTop + 'px';
		let bird_props = bird.getBoundingClientRect();

		if (bird_props.top <= gameAreaRect.top || bird_props.bottom >= gameAreaRect.bottom) {
			gameOver();
			if (bird_props.bottom >= gameAreaRect.bottom) {
				bird.style.top = gameArea.offsetHeight - bird.offsetHeight + 'px';
			}
			return;
		}
		animationIds[1] = requestAnimationFrame(apply_gravity);
	}

	function create_pipe() {
		if (game_state != 'Play') return;
		const gameArea = container;
		const gameAreaHeight = gameArea.offsetHeight;

		if (pipe_seperation > 115) {
			pipe_seperation = 0;
			let pipe_posi = Math.floor(Math.random() * 43) + 8; // in vh
			const pipeGapPx = Math.floor(gameAreaHeight * (pipe_gap / 100));
			const pipePosPx = Math.floor(gameAreaHeight * (pipe_posi / 100));

			let pipe_sprite_inv = document.createElement('div');
			pipe_sprite_inv.className = 'pipe_sprite';
			pipe_sprite_inv.style.height = Math.floor(gameAreaHeight * 0.7) + 'px';
			pipe_sprite_inv.style.top = pipePosPx - Math.floor(gameAreaHeight * 0.7) + 'px';
			pipe_sprite_inv.style.left = gameArea.offsetWidth + 'px';
			gameArea.appendChild(pipe_sprite_inv);

			let pipe_sprite = document.createElement('div');
			pipe_sprite.className = 'pipe_sprite';
			pipe_sprite.style.height = Math.floor(gameAreaHeight * 0.7) + 'px';
			pipe_sprite.style.top = pipePosPx + pipeGapPx + 'px';
			pipe_sprite.style.left = gameArea.offsetWidth + 'px';
			pipe_sprite.increase_score = '1';
			gameArea.appendChild(pipe_sprite);
		}
		pipe_seperation++;
		animationIds[2] = requestAnimationFrame(create_pipe);
	}

	function gameOver() {
		game_state = 'End';
		message.innerHTML =
			'Enter To Start Game<br><p><span style="color: red">&uarr;</span> ArrowUp to Control</p>';
		message.classList.add('messageStyle');
		img.style.display = 'none';
		animationIds.forEach(id => cancelAnimationFrame(id));
	}

	// Only add these listeners once
	if (!container._flappyListenersAdded) {
		container.addEventListener('keydown', e => {
			if (game_state == 'Play' && (e.key == 'ArrowUp' || e.key == ' ')) {
				img.src = 'assets/images/flappy-bird/Bird-2.png';
				bird_dy = -7.6;
			}
			if (e.key == 'Enter' && game_state != 'Play') {
				// Reset game
				removePipes();
				img.style.display = 'block';
				bird.style.top = '40vh';
				bird.style.left = '30vw';
				img.src = 'assets/images/flappy-bird/Bird.png';
				game_state = 'Play';
				message.innerHTML = '';
				score_title.innerHTML = 'Score : ';
				score_val.innerHTML = '0';
				message.classList.remove('messageStyle');
				bird_dy = 0;
				pipe_seperation = 0;
				animationIds.forEach(id => cancelAnimationFrame(id));
				move();
				apply_gravity();
				create_pipe();
			}
		});
		container.addEventListener('keyup', e => {
			if (game_state == 'Play' && (e.key == 'ArrowUp' || e.key == ' ')) {
				img.src = 'assets/images/flappy-bird/Bird.png';
			}
		});
		container._flappyListenersAdded = true;
	}
}

// notepad JS code
export function notepadJS(container, item, desktopItems) {
	const textarea = container.querySelector('.notepad-textarea');
	const saveBtn = container.querySelector('.notepad-save');
	const clearBtn = container.querySelector('.notepad-clear');

	if (item.value != '' && item.value !== undefined) {
		textarea.value = item.value;
	}

	saveBtn.addEventListener('click', () => {
		item.value = textarea.value;

		const updateValue = items => {
			for (let i = 0; i < items.length; i++) {
				if (items[i].id === item.id) {
					items[i].value = textarea.value;
					return true;
				}
				if (items[i].childrens && items[i].childrens.length) {
					if (updateValue(items[i].childrens)) return true;
				}
			}
			return false;
		};
		updateValue(desktopItems);

		saveBtn.innerHTML = 'saved';
		saveBtn.disabled = true;
		localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
		setTimeout(() => {
			saveBtn.disabled = false;
			saveBtn.innerHTML = 'save';
		}, 1000);
	});

	clearBtn.addEventListener('click', () => {
		textarea.value = '';
		item.value = '';
		const updateValue = items => {
			for (let i = 0; i < items.length; i++) {
				if (items[i].id === item.id) {
					items[i].value = '';
					return true;
				}
				if (items[i].childrens && items[i].childrens.length) {
					if (updateValue(items[i].childrens)) return true;
				}
			}
			return false;
		};
		updateValue(desktopItems);
		localStorage.setItem('desktopItems', JSON.stringify(desktopItems));
	});
}

// recyclebin js code
export function recycleBinJS(container) {
	const list = container.querySelector('.folder-content');
	const emptyBtn = container.querySelector('.recyclebin-empty');
	const restoreBtn = container.querySelector('.recyclebin-restore');

	emptyBtn.addEventListener('click', () => {
		list.innerHTML = `<div style="color:#aaa;text-align:center;margin-top:40px;">Recycle Bin is empty</div>`;
	});

	restoreBtn.addEventListener('click', () => {
		alert('Function logic is under construction.');
	});
}
