var app = require("../../src/main.js");
var Tenant = require("./../people/tenant.js");


function Property(name, address) {
  this.property = name;
  this.address = address;
  
  this.manager = {};
  this.managerSet = false;
  this.units = [{
    "unit number": 0, 
    "tenant": 
  }];
}

Property.prototype.setManager = function(person) {
  this.manager = person;
  this.managerSet = true;
  // console.log(this.manager + " is now the manager of " + this.address);
};

Property.prototype.getManager = function() {
  return this.manager;

};

Property.prototype.addUnit = function(unitName) {
  this.units.push(unitName);

} 

Property.prototype.addTenant = function(unit, tenant) {
  if (this.managerSet === true && tenant.references.length >= 2){
     //UNUSED CODE
     // var unitIndex = this.units.indexOf(unit);
     // this.units[unitIndex]SOMETHING MISSING HERE = tenant;
     // this.units.push({"unit": unit, "tenant": tenant});
     unit.tenant = tenant;

     // console.log(unit.tenant + " now lives at " + this.building);

  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
    unit.tenant = null;
    // console.log(tenant + "has been removed as the tenant for " + property.name + ", " + unit.number);
};

//NOT WORKING
Property.prototype.availableUnits = function(){
  // return num of units available
  var status = Unit.available();
  for(var i = 0, count; i < this.units.length; i++) {
    count = 0;
    if(status(this.units[i]) = true) {
    count++;
    }
  }
  return count; 

  // var count = 0;
  // for(var i = 0; i < this.units.length; i++) {
  //   if(unit.available(this.units[i]) === true) {
  //     count++;
  //   }
  //   return count;
  // }
};

Property.prototype.rentedUnits = function(){
  // return rented units
  var rented = 0;
  for(var i = 0; i < this.units.length; i++) {
    if(this.units[i].available !== null) {
      rented++;
    }
    return rented;
  }
}


module.exports = Property;
