let pontuacao = [10,20,20,8,25,3,0,30,1]

function pontucaoJogos(pontuacao){
    let numero_de_vezes_bateu_record = 0;
    let record = pontuacao[0];
    let pior_record = pontuacao[0];
    let pior_jogo = 0;

    for(i = 0; i < pontuacao.length; i++){
        if(pontuacao[i] > record){
            numero_de_vezes_bateu_record++
            record = pontuacao[i]
        }
        if(pontuacao[i] < pior_record){
            pior_record = pontuacao[i]
            pior_jogo = i + 1
        }
    }
    return console.log(`Vezes que bateu record: ${numero_de_vezes_bateu_record}, Número do pior jogo: ${pior_jogo}`)
}

pontucaoJogos(pontuacao)