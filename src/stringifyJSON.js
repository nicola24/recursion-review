// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let results = [];

//string
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // if an array
  if (Array.isArray(obj) === true) {
    obj.forEach((elements) => results.push(stringifyJSON(elements)));
    return `[${results.join(',')}]`;
  }

  // if an object or null 
  if (typeof obj === 'object') {
  // if null
    if (obj === null) {
      return 'null';
    // if an object
    } else {
      for (var key in obj) {
        // if a fucntion or undefined
        if (typeof obj[key] === 'function' || obj[key] === undefined) {
          return '{}';
        }
        results.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
      }   
      return '{' + results + '}';
    }
  }
  
  // else make it a string
  return '' + obj;


};