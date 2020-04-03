var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

//function datadiri(input){

    for(var i=0; i<=input.length-1; i++){
        
        var id = input[i][0];
        var nama = input[i][1];
        var TTL  = input[i][2] + ' ' + input[i][3];
        var hobi = input[i][4];
        
        console.log ('id: ' + id + '\n' + 'nama: ' + nama + '\n' + 'TTL: ' +  TTL + '\n' + 'Hobi: ' + ' ' + hobi);
        console.log('\n')
        
        

        
}
    


//}
