import chai from "chai";
import { indexOf } from "../src/array/indexOf";

let expect = chai.expect;

describe("indexOf returns the index of a given value if it is in a given array", function() {
    it("returns the index of the first instance of a given value if there is no third argument", function() {
        expect(
            indexOf(
                ["first", "second", "third", "second", "second", "second"],
                "second"
            )
        ).to.equal(1);
        expect(
            indexOf([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 2)
        ).to.equal(8);
        expect(indexOf([27 / 3, 14, 21, 8, 9], 9)).to.equal(0);
    });

    it("if third argument is provided, returns the index of first instance of a given value that occurs at or after the index equal to the third argument", function() {
        expect(
            indexOf(
                ["first", "second", "third", "second", "second", "second"],
                "second",
                2
            )
        ).to.equal(3);
        expect(
            indexOf([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 2, 10)
        ).to.equal(10);
        expect(indexOf([27 / 3, 14, 21, 8, 9], 9, 1)).to.equal(4);
        expect(indexOf([27 / 3, 14, 21, 8, 9], 9, 4)).to.equal(4);
    });

    it("will return -1 if no match is found in terms of the second or third argument or if no additional arguments are given", function() {
        expect(indexOf([27 / 3, 14, 21, 8, 9])).to.equal(-1);
        expect(
            indexOf([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 20)
        ).to.equal(-1);
        expect(
            indexOf(
                ["first", "second", "third", "second", "second", "second"],
                "fifteenth",
                2
            )
        ).to.equal(-1);
        expect(indexOf([27 / 3, 14, 21, 8, 9], 14, 12)).to.equal(-1);
    });
});
