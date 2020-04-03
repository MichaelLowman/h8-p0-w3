function pasanganTerbesar(num) {
    // you can only write your code here!

var numtoStr= num.toString();
var tampung = ''
var hasil =''
var strnum = [];

for(let i=0; i<numtoStr.length-1; i++){
  tampung = numtoStr[i] + numtoStr [i+1]
  strnum.push(tampung)}

for(let j=0; j<strnum.length; j++){
    for(let d=0; d<j; d++){
  if(Number(strnum[d])>Number(strnum[d+1])){
       var y = strnum[d+1]
       strnum[d+1] = strnum[d]
       strnum[d] = y
       }
    }
 
 } 
return strnum[strnum.length-1]

}
  
// TESTCASES
 console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99