export default function flappyBirdJS() {
	let move_speed = 3,
		grativy = 0.5;
	let bird = document.querySelector('.bird');
	let img = document.getElementById('bird-1');
	// getting bird element properties
	let bird_props = bird.getBoundingClientRect();

	// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
	let background = document.querySelector('.background').getBoundingClientRect();

	let score_val = document.querySelector('.score_val');
	let message = document.querySelector('.message');
	let score_title = document.querySelector('.score_title');

	let game_state = 'Start';
	img.style.display = 'none';
	message.classList.add('messageStyle');

	document.addEventListener('keydown', e => {
		if (e.key == 'Enter' && game_state != 'Play') {
			// Remove all pipes
			document.querySelectorAll('.pipe_sprite').forEach(e => {
				e.remove();
			});
			// Reset bird position
			img.style.display = 'block';
			bird.style.top = '40vh';
			bird.style.left = '30vw'; // Optional: reset left if needed
			// Reset bird image
			img.src = 'assets/images/flappy-bird/Bird.png';
			// Reset score and UI
			game_state = 'Play';
			message.innerHTML = '';
			score_title.innerHTML = 'Score : ';
			score_val.innerHTML = '0';
			message.classList.remove('messageStyle');
			// Reset bird_props and background in case window size changed
			bird_props = bird.getBoundingClientRect();
			background = document.querySelector('.background').getBoundingClientRect();
			// Start the game loop again
			play();
		}
	});

	function play() {
		const gameArea = document.querySelector('.window-wrapper-body');
		const gameAreaRect = gameArea.getBoundingClientRect();

		function move() {
			if (game_state != 'Play') return;

			let pipe_sprite = document.querySelectorAll('.pipe_sprite');
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
						game_state = 'End';
						message.innerHTML =
							'Enter To Start Game<br><p><span style="color: red">&uarr;</span> ArrowUp to Control</p>';
						message.classList.add('messageStyle');
						img.style.display = 'none'; // Hide the bird
						return;
					} else {
						if (
							pipe_sprite_props.right < bird_props.left &&
							pipe_sprite_props.right + move_speed >= bird_props.left &&
							element.increase_score == '1'
						) {
							score_val.innerHTML = +score_val.innerHTML + 1;
						}
						// Calculate new left relative to game area
						let newLeft = element.offsetLeft - move_speed;
						element.style.left = newLeft + 'px';
					}
				}
			});
			requestAnimationFrame(move);
		}
		requestAnimationFrame(move);

		let bird_dy = 0;
		function apply_gravity() {
			if (game_state != 'Play') return;
			bird_dy = bird_dy + grativy;

			document.addEventListener('keydown', e => {
				if (e.key == 'ArrowUp' || e.key == ' ') {
					img.src = 'assets/images/flappy-bird/Bird-2.png';
					bird_dy = -7.6;
				}
			});

			document.addEventListener('keyup', e => {
				if (e.key == 'ArrowUp' || e.key == ' ') {
					img.src = 'assets/images/flappy-bird/Bird.png';
				}
			});

			// Move bird relative to the game area
			let newTop = bird.offsetTop + bird_dy;
			// Only clamp at top, not at bottom
			if (newTop < 0) newTop = 0;
			bird.style.top = newTop + 'px';
			bird_props = bird.getBoundingClientRect();

			// End game if bird touches top or bottom of game area
			if (bird_props.top <= gameAreaRect.top || bird_props.bottom >= gameAreaRect.bottom) {
				game_state = 'End';
				message.innerHTML =
					'Enter To Start Game<br><p><span style="color: red">&uarr;</span> ArrowUp to Control</p>';
				message.classList.add('messageStyle');
				img.style.display = 'none'; // Hide the bird
				// Optionally, clamp bird at bottom after game over
				if (bird_props.bottom >= gameAreaRect.bottom) {
					bird.style.top = gameArea.offsetHeight - bird.offsetHeight + 'px';
				}
				return;
			}

			requestAnimationFrame(apply_gravity);
		}
		requestAnimationFrame(apply_gravity);

		let pipe_seperation = 0;

		let pipe_gap = 35;

		function create_pipe() {
			if (game_state != 'Play') return;

			if (pipe_seperation > 115) {
				pipe_seperation = 0;
				let pipe_posi = Math.floor(Math.random() * 43) + 8; // in vh
				const gameAreaHeight = gameArea.offsetHeight;
				const pipeGapPx = Math.floor(gameAreaHeight * (pipe_gap / 100));
				const pipePosPx = Math.floor(gameAreaHeight * (pipe_posi / 100));

				let pipe_sprite_inv = document.createElement('div');
				pipe_sprite_inv.className = 'pipe_sprite';
				pipe_sprite_inv.style.height = Math.floor(gameAreaHeight * 0.7) + 'px'; // 70vh of game area
				pipe_sprite_inv.style.top = pipePosPx - Math.floor(gameAreaHeight * 0.7) + 'px';
				pipe_sprite_inv.style.left = gameArea.offsetWidth + 'px';
				gameArea.appendChild(pipe_sprite_inv);

				let pipe_sprite = document.createElement('div');
				pipe_sprite.className = 'pipe_sprite';
				pipe_sprite.style.height = Math.floor(gameAreaHeight * 0.7) + 'px'; // 70vh of game area
				pipe_sprite.style.top = pipePosPx + pipeGapPx + 'px';
				pipe_sprite.style.left = gameArea.offsetWidth + 'px';
				pipe_sprite.increase_score = '1';
				gameArea.appendChild(pipe_sprite);
			}
			pipe_seperation++;
			requestAnimationFrame(create_pipe);
		}
		requestAnimationFrame(create_pipe);
	}
}
