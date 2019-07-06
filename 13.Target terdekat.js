function targetTerdekat(arr) {
    if(arr.indexOf('x') === -1){
        return 0
    }else{
        var o = arr.indexOf('o')
        var jarak = arr.length
        for(i=0;i<arr.length;i++){
            if(arr[i] === 'x'){
             var jarak1 = Math.abs(i-o)
             if(jarak1 < jarak){
                 jarak = jarak1
             }
            }
        }
    }
    return jarak
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2