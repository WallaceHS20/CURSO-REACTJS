const lista = [1,2,3,4,5]

//MAP É USADO PARA PERCORRER UM ARRAY
const newList = lista.map(function(item, index){
    return `elemento: ${item} e index: ${index}`
})

console.log('====================================');
console.log(newList);
console.log('====================================');

//REDUCE É USADO PARA REALIZAR SOMA UM ARRAY
const newList2 = lista.reduce(function(total, proximo){
    return `elemento: ${total} e index: ${proximo}`
})

console.log('====================================');
console.log(newList2);
console.log('====================================');

//FIND ENCONTRA UM ITEM
const newList3 = lista.find(function(item){
    return item === 3;
})

console.log('====================================');
console.log(newList3);
console.log('====================================');