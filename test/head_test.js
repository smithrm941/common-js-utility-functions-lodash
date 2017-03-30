import chai from 'chai'
import { head } from '../src/array/head'

let expect = chai.expect
let should = chai.should()

describe('head returns the first element of an array', function(){
  it('returns the first element of an array if array contains elements', function (){
    expect(head(['first', 'second', 'third'])).to.equal('first')
    expect(head([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).to.equal(10)
    expect(head([27/3, 14, 21, 8])).to.equal(9)
  })
  it('returns undefined if array is empty', function(){
    expect(head([])).to.be.undefined
  })
})
