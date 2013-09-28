function curry(fn) {
  var totalArgsLength = fn.length;

  function curried() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length == totalArgsLength) {
      return fn.apply(null, args);
    } else {
      return function () {};
    }
  }

  return curried;
}

module.exports = curry;