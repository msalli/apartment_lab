var Property = require("./property");
var Inherit = require("./../inherit.js");

function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address;
  this.units = [];
}

Inherit(Duplex, Property);



module.exports = Duplex;

