import chai from "chai";
import { isArray } from "../src/lang/isArray";

let expect = chai.expect;

describe("isArray returns true if argument is an array and false if it is not", function() {
    it("should return true if argument is an array", function() {
        expect(isArray([1, 2, 3, 4])).to.equal(true);
        expect(
            isArray([
                { a: "cheese" },
                { a: "cheese", b: "pepperoni", c: "anchovies" },
                { "Barry Bonds": 25, "Jeff Kent": 21, "JT Snow": 6 }
            ])
        ).to.equal(true);
    });
    it("should return false if argument is not an array", function() {
        expect(isArray(10223)).to.equal(false);
        expect(isArray(Math.min(45, 100, 4))).to.equal(false);
        expect(isArray("Hello, it's me")).to.equal(false);
    });
});
