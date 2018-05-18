function solution(str){
  let answer = [];
  let array = str.split('');
  for(let i = array.length-1; i>=0; i--){
    
  var target =array[i];

  answer.push(target);
  
  
  }
  return answer.join('');
  };