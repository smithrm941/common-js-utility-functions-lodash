import chai from 'chai'
import { multiply } from '../src/math/multiply'

let expect = chai.expect
let should = chai.should()

describe('multiplies one argument by another', function(){
  it('returns the product of two arguments', function(){
    expect(multiply(1, 2)).to.equal(2)
    expect(multiply(45, 9)).to.equal(405)
  })
})
