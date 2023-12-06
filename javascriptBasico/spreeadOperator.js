//spreadOperator funciona como concatenação de dados
let primeiros = [1,2,3]

let num = [...primeiros,7,8,9]

console.log('====================================');
console.log(num);
console.log('====================================');

let pessoa = {
    nome: "Wallace",
    cargo: "Analista de Compras",
    idade: 25
}

let dados = {
    ...pessoa,
    cidade: "SJC",
    zona: "Norte",
    cep: 12554584
}

console.log('====================================');
console.log(dados);
console.log('====================================');