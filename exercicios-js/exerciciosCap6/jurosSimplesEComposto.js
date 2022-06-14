function JurosSimples(capital_inicial, taxa_de_juros, tempo_aplicacao){
    let valor_juros = (capital_inicial * taxa_de_juros) / 100;
    return console.log(`R$${capital_inicial + valor_juros * tempo_aplicacao}`)
}

function JurosComposto(capital_inicial, taxa_de_juros, tempo_aplicacao){
    for(i = 0; i < tempo_aplicacao; i++){
        capital_inicial += ((capital_inicial * taxa_de_juros / 100))
    }
    return console.log(`R$ ${capital_inicial.toFixed(2).toString().replace('.',',')}`)
}

JurosSimples(1000,10,12)
JurosComposto(1000,10,12)
