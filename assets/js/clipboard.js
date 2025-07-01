export let clipboardItem = null;
export let clipboardAction = null;
export let clipboardSourceId = null;

export function setClipboard(item, action) {
	clipboardItem = item;
	clipboardAction = action;
	clipboardSourceId = action === 'cut' ? item.id : null;
}

export function clearClipboard() {
	clipboardItem = null;
	clipboardAction = null;
	clipboardSourceId = null;
}
