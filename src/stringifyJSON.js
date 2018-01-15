// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let results = [];

  if (Array.isArray(obj) === true) {
    obj.forEach((elements) => results.push(stringifyJSON(elements)));
    return `[${results.join(',')}]`;
  }

  if (typeof obj === 'object') {
    if (obj === null) {
      return 'null';
    } else { 
      for (var key in obj) {
        if (typeof obj[key] !== 'function' || !obj.hasOwnProperty(undefined)) {
          results.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
        }
      }
      return '{' + results + '}';
    }
  }


  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (typeof obj === 'number', 'boolean', 'string') {
    return '' + obj;
  }

};



//    {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
  // {
  //   'functions': function() {},
  //   'undefined': undefined
  // }





