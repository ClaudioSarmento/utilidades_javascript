const nums = [1,2,3,4,5]

// For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log('resultado: ', resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinhero = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let resultado2 = nums.map(soma10)
let resultado3 = nums.map(triplo)
let resultado4 = nums.map(paraDinhero)
let resultado5 = nums.map(soma10).map(triplo).map(paraDinhero)

console.log('resultado 2: ',resultado2)
console.log('resultado 3:' ,resultado3)
console.log('resultado 4: ',resultado4)
console.log('resultado 5: ',resultado5)

