var replaceDots = function(str) {
  var strArray = str.split('');
  var array =[];
  for(var i = 0; i<strArray.length; i++){
  
    if(strArray[i] === '.'){
   array.push('-');
    }
    else{
  array.push(strArray[i]);
    }
    
  }
    return array.join('');}