import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {HelloRequest, Person, HelloReply, PROTOBUF_DEFAULT_NORMAL_STRING, PROTOBUF_DEFAULT_NORMAL_UINT64, PROTOBUF_DEFAULT_ONEOF_STRING, PROTOBUF_DEFAULT_ONEOF_UINT64} from "./immut_helloworld";

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

		describe("with a known starting state", () => {
			it("should have appropriate values set", () => {
				expect(request.Name).toEqual("");
				expect(request.Age).toEqual(Uint64(0));
			});
		});

		describe("SetName", () => {
			it("should not mutate the original instance when new value is set", () => {
				let modifiedRequest = request.SetName("modelogiq");
				expect(modifiedRequest).not.toBe(request);
				expect(request["underlying"].getName()).toEqual("");
				expect(modifiedRequest["underlying"].getName()).toEqual("modelogiq");
			});

			it("should return the original instance when undefined value is passed", () => {
				let modifiedRequest = request.SetName(undefined);
				expect(modifiedRequest).toBe(request);
				expect(request["underlying"].getName()).toEqual("");
				expect(modifiedRequest["underlying"].getName()).toEqual("");
			});

			it("should return the same instance when value is not modified", () => {
				let modifiedRequest = request.SetName("modelogiq");
				let modifiedAgainRequest = modifiedRequest.SetName("modelogiq");
				expect(modifiedAgainRequest).toBe(modifiedRequest);
				expect(modifiedAgainRequest["underlying"].getName()).toEqual("modelogiq");
				expect(modifiedRequest["underlying"].getName()).toEqual("modelogiq");
			});

			it("should not modify default value when undefined is passed", () => {
				expect(() => request.SetName(undefined)).not.toThrow();
				expect(request["underlying"].getName()).toEqual("");
			});
			it("should not modify default value when null is passed", () => {
				expect(() => request.SetName(null)).not.toThrow();
				expect(request["underlying"].getName()).toEqual("");
			});
			it("should set the name property when a valid value is passed", () => {
				let modifiedRequest = request.SetName("modelogiq");
				expect(modifiedRequest["underlying"].getName()).toEqual("modelogiq");
			});
		});

		describe("SetAge", () => {
			it("should not mutate the original instance when new value is set", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				expect(modifiedRequest).not.toBe(request);
				expect(request["underlying"].getAge()).toEqual(0);
				expect(modifiedRequest["underlying"].getAge()).toEqual(25);
			});

			it("should return the original instance when undefined value is passed", () => {
				let modifiedRequest = request.SetAge(undefined);
				expect(modifiedRequest).toBe(request);
				expect(request["underlying"].getAge()).toEqual(0);
				expect(modifiedRequest["underlying"].getAge()).toEqual(0);
			});

			it("should return the same instance when value is not modified", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				let modifiedAgainRequest = modifiedRequest.SetAge(Uint64(25));
				expect(modifiedAgainRequest).toBe(modifiedRequest);
				expect(modifiedAgainRequest["underlying"].getAge()).toEqual(25);
				expect(modifiedRequest["underlying"].getAge()).toEqual(25);
			});

			it("should not modify the default value when undefined is passed", () => {
				let modifiedRequest = request.SetAge(undefined);
				expect(modifiedRequest["underlying"].getAge()).toEqual(0);
			});
			it("should not modify the default value when null is passed", () => {
				let modifiedRequest = request.SetAge(null);
				expect(modifiedRequest["underlying"].getAge()).toEqual(0);
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

	describe("New HelloReply", () => {
		it("should not throw an error when creating a new instance", () => {
			expect(() => new HelloReply()).not.toThrow();
		});
	});

	describe("with a new HelloReply instance", () => {
		let reply: HelloReply;

		beforeEach(() => {
			reply = new HelloReply();
		});

		describe("with a known starting state", () => {

			it("should have appropriate values set", () => {
				expect(reply.Message).toEqual("");
			});

			describe("SetMessage", () => {
				it("should not mutate the original instance when new value is set", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					expect(modifiedReply).not.toBe(reply);
					expect(reply["underlying"].getMessage()).toEqual("");
					expect(modifiedReply["underlying"].getMessage()).toEqual("modelogiq");
				});

				it("should return the original instance when undefined value is passed", () => {
					let modifiedReply = reply.SetMessage(undefined);
					expect(modifiedReply).toBe(reply);
					expect(reply["underlying"].getMessage()).toEqual("");
					expect(modifiedReply["underlying"].getMessage()).toEqual("");
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					let modifiedAgainReply = modifiedReply.SetMessage("modelogiq");
					expect(modifiedAgainReply).toBe(modifiedReply);
					expect(modifiedAgainReply["underlying"].getMessage()).toEqual("modelogiq");
					expect(modifiedReply["underlying"].getMessage()).toEqual("modelogiq");
				});

				it("should not modify default value when undefined is passed", () => {
					let modifiedReply = reply.SetMessage(undefined);
					expect(modifiedReply["underlying"].getMessage()).toEqual("");
				});
				it("should not modify default value when null is passed", () => {
					let modifiedReply = reply.SetMessage(null);
					expect(modifiedReply["underlying"].getMessage()).toEqual("");
				});
				it("should set the name property when a valid value is passed", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					expect(modifiedReply["underlying"].getMessage()).toEqual("modelogiq");
				});
			});

			describe("Message", () => {
				it("should return empty string when no value is set", () => {
					expect(reply.Message).toBeDefined();
					expect(reply.Message.length).toEqual(0);
				});
				it("should return value when a valid entry exists", () => {
					reply["underlying"].setMessage("modelogiq");
					expect(reply.Message).toEqual("modelogiq");
				});
				it("should return type string", () => {
					reply["underlying"].setMessage("modelogiq");
					expect(typeof reply.Message === "string").toEqual(true);
				});
			});

			describe("Serialize", () => {
				it("should call the underlying serialize function", () => {
					spyOn(reply["underlying"], "serializeBinary");
					reply.Serialize();
					expect(reply["underlying"].serializeBinary).toHaveBeenCalled();
				});
			});

			describe("Deserialize", () => {
				it("should call the deserialize function", () => {
					spyOn(helloworld.HelloReply, "deserializeBinary").and.callThrough();
					let serializedSource = new Uint8Array((new HelloReply()).Serialize());
					HelloReply.Deserialize(serializedSource);
					expect(helloworld["HelloReply"].deserializeBinary).toHaveBeenCalled();
				});
			});
		});
	});
});

