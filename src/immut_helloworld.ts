import {Uint64} from "./custom_types";
import {helloworld} from "./helloworld";

class ImmutableHelloRequest {
	private underlying: helloworld.HelloRequest;

	constructor(underlying: helloworld.HelloRequest) {
		this.underlying = underlying;
	}

	SetName(name: string): void {
		this.underlying.setName(name);
	}

	Name(): string {
		return this.underlying.getName();
	}

	SetAge(age: Uint64): void {
		this.underlying.setAge(age.toNumber());
	}

	Age(): Uint64 {
		return new Uint64(this.underlying.getAge());
	}
}
