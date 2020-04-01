arr=[3,4,2,7,5,1,6];
var y;
for(var i = 0 ; i <= arr.length-1; i++) {
    for(var j= 0; j< i; j++) {
        if (arr[j] > arr[j + 1]) {
            y = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = y
        }
    }
}
console.log(arr)