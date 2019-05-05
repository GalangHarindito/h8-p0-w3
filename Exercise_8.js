function pasanganTerbesar(num) {
    var num2 = num.toString().split('');
    var result = [];
    for (var i = 0; i < num2.length - 1; i++) {
      result[i] = Number(num2[i] + num2[i + 1]);
    }
    var terbesar_sementara= result[0];
    for (var j = 1; j < result.length; j++){
      if(result[j] > terbesar_sementara){
        terbesar_sementara = result[j];
      }
    }
    return terbesar_sementara;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99