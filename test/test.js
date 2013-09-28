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
    
    describe('undefined at the tail of arguments', function () {
      
      it('should return a curried function', function (done) {
        curriedFunc(1, 2, undefined).should.be.a('function');
        done();
      });

      it('should return correct value', function (done) {
        curriedFunc(1, 2, undefined)(3).should.equal(6);
        done();
      });

    });

    describe('undefined at the head of arguments', function () {
      
      it('should return a curried function', function (done) {
        curriedFunc(undefined, 2, 3).should.be.a('function');
        done();
      });

      it('should return correct value', function (done) {
        curriedFunc(undefined, 2, 3)(1).should.equal(6);
        done();
      });

    });

    describe('undefined in the middle of arguments', function () {
      
      it('should return a curried function', function (done) {
        curriedFunc(1, undefined, 3).should.be.a('function');
        done();
      });

      it('should return correct value', function (done) {
        curriedFunc(1, undefined, 3)(2).should.equal(6);
        done();
      });

    });

    describe('undefined for all arguments', function () {
      
      it('should return correct value', function (done) {
        curriedFunc(undefined, undefined, undefined)(1, 2, 3).should.equal(6);
        done();
      });

    });

    describe('use undefined more than curried level', function () {
      
      it('should return correct value', function (done) {
        curriedFunc(undefined, 2, undefined)(1)(3).should.equal(6);
        curriedFunc(undefined, 2, undefined)(undefined)(1)(undefined)(3).should.equal(6);
        done();
      });

    });

  });

});