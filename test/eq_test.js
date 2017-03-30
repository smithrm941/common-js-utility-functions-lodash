import chai from 'chai'
import { eq } from '../src/lang/eq'

let expect = chai.expect
let should = chai.should()

describe('eq returns true if arguments are equivalent and false if they are not', function(){
  it('should return true for two equivalent arguments', function(){
    expect(eq(45, 9*5)).to.equal(true)
    expect(eq(Math.max(45, 100, 4), Math.max(100, 19, 18))).to.equal(true)
    expect(eq(103-93, 5+5)).to.equal(true)
  })
  it('should return false for two non-equivalent arguments', function(){
    expect(eq(45, 9+5)).to.equal(false)
    expect(eq(Math.min([45, 100,4]), Math.min([100, 19, 18]))).to.equal(false)
    expect(eq(103-93, 5*5)).to.equal(false)
  })
})
