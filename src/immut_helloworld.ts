import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";

export class HelloRequest {
	private underlying: helloworld.HelloRequest;

	constructor() {
		this.underlying = new helloworld.HelloRequest();
	}

	static fromHelloRequest(u: helloworld.HelloRequest): HelloRequest {
		let ihr = new HelloRequest();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): HelloRequest {
		return HelloRequest.fromHelloRequest(helloworld.HelloRequest.deserializeBinary(buffer));
	}

	SetName(name: string): HelloRequest {
		if (this.underlying.getName() === name) {
			return this;
		} else {
			let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
			instance.underlying.setName(name);
			return instance;
		}
	}

	get Name(): string {
		return this.underlying.getName();
	}

	SetAge(age: Uint64): HelloRequest {
		if (this.underlying.getAge() === age.toNumber()) {
			return this;
		} else {
			let instance = HelloRequest.fromHelloRequest(this.underlying.cloneMessage());
			instance.underlying.setAge(age.toNumber());
			return instance;
		}
	}

	get Age(): Uint64 {
		return Uint64(this.underlying.getAge());
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export class HelloReply {
	private underlying: helloworld.HelloReply;

	constructor() {
		this.underlying = new helloworld.HelloReply();
	}

	static fromHelloReply(u: helloworld.HelloReply): HelloReply {
		let ihr = new HelloReply();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): HelloReply {
		return HelloReply.fromHelloReply(helloworld.HelloReply.deserializeBinary(buffer));
	}

	SetMessage(message: string): HelloReply {
		if (this.underlying.getMessage() === message) {
			return this;
		} else {
			let instance = HelloReply.fromHelloReply(this.underlying.cloneMessage());
			instance.underlying.setMessage(message);
			return instance;
		}
	}

	get Message(): string {
		return this.underlying.getMessage();
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export enum PersonContactEnum {
	NOT_SET = 0,
	EMAIL = 2,
	MOBILE = 3,
}

export class Person {
	private underlying: helloworld.Person;

	constructor() {
		this.underlying = new helloworld.Person();
	}

	static fromPerson(u: helloworld.Person): Person {
		let ihr = new Person();
		ihr.underlying = u.cloneMessage();
		return ihr;
	}

	static Deserialize(buffer: Uint8Array): Person {
		return Person.fromPerson(helloworld.Person.deserializeBinary(buffer));
	}

	SetName(name: string): Person {
		if (this.underlying.getName() === name) {
			return this;
		} else {
			let instance = Person.fromPerson(this.underlying.cloneMessage());
			instance.underlying.setName(name);
			return instance;
		}
	}

	get Name(): string {
		return this.underlying.getName();
	}

	SetMobile(num: Uint64): Person {
		/* This logic is to ensure that if underlying value has not changed
			* return the same instance */
		if (this.underlying.getMobile() === num.toNumber()) {
			return this;
		} else {
			let instance = Person.fromPerson(this.underlying.cloneMessage());
			instance.underlying.setMobile(num.toNumber());
			return instance;
		}
	}

	/* This logic handles the clearing of field in the oneof case */
	ClearMobile(): Person {
		if (this.underlying.getMobile() === undefined || this.underlying.getMobile() === null) {
			return this;
		} else {
			let instance = Person.fromPerson(this.underlying.cloneMessage());
			instance.underlying.clearMobile();
			return instance;
		}
	}

	get Mobile(): Uint64 {
		return Uint64(this.underlying.getMobile());
	}

	SetEmail(e: string): Person {
		if (this.underlying.getEmail() === e) {
			return this;
		} else {
			let instance = Person.fromPerson(this.underlying.cloneMessage());
			instance.underlying.setEmail(e === undefined || e === null ? undefined : e);
			return instance;
		}
	}

	ClearEmail(): Person {
		if (this.underlying.getEmail() === undefined || this.underlying.getEmail() === null) {
			return this;
		} else {
			let instance = Person.fromPerson(this.underlying.cloneMessage());
			instance.underlying.clearEmail();
			return instance;
		}
	}

	get Email(): string {
		return this.underlying.getEmail();
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}

	GetContactCase(): PersonContactEnum {
		return this.underlying.getContactCase();
	}
}
