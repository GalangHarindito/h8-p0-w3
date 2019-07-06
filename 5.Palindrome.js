function palindrome(kata) {
    var kata1 = ''
    var result = ''
    for(var i=kata.length-1;i>=0;i--){
        kata1 += kata[i]
    }
     if(kata===kata1){
            result += 'true'
        }else{
            result += 'false'
        }
   return result
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false