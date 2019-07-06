function tentukanDeretAritmatika(arr) {
    var arr2 = arr.slice(-1) - arr.slice(-2, -1);
    var hasilSelisih=[]
    
    for(var i=1;i<arr.length;i++){
    var selisih = arr[i] - arr[i-1]
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
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false