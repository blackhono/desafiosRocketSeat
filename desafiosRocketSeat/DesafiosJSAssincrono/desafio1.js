var idade = 20;

var checaIdade = function(idade){

    return new Promise(resolve => { 
        setTimeout(() => {
            if(idade > 17){
                resolve('Maior que 18'); 
            }
              
        }, 2000);
    }, reject => {
        setTimeout(() => {
        if(idade < 18){
            reject('Menor que 18');
        }
        }, 2000);
    });


}

checaIdade(idade)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });


