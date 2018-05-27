function capitalize(s,arr){
  var split = s.split('');
  var answer = [];
for(var i = 0; i<split.length; i++){
if(arr.includes(i)){
 answer.push(split[i].toUpperCase());
}
else{
  answer.push(split[i])
}
}
return answer.join('');
}