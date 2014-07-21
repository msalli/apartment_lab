var Property = require("./property.js");
var Inherit = require("./../inherit.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name;
  this.address = address;
  this.units = []
}

Inherit(ApartmentBuilding, Property);


module.exports = ApartmentBuilding;