//spreed concatenação de valores para função

function cadastrar(usuarios, ...novosUsuarios){

    let total = [
        ...usuarios,
        ...novosUsuarios
    ]

    return console.log(total);
}

let users = ["Leo", "Lucas"] 

let teste = cadastrar(users, "Feh", "Kaua")