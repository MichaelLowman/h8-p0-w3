var nama = ['budi', 'harun' , 'dona' , 'jhon', 'dona', 'harun', 'doni', 'dono'];
var newNama =[]
for(let i=0; i<nama.length; i++){
    var flag = false;

    for(let j=0; j<i; j++){
        
        if(newNama[j] == nama[j]){
            flag = true;
            

        }
 
    }
    if(flag == false){
        newNama.push(nama)
    
    }

}

console.log(newNama);