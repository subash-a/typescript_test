import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {HelloRequest, Person, HelloReply} from "./immut_helloworld";

describe("HelloRequest", () => {
	describe("New HelloRequest", () => {
		it("should create a new instance without throwing error", () => {
			expect(() => new HelloRequest()).not.toThrow();
		});
	});

	describe("with a new instance of HelloRequest", () => {
		let request: HelloRequest;

		beforeEach(() => {
			request = new HelloRequest();
		});

		describe("SetName", () => {
			it("should throw error when undefined is passed", () => {
				expect(() => request.SetName(undefined)).toThrow();
			});
			it("should throw error when null is passed", () => {
				expect(() => request.SetName(null)).toThrow();
			});
			it("should set the name property when a valid value is passed", () => {
				let modifiedRequest = request.SetName("modelogiq");
				expect(modifiedRequest["underlying"].getName()).toEqual("modelogiq");
			});
		});

		describe("SetAge", () => {
			it("should throw error when undefined is passed", () => {
				expect(() => request.SetAge(undefined)).toThrow();
			});
			it("should throw error when null is passed", () => {
				expect(() => request.SetName(null)).toThrow();
			});
			it("should set the age property when a valid value is passed", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				expect(modifiedRequest["underlying"].getAge()).toEqual(25);
			});
		});

		describe("Name", () => {
			it("should return empty string when no value is set", () => {
				expect(request.Name).toBeDefined();
				expect(request.Name.length).toEqual(0);
			});
			it("should return value when a valid entry exists", () => {
				request["underlying"].setName("modelogiq");
				expect(request.Name).toEqual("modelogiq");
			});
			it("should return type string", () => {
				request["underlying"].setName("modelogiq");
				expect(typeof request.Name === "string").toEqual(true);
			});
		});

		describe("Age", () => {
			it("should return zero when no value is set", () => {
				expect(request.Age).toEqual(Uint64(0));
			});
			it("should return value when a valid entry exists", () => {
				request["underlying"].setAge(25);
				expect(request.Age).toEqual(Uint64(25));
			});
			it("should return type Uint64", () => {
				request["underlying"].setAge(25);
				expect(request.Age instanceof Uint64).toEqual(true);
			});
		});

		describe("Serialize", () => {
			it("should call the underlying serialize function", () => {
				spyOn(request["underlying"], "serializeBinary");
				request.Serialize();
				expect(request["underlying"].serializeBinary).toHaveBeenCalled();
			});
		});

		describe("Deserialize", () => {
			it("should call the deserialize function", () => {
				spyOn(helloworld.HelloRequest, "deserializeBinary").and.callThrough();
				let serializedSource = new Uint8Array((new HelloRequest()).Serialize());
				HelloRequest.Deserialize(serializedSource);
				expect(helloworld["HelloRequest"].deserializeBinary).toHaveBeenCalled();

			});
		});
	});
});

describe("HelloReply", () => {
	describe("New HelloReply", () => {});
	describe("SetMessage", () => {});
	describe("Serialize", () => {});
	describe("Deserialize", () => {});
	describe("Message", () => {});
});

describe("Person", () => {
	describe("New Person", () => {});
	describe("SetName", () => {});
	describe("SetEmail", () => {});
	describe("SetMobile", () => {});
	describe("ClearEmail", () => {});
	describe("ClearMobile", () => {});
	describe("Serialize", () => {});
	describe("Deserialize", () => {});
	describe("GetContactCase", () => {});
	describe("Email", () => {});
	describe("Mobile", () => {});
});
