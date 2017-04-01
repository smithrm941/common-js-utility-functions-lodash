import chai from "chai";
import { endsWith } from "../src/string/endsWith";

let expect = chai.expect;

describe("endsWith checks if given string ends with a given target string", function() {
    it("with a third argument (an integer), true is returned if the end of the substring, which starts at the beginning of the initial string and ends at the length of the third argument, matches the target string. Otherwise, return false.", function() {
        expect(endsWith("San Francisco Giants Baseball", "s", 11)).to.equal(
            true
        );
        expect(endsWith("abcdefg", "d", 4)).to.equal(true);
        expect(endsWith("abcdefghijk", "fgh", 8)).to.equal(true);
        expect(endsWith("abcdefghijk", "def", 8)).to.equal(false);
    });

    it("without a third argument, true is returned if the end of the entire initial string matches the second argument. Otherwise, return false.", function() {
        expect(endsWith("alphabet soup", "p")).to.equal(true);
        expect(endsWith("alphabet soup", "soup")).to.equal(true);
        expect(endsWith("McClelland", "land")).to.equal(true);
        expect(endsWith("alphabet soup", "cheese")).to.equal(false);
    });
});
