import chai from 'chai'
import { max } from '../src/math/max'

let expect = chai.expect
let should = chai.should()

describe('Get highest number in an array', function(){
  it('if array contains operations, those are performed and the highest result returns', function(){
    expect(max([4 + 7, 10 + 100, 4.7, 10.1, 100.25])).to.equal(110)
    expect(max([4 + 7, 10 - 100])).to.equal(11)
    expect(max([4 / 7, 10 * 100])).to.equal(1000)
  })
  it('if array contains integers and or floats, returns highest value in the array', function(){
    expect(max([4.7, 10.3, 100, 18, 34])).to.equal(100)
    expect(max([4, 7, 10, 100])).to.equal(100)
    expect(max([4.7, 10.1, 100.25])).to.equal(100.25)
  })
})
