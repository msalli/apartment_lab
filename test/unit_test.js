var expect = require("chai").expect,
  app = require("./../src/main.js");
  // Unit = require("../src/unit.js"),
  // Tenant = require("./../src/people/tenant.js"),
  // Property = require("./../src/property_types/property.js");

describe("Unit", function(){
  var property = new app.Property("Harrenhal", "Harrenhal Rd.");
  var unit = new app.Unit("7", "Test", "350sqft", "$1600");
  var tenant = new app.Tenant("Sansa Stark", "888-8888");
  var ref1 = new app.Person("Joffery", "888-8888");
  var ref2 = new app.Person("Tyrion", "999,9999");
  var manager = new app.Manager("Theon Greyjoy", "555-5555");
	
  it('should construct a unit properly', function() {
    expect(unit.number).to.eql("7");
    expect(unit.building).to.eql("Test");
    expect(unit.sqft).to.eql("350sqft");
    expect(unit.rent).to.eql("$1600");
	});

  describe('#available', function() {
    it('should return true or false based on whether the unit has a tenant', function() {
      tenant.addReference(ref1);
      tenant.addReference(ref2);
      property.setManager(manager);
      property.addUnit(unit);
      property.addTenant(unit, tenant);
      expect(unit.available()).to.eql(false);
    });
  });





//last closing curly brace
});