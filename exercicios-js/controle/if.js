function soBoaNotificia(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

soBoaNotificia(8.1)
soBoaNotificia(6.1)

function seForVerdadeEufalo(valor){
    if(valor){
        console.log('é verdade... '+valor)
    }
}

seForVerdadeEufalo()
seForVerdadeEufalo(null)
seForVerdadeEufalo(undefined)
seForVerdadeEufalo(NaN)
seForVerdadeEufalo('')
seForVerdadeEufalo(0)
seForVerdadeEufalo(-1)
seForVerdadeEufalo(' ')
seForVerdadeEufalo('?')
seForVerdadeEufalo([])
seForVerdadeEufalo([1,2])
seForVerdadeEufalo({})