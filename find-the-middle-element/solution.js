var gimme = function (inputArray) {
  var array = inputArray.concat();
  
    var sorted = inputArray.sort(function(a,b){
      return a-b
    })
  var middle = sorted[1];
   return array.indexOf(middle);
  }