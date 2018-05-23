function high(x){
  var split1 = x.split(' ');
  var final = [];
  var result = 0;
  
  for(var i = 0; i<split1.length;i++){
  var target = split1[i];
  
  for(var j = 0; j<target.length; j++){
  result += target.charCodeAt(j)-96;
  }
  final.push(result);
  result = 0;
  }
  
  var largest =(Math.max.apply(null, final));
  for(var e = 0;e<final.length;e++){
    if(final.includes(largest)){
      var test = final.indexOf(largest)
  
    }
  }
  return split1[test]