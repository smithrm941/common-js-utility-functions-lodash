import chai from 'chai'
import { inRange } from '../src/number/inRange'

let expect = chai.expect
let should = chai.should()

describe('inRange returns true if the first argument falls between the second and third argument and false if not', function(){
  it('returns true if the first argument falls between the second and third argument', function(){
    expect(inRange(41, 14, 411 )).to.equal(true)
  })
  it('returns false if the first argument doesn\'t fall between the second and third argument', function(){
    expect(inRange(1, 2, 3)).to.equal(false)
  })
  it('if there is no third argument inRange check if first argument falls between zero and second argument', function(){
    expect(inRange(1, 2)).to.equal(true)
    expect(inRange(41, 411)).to.equal(true)
    expect(inRange(-41, 411)).to.equal(false)
  })
})
