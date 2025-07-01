setTimeout(() => {
	const loader = document.querySelector('.win-loader');
	loader.classList.add('fade-out');
	loader.addEventListener(
		'animationend',
		() => {
			loader.style.display = 'none';
		},
		{ once: true }
	);
}, 3000);
