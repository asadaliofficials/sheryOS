export default function notepadJS(container) {
	const textarea = container.querySelector('.notepad-textarea');
	const saveBtn = container.querySelector('.notepad-save');
	const clearBtn = container.querySelector('.notepad-clear');

	saveBtn.addEventListener('click', () => {
		const text = textarea.value;
		const blob = new Blob([text], { type: 'text/plain' });
		const a = document.createElement('a');
		a.href = URL.createObjectURL(blob);
		a.download = 'note.txt';
		a.click();
		URL.revokeObjectURL(a.href);
	});

	clearBtn.addEventListener('click', () => {
		textarea.value = '';
	});
}
