
function insertDash(num) {
  const output = [];

 num = num.toString().split('');
 
 for (let i = 0; i < num.length; i++) {
   output.push(num[i]);
   if (num[i] % 2 === 1 && num[i +1] % 2 === 1) {
     output.push('-');
   }
 }
 
  
  return output.join('');
}