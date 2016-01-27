import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";
import {HelloRequest, Person, HelloReply, PROTOBUF_DEFAULT_NORMAL_STRING, PROTOBUF_DEFAULT_NORMAL_UINT64} from "./immut_helloworld";

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
				expect(request.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				expect(request.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
			});
		});

		describe("SetName & Name", () => {
			it("should return the original instance when undefined value is passed", () => {
				let modifiedRequest = request.SetName(undefined);
				expect(modifiedRequest).toBe(request);
				expect(request.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				expect(modifiedRequest.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
			});

			it("should return the original instance when null value is passed", () => {
				let modifiedRequest = request.SetName(null);
				expect(modifiedRequest).toBe(request);
				expect(request.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				expect(modifiedRequest.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
			});

			it("should not mutate the original instance when new value is set", () => {
				let modifiedRequest = request.SetName("modelogiq");
				expect(modifiedRequest).not.toBe(request);
				expect(request.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
			});

			it("should set name correctly and return a new instance when a valid value is passed", () => {
				let modifiedRequest = request.SetName("modelogiq");
				expect(modifiedRequest.Name).toEqual("modelogiq");
			});

			it("should return the same instance when value is not modified", () => {
				let modifiedRequest = request.SetName("modelogiq");
				let modifiedAgainRequest = modifiedRequest.SetName("modelogiq");
				expect(modifiedAgainRequest).toBe(modifiedRequest);
				expect(modifiedAgainRequest.Name).toEqual("modelogiq");
				expect(modifiedRequest.Name).toEqual("modelogiq");
			});
		});

		describe("SetAge & Age", () => {
			it("should return the original instance when undefined value is passed", () => {
				let modifiedRequest = request.SetAge(undefined);
				expect(modifiedRequest).toBe(request);
				expect(request.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
				expect(modifiedRequest.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
			});

			it("should return the original instance when null value is passed", () => {
				let modifiedRequest = request.SetAge(null);
				expect(modifiedRequest).toBe(request);
				expect(request.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
				expect(modifiedRequest.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
			});

			it("should not mutate the original instance when new value is set", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				expect(modifiedRequest).not.toBe(request);
				expect(request.Age).toEqual(PROTOBUF_DEFAULT_NORMAL_UINT64);
			});

			it("should set the age correctly and return a new instance when a valid value is passed", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				expect(modifiedRequest.Age).toEqual(Uint64(25));
			});

			it("should return the same instance when value is not modified", () => {
				let modifiedRequest = request.SetAge(Uint64(25));
				let modifiedAgainRequest = modifiedRequest.SetAge(Uint64(25));
				expect(modifiedAgainRequest).toBe(modifiedRequest);
				expect(modifiedAgainRequest.Age).toEqual(Uint64(25));
				expect(modifiedRequest.Age).toEqual(Uint64(25));
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
				expect(reply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
			});

			describe("SetMessage & Message", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedReply = reply.SetMessage(undefined);
					expect(modifiedReply).toBe(reply);
					expect(reply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedReply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedReply = reply.SetMessage(null);
					expect(modifiedReply).toBe(reply);
					expect(reply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedReply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					expect(modifiedReply).not.toBe(reply);
					expect(reply.Message).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should set the name correctly and return a new instance when a valid value is passed", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					expect(modifiedReply.Message).toEqual("modelogiq");
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedReply = reply.SetMessage("modelogiq");
					let modifiedAgainReply = modifiedReply.SetMessage("modelogiq");
					expect(modifiedAgainReply).toBe(modifiedReply);
					expect(modifiedAgainReply.Message).toEqual("modelogiq");
					expect(modifiedReply.Message).toEqual("modelogiq");
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
				expect(person.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				expect(person.Email).not.toBeDefined();
				expect(person.Mobile).not.toBeDefined(); // This would throw error since it is trying to convert undefined into a Uint64
				expect(person.GetContactCase()).toEqual(Person.ContactCase.CONTACT_NOT_SET);
			});

			describe("SetName & Name", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetName(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedPerson.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedPerson = person.SetName(null);
					expect(modifiedPerson).toBe(person);
					expect(person.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
					expect(modifiedPerson.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetName("modelogiq");
					expect(modifiedPerson).not.toBe(person);
					expect(person.Name).toEqual(PROTOBUF_DEFAULT_NORMAL_STRING);
				});

				it("should set name correctly and return a new instance when a valid value is passed", () => {
					let modifiedPerson = person.SetName("modelogiq");
					expect(modifiedPerson.Name).toEqual("modelogiq");
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetName("modelogiq");
					let modifiedAgainPerson = modifiedPerson.SetName("modelogiq");
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson.Name).toEqual("modelogiq");
					expect(modifiedPerson.Name).toEqual("modelogiq");
				});
			});

			describe("SetEmail & Email", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetEmail(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person.Email).toEqual(undefined);
					expect(modifiedPerson.Email).toEqual(undefined);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedPerson = person.SetEmail(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person.Email).toEqual(undefined);
					expect(modifiedPerson.Email).toEqual(undefined);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					expect(modifiedPerson).not.toBe(person);
					expect(person.Email).toEqual(undefined);
				});

				it("should set the Email value and return a new instance when a valid entry is passed", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					expect(modifiedPerson.Email).toEqual("frontend@modelogiq.com");
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetEmail("frontend@modelogiq.com");
					let modifiedAgainPerson = modifiedPerson.SetEmail("frontend@modelogiq.com");
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson.Email).toEqual("frontend@modelogiq.com");
					expect(modifiedPerson.Email).toEqual("frontend@modelogiq.com");
				});
			});

			describe("SetMobile & Mobile", () => {
				it("should return the original instance when undefined value is passed", () => {
					let modifiedPerson = person.SetMobile(undefined);
					expect(modifiedPerson).toBe(person);
					expect(person.Mobile).toEqual(undefined);
					expect(modifiedPerson.Mobile).toEqual(undefined);
				});

				it("should return the original instance when null value is passed", () => {
					let modifiedPerson = person.SetMobile(null);
					expect(modifiedPerson).toBe(person);
					expect(person.Mobile).toEqual(undefined);
					expect(modifiedPerson.Mobile).toEqual(undefined);
				});

				it("should not mutate the original instance when new value is set", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					expect(modifiedPerson).not.toBe(person);
					expect(person.Mobile).toEqual(undefined);
				});

				it("should set the Mobile value and return a new instance when a valid entry is passed", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					expect(modifiedPerson.Mobile).toEqual(Uint64(9000000000));
				});

				it("should return the same instance when value is not modified", () => {
					let modifiedPerson = person.SetMobile(Uint64(9000000000));
					let modifiedAgainPerson = modifiedPerson.SetMobile(Uint64(9000000000));
					expect(modifiedAgainPerson).toBe(modifiedPerson);
					expect(modifiedAgainPerson.Mobile).toEqual(Uint64(9000000000));
					expect(modifiedPerson.Mobile).toEqual(Uint64(9000000000));
				});
			});

			describe("ClearEmail", () => {
				it("should clear a previously set value in a new instance", () => {
					person = person.SetEmail("frontend@modelogiq.com");
					let modifiedPerson = person.ClearEmail();
					expect(modifiedPerson).not.toBe(person);
					expect(modifiedPerson.Email).toBeUndefined();
				});

				it("should not mutate the original instance when value is cleared", () => {
					person = person.SetEmail("frontend@modelogiq.com");
					expect(person.Email).toBe("frontend@modelogiq.com");
				});
			});

			describe("ClearMobile", () => {
				it("should clear a previously set value in a new instance", () => {
					person = person.SetMobile(Uint64(9000000000));
					let modifiedPerson = person.ClearMobile();
					expect(modifiedPerson).not.toBe(person);
					expect(modifiedPerson.Mobile).toBeUndefined();
				});

				it("should not mutate the original instance when value is cleared", () => {
					person = person.SetMobile(Uint64(9000000000));
					person.ClearMobile();
					expect(person.Mobile).toEqual(Uint64(9000000000));
				});
			});

			describe("GetContactCase", () => {
				it("should call the underlying getContactCase function", () => {
					spyOn(person["underlying"], "getContactCase");
					person.GetContactCase();
					expect(person["underlying"].getContactCase).toHaveBeenCalled();
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
