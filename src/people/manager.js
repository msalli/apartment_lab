var Person = require("./person");
var Inherit = require("./../inherit.js");

function Manager(name, contact) {
  this.name = name;
  this.contact = contact;  
  this.properties = [];
}

Inherit(Manager, Person);

Manager.prototype.addProperty = function(property) {
  this.properties.push(property);
  // console.log(this.name + " now owns " + property + "!");
};

Manager.prototype.removeProperty = function(property) {
  for (var i = 0; i < this.properties.length; i++) {
  	if (this.properties[i] === property) {
  		this.properties.splice(i, 1);
  		// console.log(property + "has been removed.");
  	}
  }
};

var manager1 = new Manager("Queen Cersei", "888-888-8888")


module.exports = Manager;