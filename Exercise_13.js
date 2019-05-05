function targetTerdekat(arr) {
   if(arr.indexOf ('x') === -1){
    return 0 
   }else{
   var o = arr.indexOf('o')
   var jarakX = arr.length
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      var length1 = Math.abs(i - o)
      if (length1 < jarakX) {
        jarakX = length1
        }
   }
  }
  }
  return jarakX
}
  // TEST CASES
//   console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  // console.log(targetTerdekat(['', ' ', ' ', ' ', '', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2