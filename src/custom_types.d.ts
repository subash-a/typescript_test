interface BinaryWriterStatic {
	new(): BinaryWriter;
}

interface BinaryWriter {
	writeString(): void;
	writeUint64(): void;
}

interface BinaryReaderStatic {
	new(bytes: Uint8Array): BinaryReader;
}

interface BinaryReader {
	readString(): string;
	readUint64(): number;
	isEndGroup(): boolean;
	nextField(): void;
	getFieldNumber(): number;
	skipField(): void;
}

interface Uint64 {
	toNumber(): number;
}

interface Uint32 {
	toNumber(): number;
}

interface Int64 {
	toNumber(): number;
}

interface Int32 {
	toNumber(): number;
}

interface EnumType {
	[key: string]: number;
}

// methods contained in a general message object
interface MessageTypeStatic {
	deserializeBinary(bytes: Uint8Array): MessageType;
	deserializeBinaryFromReader(msg: MessageType, reader: BinaryReader): MessageType;
	serializeBinary(): Uint8Array;
	serializeBinaryToWriter(writer: BinaryWriter): Uint8Array;
	new(opt?: Array<Object>): MessageType;
}

interface MessageType {
	cloneMessage(): this;
	toObject(includeInstance: boolean, msg: this): Object;
}
