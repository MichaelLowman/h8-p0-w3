function groupAnimals(animals) {
    // you can only write your code here!
   let newAnimals = [];
   let binatang = []
   var hurufa = []
   var str = ''
   var huruf =''
   var kebunbinatang=[];


   for(i=0; i<animals.length; i++){
       huruf += animals[i][0];
       
} //console.log(huruf)

         for(let i=0; i<huruf.length; i++ ){
             var flag = false
            for(let j=0; j<huruf.length; j++){

           if(huruf[i] == hurufa[j]){
               flag = true;}    
           }
           
           if(flag == false){
           hurufa.push(huruf[i]);   
           }

       }
  
        
       for(i=0; i<hurufa.length; i++){
        binatang = []
        for(j=0; j<animals.length; j++){
            if(hurufa[i] == animals[j][0]){

                binatang.push(animals[j])
                
            }
        }
        kebunbinatang.push(binatang)
        }
     

       for(let i=0; i<kebunbinatang.length; i++ ){
        for(let j=0; j<kebunbinatang.length; j++){

            if(kebunbinatang[j]>kebunbinatang[j+1]){

                var y = kebunbinatang[j+1]
                kebunbinatang[j+1] = kebunbinatang[j]
                kebunbinatang[j] = y

            }
            
        }
    }


                    

return kebunbinatang


  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]