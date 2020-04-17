/*dica
const arr = [1,2,3,4,5,6];

const newArr = arr.map(item => item *2);

console.log(newArr);


const teste = () => ({ nome: 'Diego'});

console.log(teste());
*/

/*3º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:

3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

*/

const arr = [1,2,3,4,5];

const eita = arr.map(item => item+10);

console.log(eita);
/*
 3.2
 Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
*/

const usuario = [{nome:'Diego', idade:23}];

//const mostraIdade = usuario.idade;

const mostraIdade = usuario.map(item => item.idade);

console.log(mostraIdade);



// 3.3
// Dica: Utilize uma constante pra function
/*
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome,idade) => nome,idade;
mostraUsuario(nome, idade);
mostraUsuario(nome);

*/

const nome = "Diego";
const idade = 23;

const mostraUsuario1 = (nome='Diego',idade=18) => ({nome,idade});

console.log(mostraUsuario1(nome,idade));
console.log(mostraUsuario1(nome));


// 3.4
/*
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
   
  */

 const promise = () => new Promise (resolve => resolve(), reject => reject());