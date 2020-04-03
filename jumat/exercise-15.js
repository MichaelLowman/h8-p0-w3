function groupAnimals(animals) {
    // you can only write your code here!
   var newAnimal= [];
   
   for(let i=0; i<animals.length; i++){
       for(let j=0; j<animals.length; j++){
          if(animals[j] > animals[j+1]){
              var temp = animals[j+1]
              animals[j+1] = animals[j]
            animals[j] = temp;
          }
          
         

       }
   }
   
   for(i=0; i<animals.length; i++){
       newAnimal =[]
       for(j=0; j<animals.length; j++){
           if(animals[j][0] == animals[j][0]){

               newAnimal.push(animals[i])
           }
         
       }
   }

    return newAnimal;

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]