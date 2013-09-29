var slice = [].slice;

function existUndefinedArg(args) {
  return args.filter(function (element, index, array) {
    return element === undefined;
  }).length > 0;
}

function concatArguments(args, reservedArgs) {
  var mergedArgs = [], pushedIndex = 0;
  reservedArgs.forEach(function (element, index) {
    var elem = element === undefined ? args[pushedIndex++] : element;
    mergedArgs.push(elem);
  });

  return mergedArgs.concat(args.slice(pushedIndex));
}

function curry(fn) {
  var totalArgsLength = fn.length;

  function generateCurried() {
    var reservedArgs = slice.call(arguments);
    var forceGenerating = false;

    function curried() {
      var args = concatArguments(slice.call(arguments), reservedArgs);
      
      if (!forceGenerating && args.length >= totalArgsLength && !existUndefinedArg(args)) {
        return fn.apply(null, args);
      } else {
        return generateCurried.apply(null, args);
      }
    }

    curried._ = function () {
      forceGenerating = true;
      return generateCurried.apply(null, concatArguments(slice.call(arguments), reservedArgs));
    };

    return curried;
  }

  return generateCurried();
}

module.exports = curry;