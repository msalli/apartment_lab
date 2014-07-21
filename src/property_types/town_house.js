var Property = require("./property");
var Inherit = require("./../inherit.js");

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.unit = 1;
  this.tenantSet = false;
};

//when i set a tenant, also change tenantSet to true

Inherit(TownHouse, Property);


TownHouse.prototype.available = function(){
  // if it has a tenant it should not be available

};

module.exports = TownHouse;
