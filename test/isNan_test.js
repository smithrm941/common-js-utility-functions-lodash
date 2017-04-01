import chai from "chai";
import { isNaN } from "../src/lang/isNaN";

let expect = chai.expect;

describe("isNaN returns true if argument equivalant to NaN and false if it is not", function() {
    it("should return true if argument is equivalant to NaN", function() {
        expect(isNaN(5 / "nope")).to.equal(true);
        expect(isNaN(parseInt([{ a: "cheese" }], 4))).to.equal(true);
    });
    it("should return false if argument is not equivalant to NaN", function() {
        expect(isNaN(10223)).to.equal(false);
        expect(isNaN(Math.min(45, 100, 4))).to.equal(false);
        expect(isNaN("Hello, it's me")).to.equal(false);
        expect(isNaN("true")).to.equal(false);
        expect(isNaN(undefined)).to.equal(false);
    });
});
