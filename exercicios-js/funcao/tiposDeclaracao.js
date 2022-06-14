console.log(soma(3,4)) // mesmo antes de declarada o interpretador já carrega a função
console.log(sub(3,4)) // sub is not defined - só funciona após a declaração da função
console.log(mult(3,4)) // sub is not defined - só funciona após a declaração da função

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x,y){
    return x - y
}

// named function expression
const mult = function mult(x,y){
    return x * y
}