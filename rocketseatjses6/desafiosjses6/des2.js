

/* map */



const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const mapUsuarios = usuarios.map(function(item){
    return item.idade;
});
console.log(mapUsuarios);

    /*transformar o vetor em variavel unica
    for(var idadeusuario of newUsuarios){
    console.log(idadeusuario);
    }
    */

const filterUsuarios = usuarios.filter(function(item){
    return (item.idade > 17 && item.empresa ==='Rocketseat');
});

console.log(filterUsuarios);



const findUsuarios = usuarios.find(function(item){
    return item.empresa==="Google";
});

console.log(findUsuarios);


/*Unindo operações*/

const mapfilterUsuarios = usuarios.map(function(item){
    item.idade = item.idade *2;
    return item;

});

const mapfilterUsuarios2 = mapfilterUsuarios.filter(function(item){
    return item = item.idade <= 50;
     
});

console.log(mapfilterUsuarios2);

/*fim da união*/