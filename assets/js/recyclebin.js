export default function recycleBinJS(container) {
	const list = container.querySelector('.recyclebin-list');
	const emptyBtn = container.querySelector('.recyclebin-empty');
	const restoreBtn = container.querySelector('.recyclebin-restore');

	emptyBtn.addEventListener('click', () => {
		list.innerHTML = `<div style="color:#aaa;text-align:center;margin-top:40px;">Recycle Bin is empty</div>`;
	});

	restoreBtn.addEventListener('click', () => {
		// For demo, just show a message and restore the two items
		list.innerHTML = `
      <div class="recyclebin-item folder">
        <img src="assets/images/folder.png" alt="Folder" />
        <span>Temp Folder</span>
      </div>
      <div class="recyclebin-item file">
        <img src="assets/images/file.png" alt="File" />
        <span>notes.txt</span>
      </div>
    `;
	});
}
