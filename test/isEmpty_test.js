import chai from "chai";
import { isEmpty } from "../src/lang/isEmpty";

let expect = chai.expect;

describe("isEmpty returns true if argument is an empty object, collection, map, or set", function() {
    it("should return true if argument is empty", function() {
        expect(isEmpty([])).to.equal(true);
        expect(isEmpty({})).to.equal(true);
        expect(isEmpty("")).to.equal(true);
        expect(isEmpty(1.2)).to.equal(true);
    });
    it("should return false if argument is not empty", function() {
        expect(isEmpty(["this", "is", "not", "empty"])).to.equal(false);
        expect(isEmpty({ neither: 1, is: 2, this: 3 })).to.be.false;
        expect(isEmpty([2, 4, 6, 8, "not", "empty"])).to.equal(false);
        expect(isEmpty("Is this empty? No, it isn't.")).to.equal(false);
    });
});
