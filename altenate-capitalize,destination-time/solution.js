function toCamelCase(str){
  var array = str.split('');
  var separate =[];
  var iphem =[];
  for(var i = 0;i<array.length; i++){
    if(array[i]=== '-'||array[i]==='_'){
      iphem.push(array[i])
      separate.push(array[i+1].toUpperCase());
      i++;
    }
    else{
      separate.push(array[i]);
    }
  }
  return separate.join('');
  }