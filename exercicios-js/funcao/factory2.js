function criarProduto(nome,preco){
    return{
        nome: nome,
        preco: preco,
        desconto: 5,
    }
}

console.log(criarProduto('Notebook',2199.49))