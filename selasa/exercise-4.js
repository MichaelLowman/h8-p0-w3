var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){

input.splice(1, 1, "Roman Almasyah Elsharawy")
input.splice(2, 1, "Provinsi Bandar Lampung" )//Mengganti nilai array 
input.splice(4, 1, "SMA International Metro")//Mengganti nilai array

let tanggal = input[3].split('/'); //split
let bulan = tanggal[1];//membuat variabel bulan


console.log(input);

switch(bulan){
    case '01' :  { console.log('januari'); break; }
    case '02' :  { console.log('februari'); break; }
    case '03' :  { console.log('Maret'); break; }
    case '04' :  { console.log('april'); break; }
    case '05' :  { console.log('Mei'); break; }
    case '06' :  { console.log('juni'); break; }
    case '07' :  { console.log('juli'); break; }
    case '08' :  { console.log('Agustus'); break; }
    case '09' :  { console.log('September'); break; }
    case '10' :  { console.log('Oktober'); break; }
    case '11' :  { console.log('November'); break; }
    case '12' :  { console.log('Desember'); break; }
}

var newTanggal = [];
//sorting tanggal
for(let i=0; i<tanggal.length; i++){
    
    newTanggal.push(tanggal[i]);
     } 

 for(i=0; i <= newTanggal.length; i++){   
    for(let j=0; j<=newTanggal.length; j++){
        
     if(Number(newTanggal[j]) < Number(newTanggal[j+1])){
         var y = newTanggal[j+1]
         newTanggal[j+1] = newTanggal[j]
         newTanggal[j] = y
          
    }    
  }   
 }

console.log(newTanggal);
console.log(tanggal.join('-'));

let irisan1 = input[1];
console.log(irisan1.slice(0,15));

}

dataHandling2(input);




