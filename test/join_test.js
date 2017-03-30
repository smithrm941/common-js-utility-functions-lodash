var expect = require ('chai').expect
var join = require ('../src/join')

describe('join()', function (){
  it('should convert all elements within an array into a string', function(){
    expect(join(['a', 'b', 'c', 'd'], '~')).to.be.a('string')
  })

  it('should return a string with elements of an array separated by a separator', function (){
    expect(join(['a', 'b', 'c', 'd'], '~')).to.deep.equal('a~b~c~d')
    expect(join([1, 2, 3, 4], '~')).to.deep.equal('1~2~3~4')
    expect(join([2, 4, 6, 8, 'Who', 'do', 'we', 'appreciate.'],
  ' ')).to.deep.equal('2 4 6 8 Who do we appreciate.')
  })

  it('should return the array as a string and unchanged if the separator is undefined', function(){
    expect(join([1, 2, 3, 4])).to.deep.equal('1,2,3,4')
    expect(join(['string'])).to.deep.equal('string')
  })
})
