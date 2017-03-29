import chai from 'chai'
import { min } from '../src/math/min'

let expect = chai.expect
let should = chai.should()

describe('Get lowest number in an array', function(){
  it('if array contains operations, those are performed and the lowest result returns', function(){
    expect(min([4 + 7, 10 + 100, 4.7, 10.1, 100.25])).to.equal(4.7)
    expect(min([4 + 7, 10 - 100])).to.equal(-90)
    expect(min([4 / 7, 10 * 100])).to.equal(4/7)
  })
  it('if array contains integers and or floats, returns lowest value in the array', function(){
    expect(min([10.3, 100, 4.7, 18, 34])).to.equal(4.7)
    expect(min([4, 7, 10, 100])).to.equal(4)
    expect(min([100.25, 4.7, 10.1])).to.equal(4.7)
  })
})
