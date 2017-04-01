import chai from "chai";
import { add } from "../src/math/add";

let expect = chai.expect;

describe("adds two arguments together", function() {
    it("returns the sum of two arguments", function() {
        expect(add(1, 2)).to.equal(3);
        expect(add(41, 411)).to.equal(452);
    });
});
