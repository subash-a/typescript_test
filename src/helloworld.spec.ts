import {helloworld} from "./helloworld";

describe("Person", () => {
	describe("with a constructor", () => {
		it("should create a new instance without throwing error", () => {
			expect(() => new helloworld.Person()).not.toThrow();
		});

		describe("with a new instance", () => {

			let person: helloworld.Person;

			beforeEach(() => {
				person = new helloworld.Person();
			});

			it("should have a known starting state", () => {
				expect(person.getName()).toEqual("");
				expect(person.getEmail()).not.toBeDefined();
				expect(person.getMobile()).not.toBeDefined();
				expect(person.getContactCase()).toEqual(0);
			});

			describe("with a known starting state", () => {
				describe("setName", () => {
					it("should set to default value when undefined is passed", () => {
						person.setName(undefined);
						expect(person.getName()).toEqual("");
					});
					it("should set default value when null is passed", () => {
						person.setName(null);
						expect(person.getName()).toEqual("");
					});
				});
				describe("setEmail", () => {
					it("should set to default value when undefined is passed", () => {
						person.setEmail(undefined);
						expect(person.getEmail()).not.toBeDefined();
					});
					xit("should set to default value when null is passed", () => {
						person.setEmail(null);
						expect(person.getEmail()).not.toBeDefined();
					});
				});
				describe("setMobile", () => {
					it("should set to undefined when undefined is passed", () => {
						person.setMobile(undefined);
						expect(person.getMobile()).not.toBeDefined();
					});
					xit("should set to undefined when null is passed", () => {
						person.setMobile(null);
						expect(person.getMobile()).not.toBeDefined();
					});
				});
				describe("getName", () => {
					it("should return empty string when no value is set", () => {
						expect(person.getName()).toEqual("");
					});
					it("should return string when it is set", () => {
						person.setName("modelogiq");
						expect(person.getName()).toEqual("modelogiq");
					});
				});
				describe("getEmail", () => {
					it("should return undefined when value is not set", () => {
						expect(person.getEmail()).not.toBeDefined();
					});
					it("should return string when value is set", () => {
						person.setEmail("frontend@modelogiq.com");
						expect(person.getEmail()).toEqual("frontend@modelogiq.com");
					});
				});
				describe("getMobile", () => {
					it("should return undefined when value is not set", () => {
						expect(person.getMobile()).not.toBeDefined();
					});
					it("should return number when value is set", () => {
						person.setMobile(9000000000);
						expect(person.getMobile()).toEqual(9000000000);
					});
				});
			});
		});
	});
});
