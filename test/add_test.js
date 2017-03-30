var expect = require ('chai').expect
var add = require ('../src/math/add')

describe('add()', function()){
  it('should add two arguments together', function(){
    expect(add(1, 2)).to.deep.equal(3)
    expect(add(41, 411)).to.deep.equal(452)
    expect(add(-41, 411)).to.deep.equal(370)
    expect(add(-114, -41)).to.deep.equal(-155)
  })
}
