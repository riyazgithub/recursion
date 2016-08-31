// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var retArray = parse(document.body,[],className);
  return retArray;
};

  function parse(node,retArray,className) {
    if (node.classList && node.classList.contains(className)) {
      retArray.push(node);
    }
    (node.childNodes).forEach(function(child) {
    	console.log("child "+child)
      parse(child,retArray,className);
    });
    return retArray
  };

