const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! - Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona elemento ao Array
console.log(pilotos)

pilotos.shift() // Vettel quebrou o carro - Remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adciona elemento na primeira posicao do Array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', 'Massa') /* Antes do indice 2 será adiciona Bottas e Massa,
 2 é o indicie trabalhado 0 indica que não irá remover o indice trabalhado */
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou kkk. Remove um unico elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) /* Retorna um novo Array a partir de um existente, 
neste caso irá retornar um array com os indices a partir do informado -> 2,3,4... */
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) /* indice 1 até o indice 4 porém o indice 4 não entra */
console.log(algunsPilotos2)