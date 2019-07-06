function angkaPalindrome(num) {
   while(true){
       num++;
       var num2 = String(num);
       var num2Reverse = num2.split('').reverse('').join('')
       if(num2 === num2Reverse){
           return Number(num2)
       }
   }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001