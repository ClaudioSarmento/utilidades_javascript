{{{{var sera = 'Será???'}}}} // var é vissível fora do scopo
console.log(sera)

function teste(){
    var local = 123
}

teste()
console.log(local)