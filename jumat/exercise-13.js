function targetTerdekat(arr) {
    // you can only write your code here!

    var datax=[];
    var datao=[];
    var jarakterdekat= [];
    
    
    
    
        for(i=0; i<arr.length; i++){
            if (arr[i] === 'o'){
                datao.push(i);
            }else if(arr[i] === 'x'){
                datax.push(i);  
            }
           
        }
        if(datax.length == 0){
            return jarakterdekat = 0;
          }else{
    
        for(let x=0; x<=datao.length;x++){
            for(let j=0; j<datax.length; j++){
              
                if(datao[x]<datax[j]){
                    var selisih = datax[j] - datao[x]
                    
                }else if(datao[x]>datax[j]){
                    selisih = datao[x] - datax[j] //agar selisih tidak bernilai negatif
                    
                }
                jarakterdekat.push(selisih);
               }
    
    
            }
        }
    
         for(i=0; i<=jarakterdekat.length; i++){
             for(y=0; y<jarakterdekat.length; y++){
                 if(jarakterdekat[y]>jarakterdekat[y+1]){
                     var temp = jarakterdekat[y+1];
                     jarakterdekat[y+1] = jarakterdekat[y]
                     jarakterdekat[y] = temp
    
    
    
    
                 }
    
             }
             
    
    
         }
    
    
    
        
        return(jarakterdekat[0])
        
        





  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2