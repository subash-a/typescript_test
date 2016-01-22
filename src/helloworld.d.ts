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
        setName(s: string): void;
        getName(): string;
        setMobile(n: number): void;
        getMobile(): number;
        getEmail(): string;
        setEmail(e: string): void;
        getContactCase(): number;
        serializeBinary(): ArrayBuffer;
        cloneMessage(): Person;
    }

}
