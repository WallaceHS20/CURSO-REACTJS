const pessoa = {
    nome: "Wallace",
    idade: 45,
    cargo: "Analista de TI"
}

//coletando campo especifico
let { nome } = pessoa

console.log('====================================');
console.log(nome);
console.log('====================================');

//variavel auxiliar
let {cargo:Desenvolvedor} = pessoa

console.log('====================================');
console.log(Desenvolvedor);
console.log('====================================');

//----------------------------------------------------------------------------------------

nomes = ["Matheus", "José", "Luis"]

let {0:fisrtName, 1:endName} = nomes

console.log('====================================');
console.log(`Primeiro ${fisrtName} e segundo ${endName}`);
console.log('====================================');