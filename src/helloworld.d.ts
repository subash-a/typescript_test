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
	export class SubMessage {
		static deserializeBinary(arr: Uint8Array): SubMessage;
		setSubmessagestringfield(s: string): void;
		getSubmessagestringfield(): string;
		setSubmessageuint64field(n: number): void;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): SubMessage;
		getSubmessageuint64field(): number;
	}
	export class RepeatedMessage {
		static deserializeBinary(arr: Uint8Array): RepeatedMessage;
		cloneMessage(): RepeatedMessage;
		setRepeatedmessagestringfield(s: string): void;
		getRepeatedmessagestringfield(): string;
		setRepeatedmessageuint64field(i: number): void;
		getRepeatedmessageuint64field(): number;
		serializeBinary(): ArrayBuffer;
	}
	export class TestMessage {
		static OneoffieldCase: typeof OneoffieldEnum;
		static deserializeBinary(arr: Uint8Array): TestMessage;
		static subMessageField: new() => SubMessage;
		setStringfield(s: string): void;
		getStringfield(): string;
		setUint64field(s: number): void;
		getUint64field(): number;
		setOneofuint64field(n: number): void;
		clearOneofuint64field(): void;
		getOneofuint64field(): number;
		getOneofstringfield(): string;
		clearOneofstringfield(): void;
		setOneofstringfield(e: string): void;
		getOneoffieldCase(): number;
		getRepeatedmessagefieldList(): Array<Object>;
		setRepeatedmessagefieldList(a: Array<Object>): void;
		serializeBinary(): ArrayBuffer;
		cloneMessage(): TestMessage;
	}

	export enum OneoffieldEnum {
		ONEOFFIELD_NOT_SET = 0,
		ONEOFSTRINGFIELD = 2,
		ONEOFUINT64FIELD = 3
	}
}
