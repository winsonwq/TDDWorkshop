var curry = require('../curry.js');
var chai = require('chai').should();

describe('curry', function () {

  var func, curriedFunc;

  beforeEach(function () {
    func = function (a, b, c) {
      return a + b + c;
    };  

    curriedFunc = curry(func);
  });

  it('should return a function', function (done) {
    curriedFunc.should.be.a('function');
    done();
  });

  describe('pass same length of arguments in currid function', function () {

    it('should perform as the same with my function', function (done) {
      curriedFunc(1, 2, 3).should.equal(func(1, 2, 3));
      done();
    });

  });

  describe('not pass enough length of arguments in currid function', function () {
    
    it('should return a function', function (done) {
      curriedFunc(1, 2).should.be.a('function');
      done();
    });

    it('should return same value when I pass the rest of arguments', function (done) {
      curriedFunc(1, 2)(3).should.equal(6);
      done();
    });

    it('should also return a function when I dont\'n pass all rest of arguments', function (done) {
      curriedFunc(1)(2).should.be.a('function');
      done();
    });

    it('should return the same value when I pass rest of arguments again', function (done) {
      curriedFunc(1)(2)(3).should.equal(6);
      done();
    });

  });

  describe('use undefined when create curried function', function () {
    
    describe('undefined at the tail', function () {
      
      it('should return a curried function', function (done) {
        curriedFunc(1, 2, undefined).should.be.a('function');
        done();
      });

      it('should return correct value', function (done) {
        curriedFunc(1, 2, undefined)(3).should.equal(6);
        done();
      });

    });


  });

});