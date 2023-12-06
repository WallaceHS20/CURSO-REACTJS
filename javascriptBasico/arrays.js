var lista = ["lucas", "josé"]

//quantidade de elementos
console.log(lista.length);

console.log('====================================');
//RETORNA A POSIÇÃO DELE
console.log(lista.indexOf('lucas'));
console.log('====================================');

console.log('====================================');
//CONCATENA OS VALORES DA LISTA COM UMA CADEIA DE CARACTER
console.log(lista.join(' - '));
console.log('====================================');

//REMOVE O ULTIMO ELEMENTO DA LISTA
console.log('====================================');
//lista.pop()
console.log(lista);
console.log('====================================');

//REMOVE O PRIMEIRO ELEMENTO DA LISTA
console.log('====================================');
//lista.shift()
console.log(lista);
console.log('====================================');

//ADICIONA ELEMENTO DA LISTA
console.log('====================================');
lista.push('Leonardo')
console.log(lista);
console.log('====================================');

if (lista.indexOf('lucas') != -1){
    console.log('====================================');
    console.log('acheeeei');
    console.log('====================================');
}else{
    console.log('====================================');
    console.log('não acheeeei');
    console.log('====================================');
}