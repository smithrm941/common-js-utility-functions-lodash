import chai from "chai";
import { subtract } from "../src/math/subtract";

let expect = chai.expect;

describe("subtracts second argument from first argument", function() {
    it("returns the result of subtracting the second argument from the first", function() {
        expect(subtract(1, 2)).to.equal(-1);
        expect(subtract(41, 411)).to.equal(-370);
    });
});
