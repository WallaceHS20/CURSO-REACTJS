function acao(){
    console.log('====================================');
    console.log("adicionaaa");
    console.log('====================================');
}

//EXECUTA EM INTERVALOS DE TEMPO - EXECUÇÃO CONTINUA 
setInterval(() => {
    acao()
}, 2000);

// OUTRA MANEIRA
setInterval(acao, 1000)

//INTERROMPENDDO UM INTERVALO
const timer = setInterval(acao, 1000)
clearInterval(timer)


//EXECUTA APÓS DETERMINADO TEMPO - EXECUÇÃO ÚNICA
setTimeout(acao, 1000)