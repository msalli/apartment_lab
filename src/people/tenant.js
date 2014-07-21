var Person = require("./person.js");
var Inherit = require("./../inherit.js");

function Tenant(name, contact) {
	this.name = name;
	this.contact = contact;
	//set in prototype
  this.references = [];
};

Inherit(Tenant, Person);

Tenant.prototype.addReference = function(reference){
	return this.references.push(reference);
	console.log(this.name + " has " + reference + "as a new reference!");
};


module.exports = Tenant;
