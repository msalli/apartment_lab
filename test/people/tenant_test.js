var expect = require("chai").expect,
	Tenant = require("../../src/people/tenant.js");


	describe("Tenant", function() {
		it("should construct a new tenant", function() {
			var tenant = new Tenant("Taylor", "777-7777");
			expect(tenant.name).to.equal("Taylor");
			expect(tenant.contact).to.equal("777-7777");
		});
	});

	describe("#addReference", function() {
		it("should add new name to reference array", function() {
			var tenant = new Tenant("Rob Stark", "000-0000");
			tenant.addReference("Walder Frey");
			expect(tenant.references).to.eql(["Walder Frey"]);
		});
	});