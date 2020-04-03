var datax=[];
var datao=[];
var jarakterdekat= [];
var arr =['' ,'', 'o','','','','o','','',''] 



    for(i=0; i<arr.length; i++){
        if (arr[i] === 'o'){
            datao.push(i);
        }else if(arr[i] === 'x'){
            datax.push(i);  
        }
       
    }

    for(let x=0; x<=datao.length;x++){
        for(let j=0; j<datax.length; j++){
           if(datax == 0){
             jarakterdekat = 0;
           }else{
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



    
    console.log(jarakterdekat[0])
    
    console.log(datao)
    console.log(datax)

