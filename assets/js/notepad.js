export default function notepadJS(container, item) {
	const textarea = container.querySelector('.notepad-textarea');
	const saveBtn = container.querySelector('.notepad-save');
	const clearBtn = container.querySelector('.notepad-clear');

	// Show value if present
	if (item.value != '' && item.value !== undefined) {
		textarea.value = item.value;
	}

	saveBtn.addEventListener('click', () => {
		// Update the value in the data structure
		item.value = textarea.value;
		saveBtn.innerHTML = 'saved';
		saveBtn.disabled = true;
		setTimeout(() => {
			saveBtn.disabled = false;
			saveBtn.innerHTML = 'save';
		}, 1000);
	});

	clearBtn.addEventListener('click', () => {
		textarea.value = '';
	});
}
