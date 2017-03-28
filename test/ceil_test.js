import chai from 'chai'
import { ceil } from '../src/math/ceil'

let expect = chai.expect
let should = chai.should()

describe('returns the smallest integer greater than or equal to the given number', function(){
  it('returns an integer if precision is not specified', function(){
    expect(ceil(4.006)).to.be.equal(5)
    expect(ceil(4.000)).to.be.equal(4)
  })
  it('returns an integer if precision is zero', function(){
    expect(ceil(5.56789476740, 0)).to.be.equal(6)
  })
  it('if the first argument is a float and the second argument is greater than zero, will return the smallest float greater than or equal to the given float with the number of places after the decimal equal to the second argument', function(){
    expect(ceil(7.004, 2)).to.be.equal(7.01)
    expect(ceil(4.123456, 3)).to.be.equal(4.124)
  })
})
