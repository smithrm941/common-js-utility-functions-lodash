import chai from "chai";
import { drop } from "../src/array/drop";

let expect = chai.expect;

describe("drop creates a slice of an array with n elements dropped from the beginning", function() {
    it("if no second argument is provided or second argument is 0, the first element is dropped", function() {
        expect(drop([48, 96, 3, 19, 23])).to.deep.equal([96, 3, 19, 23]);
        expect(drop(["hello", 48.5, [1, 2, 3], "ok?"])).to.deep.equal([
            48.5,
            [1, 2, 3],
            "ok?"
        ]);
        expect(drop(["Don't", "do", "drugs"], 0)).to.deep.equal([
            "do",
            "drugs"
        ]);
    });
    it("if second argument is greater than zero, drop that number of elements from the beginning of the array", function() {
        expect(drop(["Don't", "do", "drugs"], 2)).to.deep.equal(["drugs"]);
        expect(drop([19489, 939394388, 100101, 341], 5)).to.deep.equal([]);
    });
});
