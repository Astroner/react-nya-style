var csser = require('nya-style/lib/getCssString');


var store = {};

function descriptor(react) {
	return function (name, key) {
		if (!react) {
			console.error("Empty argument list at "+name);
			return ""
		}
		if (!store[react.name]) {
			console.error("Unkhown name \"" + react.name + '"');
			return;
		}
		return csser({ 
			selector: key, 
			rules: store[react.name] 
		})
	}
}

function setToStore(name, styles) {
	return store[name] = styles;
}

module.exports = descriptor;

module.exports.setToStore = setToStore;