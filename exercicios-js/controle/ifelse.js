const imprimirResultado = function(nota){
    if(typeof(nota)!= 'number'){
        return console.log("Valor não é um número")
    }
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(7)
imprimirResultado('ola') // cuidado!!!
imprimirResultado(-7)
imprimirResultado(8)
imprimirResultado(6.9)
