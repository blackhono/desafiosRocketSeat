const arr = [1,2,3,4,5,6];


const [x,...y]= arr;

console.log(x);
console.log(y);

/*5.2*/
function soma(...params){
    return params.reduce((total, next)=>total + next);
}
/* relembrando que o Next pega o proximo valor do array
começando o total em 0 e nesse caso next em 1 
por causa que foi o passado nos console.log */

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


/*Crie uma variável usuario2 que contenha
 todos os dados do usuário porém com nome Gabriel.
Crie uma variável usuario3 que contenha todos os 
dados do usuário porém com cidade Lontras. */

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const usuario2 = {...usuario,nome:'Gabriel'};
   const usuario3 = {...usuario,endereco:{cidade:'Lontras'}};
   console.log(usuario2);
   console.log(usuario3);