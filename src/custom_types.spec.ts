import {Uint64, Uint32, Int32, Int64} from "./custom_types";

describe("Custom Types", () => {
	describe("Int32", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => new Int32(null)).toThrow();
		});
		it("should throw error when an undefined value is passed", () => {
			expect(() => new Int32(undefined)).toThrow();
		});
		it("should throw error when a +ve number greater than 32bits is passed", () => {
			expect(() => new Int32(Math.pow(2,33))).toThrow();
		});
		it("should throw error when a -ve number greater than 32bits is passed", () => {
			expect(() => new Int32(-Math.pow(2,33))).toThrow();
		});
		it("should not throw error when a +ve number lesser than 32bits is passed", () => {
			expect(() => new Int32(20)).not.toThrow();
		});
		it("should not throw error when a -ve number lesser than 32bits is passed", () => {
			expect(() => new Int32(-20)).not.toThrow();
		});
	});

	describe("Int64", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => new Int64(null)).toThrow();
		});
		it("should throw error when an undefined value is passed", () => {
			expect(() => new Int64(undefined)).toThrow();
		});
		it("should throw error when a +ve number greater than 64bits is passed", () => {
			expect(() => new Int64(Math.pow(2,65))).toThrow();
		});
		it("should throw error when a -ve number greater than 64bits is passed", () => {
			expect(() => new Int64(-Math.pow(2,65))).toThrow();
		});
		it("should not throw error when a +ve number lesser than 64bits is passed", () => {
			expect(() => new Int64(Math.pow(2,50))).not.toThrow();
		});
		it("should not throw error when a -ve number lesser than 64bits is passed", () => {
			expect(() => new Int64(-Math.pow(2,50))).not.toThrow();
		});

	});

	describe("Uint32", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => new Int32(null)).toThrow();
		});
		it("should throw error when an undefined value is passed", () => {
			expect(() => new Int32(undefined)).toThrow();
		});
		it("should throw error when a number greater than 32bits is passed", () => {
			expect(() => new Int32(Math.pow(2,33))).toThrow();
		});
		it("should not throw error when a number lesser than 32bits is passed", () => {
			expect(() => new Int32(20)).not.toThrow();
		});
	});
	describe("Uint64", () => {
		it("should throw error when a null value is passed", () => {
			expect(() => new Int64(null)).toThrow();
		});

		it("should throw error when an undefined value is passed", () => {
			expect(() => new Int64(undefined)).toThrow();
		});

		it("should throw error when a number greater than 64bits is passed", () => {
			expect(() => new Int64(Math.pow(2,65))).toThrow();
		});

		it("should not throw error when a number lesser than 64bits is passed", () => {
			expect(() => new Int64(Math.pow(2,50))).not.toThrow();
		});
	});
});
