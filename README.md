# nw-saveas

## Install
	
	npm install nw-saveas
	
## Usage
	
```js
// use in webpack
import saveas from 'nw-saveas';

saveas('filename').then(filepath => {
	fs.writeFile(filepath, 'test', err => console.error(err));
});
```
