function soma() {
    let soma = 0
    for(i in arguments){
        if(isNaN(arguments[i])){
            continue
        } 
        soma += arguments[i]
    }
    return soma
}

console.log(soma(10,10,10))
console.log(soma())
console.log(soma(10,10,10,'cl',20,0.1))