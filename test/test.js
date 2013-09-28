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

  

});