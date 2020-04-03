function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
   
    var benar = 0;
    var salah = 0;
    
    for(j=0; j<arr.length-1; j++){
        //console.log(num[j] + ' ' + num[j+1])
        var coba = arr[1] - arr[0];
        if(arr[j+1] - arr[j] == coba){
            
            benar++
        }else {
            salah++
        }
        
        }

        if(salah !== 0){
           return false
        }else{
            return true
        }
   }
   
  
  
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false