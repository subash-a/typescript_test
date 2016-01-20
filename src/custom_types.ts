const MAX_32_NUM = Math.pow(2,31);
const MAX_64_NUM = Math.pow(2,62);
const MAX_U32_NUM = Math.pow(2,32);
const MAX_U64_NUM = Math.pow(2,63);

export class Int32 {
	private val: number;

	constructor(n: number) {
		if(n === null || n === undefined) {
			throw new Error("Int32 cannot be null or undefined");
		}
		if(n >= MAX_32_NUM || n < (-MAX_32_NUM)) {
			throw new Error("integer out of range (32bit)");
		} else {
			this.val = n;
		}
	}

	toNumber(): number {
		return this.val;
	}
}

export function int32(n: number): Int32 {
	return new Int32(n);
}

export class Uint32 {
	private val: number;

	constructor(n: number) {
		if(n === null || n === undefined) {
			throw new Error("Uint32 cannot be null or undefined");
		}
		if(Math.abs(n) >= MAX_U32_NUM) {
			throw new Error("unsigned integer overflow (32bit)");
		} else {
			this.val = n;
		}
	}

	toNumber(): number {
		return this.val;
	}
}

export function uint32(n: number): Uint32 {
	return new Uint32(n);
}

export class Int64 {
	private val: number;

	constructor(n: number) {
		if(n === null || n === undefined) {
			throw new Error("Int64 cannot be null or undefined");
		}
		if(n >= MAX_64_NUM || n < (-MAX_64_NUM)) {
			throw new Error("integer out of range (64bit)");
		} else {
			this.val = n;
		}
	}

	toNumber(): number {
		return this.val;
	}
}

export function int64(n: number): Int64 {
	return new Int64(n);
}

export class Uint64 {
	private val: number;

	constructor(n: number) {
		if(n === null || n === undefined) {
			throw new Error("Uint64 cannot be null or undefined");
		}
		if(Math.abs(n) >= MAX_U64_NUM) {
			throw new Error("unsigned integer overflow (64bit)");
		} else {
			this.val = n;
		}
	}

	toNumber(): number {
		return this.val;
	}
}

export function uint64(n: number): Uint64 {
	return new Uint64(n);
}
