import chai from "chai";
import { lt } from "../src/lang/lt";

let expect = chai.expect;

describe("lt returns true if first argument is less than the second argument and false if it is not", function() {
    it("should return true if first argument is less than second", function() {
        expect(lt(45, 20 * 20)).to.equal(true);
        expect(lt(Math.max(45, 100, 4), Math.max(20, 19, 1987))).to.equal(true);
        expect(lt(103 - 3, 25 * 5)).to.equal(true);
        expect(lt(5, 7)).to.equal(true);
    });
    it("should return false if first argument is not less than second", function() {
        expect(lt(545, 55)).to.equal(false);
        expect(lt(Math.min(45, 100, 4), Math.min(100, 19, 1800, 1.1))).to.equal(
            false
        );
        expect(lt(103 - 83, 5 + 5 + 5)).to.equal(false);
    });
});
