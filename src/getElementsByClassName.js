// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

// Returns an array-like object of all child elements which have all of the given class names. 

  var nodes = [];
  var searchNodes = function(element) {
    
    //check if className is within the node
    if (typeof element.classList !== 'undefined' && element.classList.contains(className)) {
      nodes.push(element);
    }
    
    //iterate through each childNodes
    if (element.childNodes) {
      Object.keys(element.childNodes).forEach((key) => searchNodes(element.childNodes[key]));
    }
  };

  searchNodes(document.body);
  return nodes;
};