describe("Person", () => {

	describe("New Person", () => {
		it("should not throw error when a new instance is created", () => {
			expect(() => new Person()).not.toThrow();
		});
	});

	describe("with a new Person instance", () => {

		let person: Person;

		beforeEach(() => {
			person = new Person();
		});

		describe("with a known starting state", () => {

			it("should have appropriate values set", () => {
				expect(person.Name).toEqual("");
				expect(person.Email).not.toBeDefined();
				expect(person.Mobile).not.toBeDefined(); // This would throw error since it is trying to convert undefined into a Uint64
				expect(person.GetContactCase()).toEqual(Person.ContactCase.CONTACT_NOT_SET);
			});

			describe("SetName", () => {
				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetName("modelogiq");
					expect(modifiedPerson).not.toBe(person);
					expect(person["underlying"].getName()).toEqual("");
					expect(modifiedPerson["underlying"].getName()).toEqual("modelogiq");
				});

				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetName(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person["underlying"].getName()).toEqual("");
					expect(modifiedPerson["underlying"].getName()).toEqual("");
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetName("modelogiq");
					let modifiedAgainPerson = modifiedPerson.SetName("modelogiq");
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson["underlying"].getName()).toEqual("modelogiq");
					expect(modifiedPerson["underlying"].getName()).toEqual("modelogiq");
				});

				it("should not modify default value when undefined is passed", () => {
					let modifiedPerson = person.SetName(undefined);
					expect(modifiedPerson["underlying"].getName()).toEqual("");
				});

				it("should not modify default value when null is passed", () => {
					let modifiedPerson = person.SetName(null);
					expect(modifiedPerson["underlying"].getName()).toEqual("");
				});
				it("should set the name property when a valid value is passed", () => {
					let modifiedPerson = person.SetName("modelogiq");
					expect(modifiedPerson["underlying"].getName()).toEqual("modelogiq");
				});
			});

			describe("SetEmail", () => {

				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					expect(modifiedPerson).not.toBe(person);
					expect(person["underlying"].getEmail()).toEqual(undefined);
					expect(modifiedPerson["underlying"].getEmail()).toEqual("frontend@modelogiq.com");
				});

				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetEmail(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person["underlying"].getEmail()).toEqual(undefined);
					expect(modifiedPerson["underlying"].getEmail()).toEqual(undefined);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					let modifiedAgainPerson = modifiedPerson.SetEmail("frontend@modelogiq.com");
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson["underlying"].getEmail()).toEqual("frontend@modelogiq.com");
					expect(modifiedPerson["underlying"].getEmail()).toEqual("frontend@modelogiq.com");
				});

				it("should not modify default value when undefined is passed", () => {
					let modifiedPerson = person.SetEmail(undefined);
					expect(modifiedPerson["underlying"].getEmail()).not.toBeDefined();
				});
				it("should not modify the default value when null is passed", () => {
					let modifiedPerson = person.SetEmail(null);
					expect(modifiedPerson["underlying"].getEmail()).not.toBeDefined();
				});
				it("should set the Email value when a valid entry is passed", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					expect(modifiedPerson["underlying"].getEmail()).toEqual("frontend@modelogiq.com");
				});
			});

			describe("SetMobile", () => {
				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					expect(modifiedPerson).not.toBe(person);
					expect(person["underlying"].getMobile()).toEqual(undefined);
					expect(modifiedPerson["underlying"].getMobile()).toEqual(9000000000);
				});

				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetMobile(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person["underlying"].getMobile()).toEqual(undefined);
					expect(modifiedPerson["underlying"].getMobile()).toEqual(undefined);
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					let modifiedAgainPerson = modifiedPerson.SetMobile(Uint64(9000000000));
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson["underlying"].getMobile()).toEqual(9000000000);
					expect(modifiedPerson["underlying"].getMobile()).toEqual(9000000000);
				});

				it("should not modify default value when undefined is passed", () => {
					let modifiedPerson = person.SetMobile(undefined);
					expect(modifiedPerson["underlying"].getMobile()).not.toBeDefined();
				});

				it("should not modify the default value when null is passed", () => {
					let modifiedPerson = person.SetMobile(null);
					expect(modifiedPerson["underlying"].getMobile()).not.toBeDefined();
				});

				it("should set the Mobile value when a valid entry is passed", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					expect(modifiedPerson["underlying"].getMobile()).toEqual(9000000000);
				});
			});

			describe("ClearEmail", () => {
				it("should not mutate the original instance when value is cleared", () => {
					person["underlying"].setEmail("frontend@modelogiq.com");
					let modifiedPerson = person.ClearEmail();
					expect(modifiedPerson).not.toBe(person);
					expect(person["underlying"].getEmail()).toBe("frontend@modelogiq.com");
					expect(modifiedPerson["underlying"].getEmail()).not.toBeDefined();
				});

				it("should clear a previously set value", () => {
					person["underlying"].setEmail("frontend@modelogiq.com");
					let modifiedPerson = person.ClearEmail();
					expect(modifiedPerson["underlying"].getEmail()).not.toBeDefined();
				});
			});

			describe("ClearMobile", () => {
				it("should not mutate the original instance when value is cleared", () => {
					person["underlying"].setMobile(9000000000);
					let modifiedPerson = person.ClearMobile();
					expect(modifiedPerson).not.toBe(person);
					expect(person["underlying"].getMobile()).toBe(9000000000);
					expect(modifiedPerson["underlying"].getMobile()).not.toBeDefined();
				});

				it("should clear a previously set value", () => {
					person["underlying"].setMobile(9000000000);
					let modifiedPerson = person.ClearMobile();
					expect(modifiedPerson["underlying"].getMobile()).not.toBeDefined();
				});
			});

			describe("GetContactCase", () => {
				it("should call the underlying getContactCase function", () => {
					spyOn(person["underlying"], "getContactCase");
					person.GetContactCase();
					expect(person["underlying"].getContactCase).toHaveBeenCalled();
				});
			});

			describe("Name", () => {
				it("should return empty string when no value is set", () => {
					expect(person.Name).toBeDefined();
					expect(person.Name.length).toEqual(0);
				});
				it("should return value when a valid entry exists", () => {
					person["underlying"].setName("modelogiq");
					expect(person.Name).toEqual("modelogiq");
				});
				it("should return type string", () => {
					person["underlying"].setName("modelogiq");
					expect(typeof person.Name === "string").toEqual(true);
				});
			});

			describe("Email", () => {
				it("should return undefined when no value is set", () => {
					expect(person.Email).not.toBeDefined();
				});
				it("should return a string when a value is set", () => {
					person["underlying"].setEmail("frontend@modelogiq.com");
					expect(person.Email).toEqual("frontend@modelogiq.com");
				});
			});

			describe("Mobile", () => {
				it("should throw error when no value is set", () => {
					expect(person.Mobile).not.toBeDefined();
				});
				it("should return Uint64 when a value is set", () => {
					person["underlying"].setMobile(9000000000);
					expect(person.Mobile).toEqual(Uint64(9000000000));
				});
			});

			describe("Serialize", () => {
				it("should call the underlying serialize function", () => {
					spyOn(person["underlying"], "serializeBinary");
					person.Serialize();
					expect(person["underlying"].serializeBinary).toHaveBeenCalled();
				});
			});

			describe("Deserialize", () => {
				it("should call the deserialize function", () => {
					spyOn(helloworld.Person, "deserializeBinary").and.callThrough();
					let serializedSource = new Uint8Array((new Person()).Serialize());
					Person.Deserialize(serializedSource);
					expect(helloworld["Person"].deserializeBinary).toHaveBeenCalled();
				});
			});
		});
	});
});
