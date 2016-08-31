// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(str) {
  // your code goes here
  	switch (typeof str)
	{
	case 'number':
	case 'boolean':
	return str.toString();
	break;
	case 'undefined':
	case 'function':
	return null;
	break;
	case 'string':
	return '"' + str + '"';
	break;
	case 'object':
	var retArr = []
	if(Array.isArray(str)){
	
	for(var i=0;i< str.length; i++){
		var val = stringifyJSON(str[i]);
		if(val !== null) {
			retArr.push(val)

		}
	}
	return '[' + retArr.join(',') + ']';
	}
	else if (str == null){
		return 'null'
	}
	else{
		Object.keys(str).forEach(function(x){
			var value = stringifyJSON(str[x]);
			if (value !== null) {
				retArr.push('"' + x + '"' + ':' + stringifyJSON(str[x]));
			}
	});
	return '{' + retArr.join(',') + '}';
	}
	}

};

debug(stringifyJSON([1, 'false', false]))
