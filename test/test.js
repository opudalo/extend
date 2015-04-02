import 'babel/polyfill'
import extend from '../src/index'
import {expect} from 'chai'


describe('extend basics', (done) => {
  var obj = { a : 1 }

  it('should exist', (done) => {
    expect(extend).to.be.function
    done()
  })

  it('should extend nothing', (done) => {
    extend(obj)
    expect(obj).to.deep.equal({ a : 1 })
    done()
  })

  it('should override existing properties', (done) => {
    extend(obj, { a : 3 })
    expect(obj).to.deep.equal({ a : 3 })
    done()
  })

  it('should add new properties', (done) => {
    extend(obj, { b : 2 })
    expect(obj).to.deep.equal({ a : 3, b : 2 })
    done()
  })

  it('should return the obj', (done) => {
    expect(extend(obj)).to.deep.equal(obj)
    done()
  })
})
