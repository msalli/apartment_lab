var expect = require("chai").expect,
  Person = require("../../src/people/person.js");


describe("Person", function(){
  var me = new Person("Alli", "000-0000");
  // var reference1 = new Person("Bob", "999-9999");
  // var reference2 = new Person("Fred", "999-9999");
  
  it("should construct a new person", function(){
  	expect(me.name).to.equal("Alli");
  	expect(me.contact).to.equal("000-0000");
  });  
});

