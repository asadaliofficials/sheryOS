export default function recycleBinJS(container) {
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
