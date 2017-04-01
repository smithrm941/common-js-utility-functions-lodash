import chai from "chai";
import { sum } from "../src/math/sum";

let expect = chai.expect;

describe("adds array together", function() {
    it("returns the sum of the array", function() {
        expect(sum([1, 2, 3])).to.equal(6);
    });
});
