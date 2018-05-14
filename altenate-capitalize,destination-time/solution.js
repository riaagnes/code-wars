function capitalize(s){
  var answer =[];
  var answer2 =[];
  var final =[]
  var split = s.split('');
  for(var i = 0; i<split.length;i++){
 if(i%2 === 0){
  var target = split[i].toUpperCase();
  answer.push(target)
 }
 else{
   answer.push(split[i]);
 }
  }
 
  
  for(var j =0;j<split.length;j++){
   
    if(j%2 === 0){
      
  answer2.push(split[j])
    }
     else{
       var target2 =split[j].toUpperCase()
   answer2.push(target2);
 }
  }
var joinanswer = answer.join('');
var joinanswer2 = answer2.join('');
final.push(joinanswer,joinanswer2);
return final
}