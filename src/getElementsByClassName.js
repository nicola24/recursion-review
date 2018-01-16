// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

// Returns an array-like object of all child elements which have all of the given class names. 

  var nodes = [];
  var searchNodes = function(element) {
    
    // document.body contains classname then push it to array nodes
    if (element.classList.contains(className)) {
      nodes.push(element);
    }
    
    // for (var i = 0; i < element.children.length; i++) {
    //   searchNodes(element.children[i]);
    // }
  };

  searchNodes(document.body);
  return nodes;
};
