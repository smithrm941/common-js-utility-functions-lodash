import chai from 'chai'
import { isString } from '../src/lang/isString'

let expect = chai.expect
let should = chai.should()

describe('isString returns true if argument is a string and false if it is not', function(){
  it('should return true if argument is a string', function(){
    expect(isString('5 > 2*2')).to.equal(true)
    expect(isString('Thin Lizzy is the best band ever!!!')).to.equal(true)
    expect(isString('Hello, it\'s me')).to.equal(true)
    expect(isString('true')).to.equal(true)
    expect(isString('false')).to.equal(true)
  })
  it('should return false if argument is not a string', function(){
    expect(isString(typeof [{'a': 'cheese'}, {'a': 'cheese', 'b': 'pepperoni', 'c': 'anchovies'}, {'Barry Bonds': 25, 'Jeff Kent': 21, 'JT Snow': 6}] === 'object')).to.equal(false)
    expect(isString(10223)).to.equal(false)
    expect(isString(Math.min(45, 100,4))).to.equal(false)
    expect(isString(true)).to.equal(false)
    expect(isString(undefined)).to.equal(false)
  })
})
