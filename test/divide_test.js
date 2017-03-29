import chai from 'chai'
import { divide } from '../src/math/divide'

let expect = chai.expect
let should = chai.should()

describe('divides one argument by another', function(){
  it('returns the quotient of two arguments', function(){
    expect(divide(1, 2)).to.be.equal(0.5)
    expect(divide(45, 9)).to.be.equal(5)
  })
})
