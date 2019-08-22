var setToStore = require('./descriptor.js').setToStore;

var obj = {};

function getEm() {
	return obj;
}

function useNya(styles, component) {
	if (!styles || typeof(styles)!=="object" || !component) {
		console.error('invalid arguments in useNya()');
		return
	}
	setToStore(component.name, styles)
	return component
}

function addRoot(name, styles) {
	if (!name || !styles || typeof(styles)!=="object") {
		console.error('invalid arguments in addRoot()');
		return
	}
	obj[name] = styles;
}


exports.getEm = getEm;
exports.useNya = useNya;
exports.addRoot = addRoot;
