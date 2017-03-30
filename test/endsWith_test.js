import chai from 'chai'
import { endsWith } from '../src/string/endsWith'

let expect = chai.expect
let should = chai.should()

describe('endsWith checks if given string ends with a given target string', function(){
  it('with a third argument (an integer), true is returned if the end of the substring equal to the length of the third argument, starting at the beginning of the initial string, matches the target string.'
  })

  it('without a third argument, true is returned if the end of the entire initial string matches the second argument', function(){
    expect(endsWith('alphabet soup', 'soup')).to.equal(true)
    expect(endsWith('McClelland', 'land')).to.equal(true)
  })
})
