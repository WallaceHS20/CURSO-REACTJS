//APLICAÇÃO APENAS NO NAVEGADOR

//armazenando item no local storage
localStorage.setItem("nome", "Wallace")

//maneira abreviada
localStorage.nome = "José"

//coletando
localStorage.getItem("nome")
console.log('====================================');
console.log(localStorage.getItem("nome"));
console.log(localStorage.nome);
console.log('====================================');

//removendo
localStorage.removeItem("nome")