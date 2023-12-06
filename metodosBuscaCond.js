//METODO SOME REVELA SE EXISTE PELO MENOS ALGUM...

let nomes = ['Wallace', 'Leo','Will']

console.log('====================================');
console.log(nomes.some(encontre => encontre === 'Wallace'));
console.log('====================================');

let people = [
    {nome: 'Wallaf', idade: 28},
    {nome: 'João', idade: 28},
    {nome: 'Larissa', idade: 28}
]

console.log('====================================');
console.log(people.every(encontre => encontre.idade === 28));
console.log('====================================');