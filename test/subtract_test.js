import chai from 'chai'
import { subtract } from '../src/math/subtract'

let expect = chai.expect
let should = chai.should()

describe('subtracts two arguments together', function(){
  it('returns the sum of two arguments', function(){
    expect(subtract(1, 2)).to.be.equal(3)
    expect(subtract(41, 411)).to.be.equal(452)
  })
})
