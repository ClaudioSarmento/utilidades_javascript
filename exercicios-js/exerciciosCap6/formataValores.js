function formataValores(valor){
    return console.log(`R$${valor.toFixed(2).toString().replace('.',',')}`)
}

formataValores(0.30000000000000004)