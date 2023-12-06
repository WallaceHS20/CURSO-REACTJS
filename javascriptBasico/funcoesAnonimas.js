//FUNÇÃO COMUM
function add(...numeros){
    let total = numeros.reduce(function(item, proximo){
        return item + proximo
    })

    console.log(total);
}

//FUNÇÃO ANONIMA
function add2(...numeros){
    let total = numeros.reduce((item, proximo) => {
        return item + proximo
    })

    console.log(total);
}

//FUNÇÃO ANONIMA
function add3(...numeros){
    let total = numeros.reduce((item, proximo) => item + proximo )

    console.log(total);
}

add(1,2,3,4,5)
add2(1,2,3,4,5)
add3(1,2,3,4,5)