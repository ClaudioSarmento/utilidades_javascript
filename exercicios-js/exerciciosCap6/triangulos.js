const tipoTriangulo = (lado1, lado2, lado3) => {
    if(lado1 === lado2 && lado2 === lado3) return console.log("O triangulo é Equilátero") 
    else if(lado1 === lado2 || lado2 === lado3) return console.log( "O triangulo é Isósceles")
    return console.log("Todos os lados são diferentes")
}

tipoTriangulo(1,1,1)
tipoTriangulo(1,2,2)
tipoTriangulo(2,2,1)
tipoTriangulo(1,2,3)

