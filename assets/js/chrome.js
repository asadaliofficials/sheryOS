export default function chromeJS(body) {
	const chromeContent = body.querySelector('.chrome-content');
	const searchForm = chromeContent.querySelector('.bing-search');
	const searchInput = chromeContent.querySelector('.bing-search-input');
	const iframeContainer = chromeContent.querySelector('.bing-iframe-container');
	const iframe = chromeContent.querySelector('.bing-iframe');

	let bingLogo = body.querySelector('.bing-logo');
	let bingSearch = body.querySelector('.bing-search');

	// Handle Bing search form submit
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
