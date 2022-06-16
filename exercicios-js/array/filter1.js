const produtos = [
    {nome: 'Notebook', preco: '2499', fragil: true},
    {nome: 'iPad Pro', preco: '4199', fragil: true},
    {nome: 'iPad Pro2', preco: '4199', fragil: false},
    {nome: 'Copo de Vidro', preco: '12.49', fragil: true},
    {nome: 'Copo de Plástico', preco: '18.99', fragil: false},
]

// filter em uma unica função
console.log(produtos.filter(function (p){
    return p.preco >= 500 && p.fragil === true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // o javascript já entende que produto.fragil é true ou false 

console.log("================================================")

// filter encadeado
console.log(produtos.filter(caro).filter(fragil))