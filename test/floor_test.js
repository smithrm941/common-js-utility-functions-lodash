import chai from 'chai'
import { floor } from '../src/math/floor'

let expect = chai.expect
let should = chai.should()

describe( 'return the smallest integer less than or equal to the given number', function(){
  it('returns an integer if precision is not specified', function(){
    expect(floor(4.006)).to.be.equal(4)
    expect(floor(4.000)).to.be.equal(4)
  })
  it('returns an integer if prscision is zero', function(){
    expect(floor(5.56789476740, 0)).to.be.equal(5)
  })
  it('if the first argument is a float and the second is greater than zero, will return the smallest float less than or equal to the give float with the number of places after the decimal equal to the second argument', function() {
    expect(floor(7.1141, 2)).to.be.equal(7.11)
    expect(floor(452.123456, 3)).to.be.equal(452.123)
    expect(floor(1008.974599, 4)).to.be.equal(1008.9745)
  })
  it('if the resulting float only contains zeros after the decimal, then it returns an integer', function(){
    expect(floor(7.004, 2)).to.be.equal(7)
    expect(floor(41.114, 2)).to.be.equal(41.11)
  })
})
