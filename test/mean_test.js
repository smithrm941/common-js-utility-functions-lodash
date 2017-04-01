import chai from "chai";
import { mean } from "../src/math/mean";

const expect = chai.expect;

describe("return the average of the numbers in an array", function() {
    it("if the sum of the elements in the array are not evenly divisible by the number of elements of the array, then it returns float ", function() {
        expect(mean([14, 11, 41, 400])).to.equal(116.5);
    });
    it("if the sum of the elements in the array are evenly divisible by the number of elements of the array, then it returns integer ", function() {
        expect(mean([4, 2, 8, 6])).to.equal(5);
    });
    it("if not passed an array, will return NaN", function() {
        expect(mean([])).to.be.NaN;
        expect(mean(0)).to.be.NaN;
    });
});
