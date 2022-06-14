// Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(10,20)
imprimirSoma(2)
imprimirSoma(10,10,30,40)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 0){
    return a+b
}

console.log(soma(10,5))