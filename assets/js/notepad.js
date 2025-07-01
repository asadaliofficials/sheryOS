export default function notepadJS(container, item, desktopItems) {
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
