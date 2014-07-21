var expect = require("chai").expect,
    app = require("../../src/main.js");


describe('Property', function() {
	var property = new app.Property("House Stark", "1900 The North");
	var manager = new app.Manager("Theon Greyjoy", "555-5555");
	var tenant = new app.Tenant("Bran Stark", "555-5555");
	var unit = new app.Unit("One", "Tower", "500sqft", "$1500");
	var unit2 = new app.Unit("Two", "Tower", "550sqft", "$1500");
	var unit3 = new app.Unit("Three", "Tower", "700sqft", "$2000");
	var ref1 = new app.Person("Joffery", "888-8888");
	var ref2 = new app.Person("Tyrion", "999,9999");

	describe('create property', function() {
		it('should construct a new property', function() {
		});
		expect(property.address).to.eql("1900 The North");
	});
		
	describe('#setManager', function() {
		it('should set this manager to the person passed through the function', function() {
			property.setManager(manager);
			return property.manager;
			expect(property.manager).to.eql("Theon Greyjoy");
		});

		it('should return true if manager is set', function() {
			property.setManager(manager);
			expect(property.managerSet).to.eql(true);
		});
	});

	//not sure what to do, because i am not passing this anything
	describe('#getManager', function() {
		it('should return the manager associated with the property', function() {
			property.getManager();
			return property.manager;
			expect(property.getManager()).to.eql("Theon Greyjoy");
		});
	});

	describe('#addUnit', function() {
		it('should add unit name to the unit array', function() {
			property.addUnit(unit.number);
			expect(property.units).to.eql(["One"]);
		});
	});

	describe('#addTenant', function() {
		it('should add tenant name to the property, if tenant has references, and unit has a manager', function() {
			tenant.addReference(ref1);
			tenant.addReference(ref2);
			property.setManager(manager);
			property.addTenant(unit, tenant);
			expect(unit.tenant).to.eql(tenant);	
			});
	});

	describe('#removeTenant', function() {
		it('should remove tenant name from unit', function() {
			tenant.addReference(ref1);
			tenant.addReference(ref2);
			property.setManager(manager);
			property.addTenant(unit, tenant);
			property.removeTenant(unit, tenant);
			expect(unit.tenant).to.eql(null)
		});
	});

	describe('#availableUnits', function() {
		it('should return the number of empty units', function() {
			// tenant.addReference(ref1);
			// tenant.addReference(ref2);
			property.setManager(manager);
			property.addUnit(unit);
			property.addUnit(unit2);
			property.addUnit(unit3);
			// property.addTenant(unit, tenant);
			expect(property.availableUnits()).to.eql(3);
		})
	})

//final brackets for describe Property function
});



