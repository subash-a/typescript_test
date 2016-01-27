///<reference path="./custom_types.d.ts" />

export namespace helloworld {
	export class HelloRequest {
		static deserializeBinary(arr: Uint8Array): HelloRequest;
		setName(s: string): void;
		getName(): string;
		setAge(n: number): void;
		getAge(): number;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloRequest;
	}
	export class HelloReply {
		static deserializeBinary(arr: Uint8Array): HelloReply;
		setMessage(s: string): void;
		getMessage(): string;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): HelloReply;
	}
	export class Person {
		static deserializeBinary(arr: Uint8Array): Person;
		static ContactCase: typeof ContactEnum;
		setName(s: string): void;
		getName(): string;
		setMobile(n: number): void;
		clearMobile(): void;
		getMobile(): number;
		getEmail(): string;
		clearEmail(): void;
		setEmail(e: string): void;
		getContactCase(): number;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): Person;
	}

	export enum ContactEnum {
		CONTACT_NOT_SET = 0,
		EMAIL = 2,
		MOBILE = 3
	}
}
