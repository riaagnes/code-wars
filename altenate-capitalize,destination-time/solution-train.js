function reachDestination(distance, speed) {

  var answer = Math.round(((distance/speed)*2));
  var answer2 = answer/2
   if(answer2 === 1){
   return('The train will be there in ' + answer2 + ' hour.'); }
   else if(answer2 > 0 && answer2 !== 1){
   return('The train will be there in ' + answer2 + ' hours.');
   }
  }