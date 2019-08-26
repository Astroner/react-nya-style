var setToStore = require('./descriptor.js').setToStore;

var obj = {};

function getEm() {
	return obj;
}

function saveStyle(styles, name) {
	if (!styles || typeof(styles)!=="object" || !name) {
		console.error('invalid arguments in saveStyle()');
		return
	}
	setToStore(name, styles)
}

function rootStyle(name, styles) {
	if (!name || !styles || typeof(styles)!=="object") {
		console.error('invalid arguments in rootStyle()');
		return
	}
	obj[name] = styles;
}


exports.getEm = getEm;
exports.saveStyle = saveStyle;
exports.rootStyle = rootStyle;
