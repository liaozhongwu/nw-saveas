'use strict'

module.exports = function saveAs (defaultFileName) {
	defaultFileName = defaultFileName || '';
	return new Promise((resolve, reject) => {
		const file = window.document.createElement('input');
		file.type = 'file';
		file.style = 'display: none;';
		file.setAttribute('nwsaveas', defaultFileName);
		window.document.body.appendChild(file);
		file.onchange = () => resolve(file.value);
		file.oncancel = () => reject('cancel');
		file.click();
	});
};
