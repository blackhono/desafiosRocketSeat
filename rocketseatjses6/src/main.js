/*alert('Seja Bem-vindo');*/

const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('OK')},2000);
});
/*
minhaPromise().then(response => {
    console.log(response);
});
*/

const executaPromise = async () => {
    console.log(await minhaPromise());
};

executaPromise();
 


/*
import { soma } from '../funcoes'
console.log(soma(1,2));


/*desafio exercicio 1.1

import ClasseUsuario from '../desafiosjses6webpack/functions'

ClasseUsuario.info();


/*desafio exercicio 1.2

import {idade} from '../desafiosjses6webpack/functions'

console.log(idade);

/*desafio exercicio 1.3
import usuario, {idade as idade2} from '../desafiosjses6webpack/functions'

usuario.info();
console.log(idade2);

*/







