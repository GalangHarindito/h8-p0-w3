function palindrome(kata){
var kata1 = kata.toLowerCase()

for(var i = 0; i<(kata1.length - 1)/2; i++){
    if ( kata1[i] !== kata1.slice(-1-i)[0]){
    console.log('false')
    return false
     }
  }
console.log('true')
return true
}




palindrome('blanket'); // false
palindrome('katak'); // true
palindrome('civic'); // true
palindrome('kasur rusak'); // true
palindrome('mister'); // false


