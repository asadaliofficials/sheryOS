document.addEventListener('DOMContentLoaded', () => {
	const loadingAR = document.querySelector('.loadingAR');
	let dots = 1;
	setInterval(() => {
		if (dots > 3) {
			loadingAR.innerHTML = 'Loading all resources';
			dots = 1;
		}
		loadingAR.innerHTML += '.';
		dots++;
	}, 300);
	let allLoaded = false;
	const startTime = Date.now();
	requestAnimationFrame(() => {
		function addStylesheet(href) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			document.head.appendChild(link);
			return new Promise(res => (link.onload = res));
		}
		const cssPromises = [
			addStylesheet('assets/css/main.css'),
			addStylesheet('assets/css/apps.styles.css'),
		];
		Promise.all(cssPromises).then(() => {
			import('./index.htmlCode.js').then(module => {
				document.querySelector('.main').innerHTML = module.default();
				const jsFiles = [
					'assets/js/data.js',
					'assets/js/desktop.js',
					'assets/js/desktop_events.js',
					'assets/js/taskbar.js',
					'assets/js/taskbar-icon-control.js',
					'assets/js/taskbar-search.js',
				];
				const jsPromises = jsFiles.map(src => {
					return new Promise(res => {
						const script = document.createElement('script');
						script.type = 'module';
						script.src = src;
						script.onload = res;
						document.body.appendChild(script);
					});
				});
				Promise.all(jsPromises).then(() => {
					allLoaded = true;
				});
			});
		});
	});
	const loaderInterval = setInterval(() => {
		const elapsed = Date.now() - startTime;
		if (allLoaded && elapsed >= 3000) {
			const loader = document.querySelector('.win-loader');
			const container = document.querySelector('.loader__container');
			loader.classList.add('fade-out');
			if (container) container.classList.add('fade-out');
			loader.addEventListener(
				'animationend',
				() => {
					loader.style.display = 'none';
				},
				{ once: true }
			);
			clearInterval(loaderInterval);
		}
	}, 100);
});

document.querySelector('.win-loader').addEventListener('contextmenu', e => {
	e.preventDefault();
});
