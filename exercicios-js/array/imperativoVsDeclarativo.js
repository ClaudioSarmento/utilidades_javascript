const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo - Como fazer
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo - O que eu quero que faça
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) / alunos.length
console.log(total2)

/* select codigo, nome, email from clientes where ativo = 1  
Declarativo (não me preocupo como o banco vai me retornar os dados 
apenas declaro o que eu espero que seja retornado) */