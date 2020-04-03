function hitungJumlahKata(kalimat) {
    // you can only write your code here!
   
    
    var kalimat1 = []
    var kata = '';
 
    for (j = 0; j<kalimat.length; j++){
        
        if (kalimat[j] != ' '){

            kata += kalimat[j] ;
            
            if(j == kalimat.length- 1){
                kalimat1.push(kata)
            }

            
            }else if (kalimat[j] == ' '){
                kalimat1.push(kata);
                kata =''
                
            }
           
                
    }
   return kalimat1.length;
    
 }
  
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
 console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
 console.log(hitungJumlahKata('A song to sing')); // 4
 console.log(hitungJumlahKata('I ')); // 1
 console.log(hitungJumlahKata('I believe I can code')); // 5