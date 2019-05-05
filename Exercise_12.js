function tentukanDeretGeometri(arr) {
    var arr2 = Math.round(arr.slice(-1)/arr.slice(-2, -1));
    var result = true;
    
  
    
    for (var i = arr.length-1; i > 0; i--) {
      var selisih =[]
       var hasilSelisih = Math.round((arr[i] / arr[i-1]))
       selisih.push(hasilSelisih)
      if (arr2 !== selisih[0]) {
      var result = false;
      }
    } 
    return result;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false