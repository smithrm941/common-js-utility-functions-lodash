import chai from 'chai'
import { toUpper } from '../src/string/toUpper'

let expect = chai.expect
let should = chai.should()

describe('Converts string, as a whole, to upper case letters', function(){
  it('if string is given, will return string with all leters in upper case form', function(){
    expect(toUpper('i\'m a boss programmer')).to.equal('I\'M A BOSS PROGRAMMER')
    expect(toUpper('i_\'m a b_oss_ prog_ram_mer')).to.equal('I_\'M A B_OSS_ PROG_RAM_MER')
  })
  it('If not a string will return error message', function(){
    expect(toUpper(['i_\'m a b_oss_ prog_ram_mer'])).to.equal('ERROR USE A STRING')
    expect(toUpper(980438023038)).to.equal('ERROR USE A STRING')
  })
})
