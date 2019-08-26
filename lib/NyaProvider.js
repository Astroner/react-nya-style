var React = require('react');
var Nyas = require('./useNya.js');
var descriptor = require('./descriptor.js');

var e = React.createElement;

function Provider(props) {
	React.Component.call(this, props);
	this.nya = props.nya;
	this.nya.use("load", descriptor);
}

Provider.prototype = Object.create(React.Component.prototype);
Provider.prototype.constructor = React.Component;

Provider.prototype.componentDidMount = function() {
	var sts = document.createElement('style');
	sts.innerHTML = this.nya.setRules(Nyas.getEm()).parse();
	document.head.appendChild(sts);
};

Provider.prototype.render = function() {
	return this.props.children
};

module.exports = Provider;