import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";

export class ImmutableHelloRequest {
	private underlying: helloworld.HelloRequest;

	constructor() {
		this.underlying = new helloworld.HelloRequest();
	}

	static fromHelloRequest(u: helloworld.HelloRequest): ImmutableHelloRequest {
		let ihr = new ImmutableHelloRequest();
		ihr.underlying = u;
		return ihr;
	}

	SetName(name: string): ImmutableHelloRequest {
		let instance = ImmutableHelloRequest.fromHelloRequest(this.underlying);
		instance.underlying.setName(name);
		return instance;
	}

	Name(): string {
		return this.underlying.getName();
	}

	SetAge(age: Uint64): ImmutableHelloRequest {
		let instance = ImmutableHelloRequest.fromHelloRequest(this.underlying);
		instance.underlying.setAge(age.toNumber());
		return instance;
	}

	Age(): Uint64 {
		return new Uint64(this.underlying.getAge());
	}

	Serialize(): ArrayBuffer {
		return this.underlying.serializeBinary();
	}
}

export class ImmutableHelloReply {
	private underlying: helloworld.HelloReply;

	constructor() {
		this.underlying = new helloworld.HelloReply();
	}

	static fromHelloReply(u: helloworld.HelloReply): ImmutableHelloReply {
		let ihr = new ImmutableHelloReply();
		ihr.underlying = u;
		return ihr;
	}

	SetMessage(message: string): ImmutableHelloReply {
		let instance = ImmutableHelloReply.fromHelloReply(this.underlying);
		instance.underlying.setMessage(message);
		return instance;
	}

	Message(): string {
		return this.underlying.getMessage();
	}

	static Deserialize(buffer: Uint8Array): ImmutableHelloReply {
		return ImmutableHelloReply.fromHelloReply(helloworld.HelloReply.deserializeBinary(buffer));
	}
}
