


function balikString(kata){
    var x=''
    for(var i= 0; i<kata.length; i++){
        x = kata[i]+x
    }
    return x
  }

console.log(balikString('Hello World!'))