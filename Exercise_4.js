dataHandling2 (["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);

function dataHandling2(input){
    input.splice(1,1,"Roman Alamsyah Elsharawy")
    input.splice (2,1,'Provinsi Bandar Lampung')
    input.splice (4,0,'Pria')
    input.splice (5,1,'SMA Internasional Metro')

    console.log(input)

    var date = input[3].split("/")

    console.log (date)

    var bulan = 1
    switch (bulan) {
        case 1 : bulan = 'January' ; break;
        case 2 : bulan = 'February'; break;
        case 3 : bulan = 'Maret'; break;
        case 4 : bulan ='April'; break;
        case 5 : bulan ='May'; break;
        case 6 : bulan ='Juny'; break;
        case 7 : bulan ='July'; break;
        case 8 : bulan ='Augustus'; break;
        case 9 : bulan ='September'; break;
        case 10 : bulan ='October'; break;
        case 11 : bulan ='November'; break;
        case 12 : bulan ='Desember'; break;

    }   
    console.log(bulan)

    // copy var date
    var dateB = []
    for (i = 0; i < date.length;i++){
        dateB.push (date[i])
    }
    console.log(dateB) 


    var dateSort = date.sort ()
    console.log(dateSort)
  
    
    var dateJoin = dateB.join ('-')
    console.log(dateJoin)

    
    var nameSlice = input[1].slice (0,15)
    console.log(nameSlice)
    
    
 
  
   
   }
