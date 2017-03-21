'use strict'
module.exports = saveAs(defaultFileName) {
	defaultFileName = defaultFileName || '';
	return new Promise((resolve, reject) => {
		const file = document.createElement('input');
		file.type = 'file';
		file.style = 'display: none;';
		file.setAttribute('nwsaveas', defaultFileName);
		document.body.appendChild(file);
		file.onchange = () => resolve(file.value);
		file.oncancel = () => reject('cancel');
		file.click();
	});
};
