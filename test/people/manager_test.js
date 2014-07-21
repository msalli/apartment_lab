var expect = require("chai").expect,
	Manager = require("../../src/people/manager.js");

	describe('Manager', function() {
		it('should construct a new manager', function() {
			var manager = new Manager("Queen Cersei", "555-5555");
			expect(manager.name).to.equal("Queen Cersei");
			expect(manager.contact).to.equal("555-5555");
		});
	});

	describe('#addProperty', function() {
		it('should add new proprerty to the properties array', function() {			
			var manager = new Manager("Queen Cersei", "555-5555");
			manager.addProperty("Casterly Rock");
			expect(manager.properties).to.eql(["Casterly Rock"]);
		});	
});

	describe('#removeProperty', function() {
		it('should remove specified property from properties array', function() {
			var manager = new Manager("Queen Cersei", "555-5555");
			// var properties = ["Harrenhal", "Kings Landing", "Casterly Rock"];
			manager.removeProperty("Kings Landing");
			expect(manager.properties).to.eql([]);
		})
	})