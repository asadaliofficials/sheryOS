export default function flappyBirdJS(container) {
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
