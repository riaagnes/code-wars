function isNice(arr){
 
  if(arr.length === 0 ||arr.length === 1){
  return false
  }
for(var i = 0; i<arr.length;i++){
  var target = arr[i];

  if(arr.includes(target+1)||arr.includes(target-1)){
    
  }
 
  else{
    return false;
  }
}
return true;
}