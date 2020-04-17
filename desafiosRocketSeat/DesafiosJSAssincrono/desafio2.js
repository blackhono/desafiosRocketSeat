var btnElement = document.querySelector('div.entrada button');
var inputElement = document.querySelector('div.entrada input');
var divListElementUser = document.querySelector('div.lista');
var divListElementLoading = document.querySelector('div.listaCarregamento');

var textLogin ='';



var buscaDeUsuario = function(textLogin){

    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+textLogin);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            
            var elementUl = document.createElement('ul');
            var elementli = document.createElement('li');
            if(xhr.readyState == 2 || xhr.readyState == 3){

            elementli.innerText = 'Carregando...';
            elementUl.appendChild(elementli);
            divListElementLoading.appendChild(elementUl);
            
            }
            

            if(xhr.readyState === 4){
                /*para ver as mensagens de loading retire o 
                divListElementLoading.innerHTML='';*/
                divListElementLoading.innerHTML='';
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                    alert(textLogin);
                }
            }else{
                if(xhr.readyState === 3){
                    if(xhr.status === 404){
                        reject('404');
                    }
                }
            }
        }
            
    });

}


btnElement.onclick = function mostrarepositorio(){
    textLogin = inputElement.value;

    var elementUl = document.createElement('ul');
    var elementli = document.createElement('li');


    buscaDeUsuario(textLogin)
    .then(function(response){
        elementUl.innerText = response.name;
        elementli.innerText = response.repos_url;
        elementUl.appendChild(elementli);
        divListElementUser.appendChild(elementUl);

        

    })
    .catch(function(error){
        elementUl.innerText = 'Usuário não encontrado';
        elementli.innerText = 'Repositorio não encontrado';
        elementUl.appendChild(elementli);
        divListElementUser.appendChild(elementUl);
        if(error === '404'){
            console.log('Página não encontrada!');
            alert('Usuário não encontrado!');
        }
    });

}








