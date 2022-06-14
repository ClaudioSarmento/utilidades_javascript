let dobro = function (a){
    return 2 * a
}

console.log(dobro(10))

dobro = (a) => {
    return 2 * a
}

console.log(dobro(10))

dobro = a => 2 * a // return impicito

console.log(dobro(10))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param

console.log(ola())