function angkaPalindrome(num) {
  // you can only write your code here!
  

  let str ='';
  let flag = true;
  let angka = num + 1;
  
  while(flag==true){

        angka = angka.toString();
        for(i=angka.length-1; i>=0; i--){

            str += angka[i];

        }
 

        if(str==angka){
            return str
            flag = false
        }
     str='';
     angka = parseInt(angka);
     angka++;
  }

    
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001