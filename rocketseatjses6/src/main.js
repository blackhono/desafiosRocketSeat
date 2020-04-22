import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }
        catch(err){
            console.warn('Erro na API');
        }
        
    }
}

Api.getUserInfo('diego3g');

/*exercicio módulo 3
transformar para await e async
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();
*/

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async() => {
    try{
        await delay();
        console.log('1s');
        await delay();
        console.log('2s');
        await delay();
        console.log('3s');
    }
    catch(err){
        console.log('Algo está errado no await do delay')
    }
}

umPorSegundo();


/* exercicio modulo 3 parte 3 troquei de repositorio
para usuario pois não estava encontrando o repositorio
class Github {
    static getRepositories(username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuario não existe');
    })
    }
   }
   Github.getRepositories('diego3g');
   Github.getRepositories('diego3gvmskv');
 */

class Github {
    static async getRepositories(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
        }
        catch(err){
            console.log('Usuario não existe');
        }
   
   }
}
   Github.getRepositories('diego3g');
   Github.getRepositories('diego3gvmskv');

/* exercicio modulo 3 parte 4 
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('diego3g');
*/
class Usuario{
    static async buscaUsuario(username){

        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
            console.log('buscaUsuario');
        }
        catch(err){
            console.log('Usuario não existe');
            console.log('buscaUsuario');
        }

    }
    
}
Usuario.buscaUsuario('diego3g');

/*alert('Seja Bem-vindo');*/
/*
const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('OK')},2000);
});
*/
/*
minhaPromise().then(response => {
    console.log(response);
});
*/
/*
const executaPromise = async () => {
    console.log(await minhaPromise());
};

executaPromise();
 */

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







