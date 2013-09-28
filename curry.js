var slice = [].slice;

function existUndefinedArg(args) {
  return args.filter(function (element, index, array) {
    return element === undefined;
  }).length > 0;
}

function curry(fn) {
  var totalArgsLength = fn.length;

  function generateCurried() {
    var reservedArgs = slice.call(arguments);

    function curried() {
      var args = slice.call(arguments).concat(reservedArgs);

      if (args.length == totalArgsLength && !existUndefinedArg(args)) {
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