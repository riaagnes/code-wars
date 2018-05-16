function disemvowel(str) {
 
  var split = str.split('');
  var array = ['a','e','i','o','u','A','E','I','O','U'];
  for(var i = 0; i<split.length; i++){
    var target = split[i];
    var target2 = split[i+1]
    if(array.includes(target)){
      split.splice(i,1);
    }
    if(array.includes(target2)){
      split.splice(i+1,1);
    }
  }
  return split.join('');
}
