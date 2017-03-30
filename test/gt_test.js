import chai from 'chai'
import { gt } from '../src/lang/gt'

let expect = chai.expect
let should = chai.should()

describe('gt returns true if first argument is greater than the second argument and false if it is not', function(){
  it('should return true if first argument is greater than second', function(){
    expect(gt(45, 9*3)).to.equal(true)
    expect(gt(Math.max(45, 100, 4), Math.max(20, 19, 18))).to.equal(true)
    expect(gt(103-3, 5+5)).to.equal(true)
  })
  it('should return false if first argument is not greater than second', function(){
    expect(gt(45, 55)).to.equal(false)
    expect(gt(Math.min([45, 100,4]), Math.min([100, 19, 1800]))).to.equal(false)
    expect(gt(103-93, 5+5)).to.equal(false)
  })
})
