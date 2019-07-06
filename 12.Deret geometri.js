function tentukanDeretGeometri(arr) {
    var arr2 = arr.slice(-1) / arr.slice(-2, -1);
    var hasilSelisih=[]
    
    for(var i=1;i<arr.length;i++){
    var selisih = arr[i] / arr[i-1]
    hasilSelisih.push(selisih)
    if(arr2 !== hasilSelisih[0]){
        var result= false
    }else{
        var result = true
      }
     }
    return result
  }
  
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false