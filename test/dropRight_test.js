import chai from 'chai'
import { dropRight } from '../src/array/dropRight'

let expect = chai.expect
let should = chai.should()

describe('dropRight creates a slice of an array with n elements dropped from the end', function(){
  it('if no second argument is provided or second argument is 0, the last element is dropped', function(){
    expect(dropRight([96, 3, 19, 23])).to.deep.equal([96, 3, 19])
    expect(dropRight([48.5, [1, 2, 3], 'ok?'])).to.deep.equal([48.5, [1, 2, 3]])
    expect(dropRight(['Don\'t', 'do', 'drugs'], 0)).to.deep.equal(['Don\'t','do'])
  })
  it('if second argument is greater than zero, drop that number of elements from the end of the array', function(){
    expect(dropRight(['Don\'t', 'do', 'drugs'], 2)).to.deep.equal(['Don\'t'])
    expect(dropRight([19489, 939394388, 100101, 341], 5)).to.deep.equal([])
  })
})
