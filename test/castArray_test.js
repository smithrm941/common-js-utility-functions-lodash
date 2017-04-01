import chai from "chai";
import { castArray } from "../src/lang/castArray";

let expect = chai.expect;

describe("castArray returns returns an array with the argument inside if it is not an array already", function() {
    it("returns result of operation within an array if the argument is operation", function() {
        expect(castArray(5 / "nope")).to.deep.equal([NaN]);
        expect(castArray(parseInt([{ a: "cheese" }], 4))).to.deep.equal([NaN]);
        expect(castArray(Math.floor(114 / 11 * 14))).to.deep.equal([145]);
        expect(castArray(Math.min(45, 100, 4))).to.deep.equal([4]);
    });
    it("returns argument unchanged in brackets, if argument is not an array and not being manipulated.", function() {
        expect(castArray(10223)).to.deep.equal([10223]);
        expect(castArray("Hello, it's me")).to.deep.equal(["Hello, it's me"]);
        expect(castArray("true")).to.deep.equal(["true"]);
        expect(castArray(undefined)).to.deep.equal([undefined]);
    });
    it("if argument is an array, the array is returned unchanged", function() {
        expect(castArray([10223])).to.deep.equal([10223]);
        expect(castArray(["Hello, it's me"])).to.deep.equal(["Hello, it's me"]);
        expect(castArray(["true"])).to.deep.equal(["true"]);
        expect(castArray([undefined])).to.deep.equal([undefined]);
    });
});
