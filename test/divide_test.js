import chai from "chai";
import { divide } from "../src/math/divide";

let expect = chai.expect;

describe("divides one argument by another", function() {
    it("returns the quotient of two arguments", function() {
        expect(divide(1, 2)).to.equal(0.5);
        expect(divide(45, 9)).to.equal(5);
    });
});
