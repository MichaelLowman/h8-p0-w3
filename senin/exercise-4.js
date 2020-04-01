var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){

input.splice(1, 1, "Roman Almasyah Elsharawy")
input.splice(2, 1, "Provinsi Bandar Lampung" )//Mengganti nilai array 
input.splice(4, 1, "SMA International Metro")//Mengganti nilai array

let tanggal = input[3].split('/'); //split
let bulan = tanggal[1];//membuat variabel bulan

tanggal.sort(function(a,b){

   return b.length - a.length;
  
})

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

console.log(tanggal);
console.log(tanggal.join('-'));

let irisan1 = input[1];
console.log(irisan1.slice(0,15));

}

dataHandling2(input);




