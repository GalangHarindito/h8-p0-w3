
 function dataHandling (input){
     var result=''
    for(i = 0;i<input.length;i++){     
    result = 'ID : ' + input [i][0] + '\nnama Lengkap : '+input [i][1] + '\nTTL : ' + input [i][2] + input [i] [3] + '\nHobi : ' + input [i][4]
        result += '\n'
        console.log(result)
  }
}




 dataHandling ([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
])



