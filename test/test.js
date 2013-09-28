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

});