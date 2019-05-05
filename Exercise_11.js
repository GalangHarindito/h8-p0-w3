function tentukanDeretAritmatika(arr) {
  var arr2 = arr.slice(-1) - arr.slice(-2, -1);
  var result = true;
  

  
  for (var i = arr.length-1; i > 0; i--) {
    var selisih =[]
     var hasilSelisih = (arr[i] - arr[i-1])
     selisih.push(hasilSelisih)
    if (arr2 !== selisih[0]) {
    var result = false;
    }
  } 
  return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false



 