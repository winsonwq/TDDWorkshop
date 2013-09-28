var slice = [].slice;

function curry(fn) {
  var totalArgsLength = fn.length;

  function generateCurried() {
    var reservedArgs = slice.call(arguments);

    function curried() {
      var args = slice.call(arguments).concat(reservedArgs);

      if (args.length == totalArgsLength) {
        return fn.apply(null, args);
      } else {
        return generateCurried.apply(null, args);
      }
    }

    return curried;
  }

  return generateCurried();
}

module.exports = curry;