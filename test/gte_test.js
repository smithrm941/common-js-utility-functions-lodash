import chai from "chai";
import { gte } from "../src/lang/gte";

let expect = chai.expect;

describe("gte returns true if first argument is greater than or equal to the second argument and false if it is not", function() {
    it("should return true if first argument is greater than or equal to the second", function() {
        expect(gte(45, 9 * 3)).to.equal(true);
        expect(gte(Math.max(45, 100, 4), Math.max(20, 19, 18, 100))).to.equal(
            true
        );
        expect(gte(65 - 55, 5 + 5)).to.equal(true);
    });
    it("should return false if first argument is not greater than or equal to the second", function() {
        expect(gte(45, 55)).to.equal(false);
        expect(gte(Math.min([45, 100, 4]), Math.min([100, 19, 1800]))).to.equal(
            false
        );
        expect(gte(103 - 93, 55)).to.equal(false);
    });
});
