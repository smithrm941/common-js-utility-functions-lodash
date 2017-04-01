import chai from "chai";
import { isBoolean } from "../src/lang/isBoolean";

let expect = chai.expect;

describe("isBoolean returns true if argument is a boolean and false if it is not", function() {
    it("should return true if argument is a boolean", function() {
        expect(isBoolean(5 > 2 * 2)).to.equal(true);
        expect(
            isBoolean(
                typeof [
                    { a: "cheese" },
                    { a: "cheese", b: "pepperoni", c: "anchovies" },
                    { "Barry Bonds": 25, "Jeff Kent": 21, "JT Snow": 6 }
                ] === "object"
            )
        ).to.equal(true);
    });
    it("should return false if argument is not a boolean", function() {
        expect(isBoolean(10223)).to.equal(false);
        expect(isBoolean(Math.min(45, 100, 4))).to.equal(false);
        expect(isBoolean("Hello, it's me")).to.equal(false);
        expect(isBoolean("true")).to.equal(false);
        expect(isBoolean(undefined)).to.equal(false);
    });
});
