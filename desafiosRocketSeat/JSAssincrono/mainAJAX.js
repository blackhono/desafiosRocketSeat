var xhr = new XMLHttpRequest();

/*requisição é get*/
xhr.open('GET','https://api.github.com/users/diego3g');
xhr.send(null);
/* até aqui só fez a requisão porém para ter o corpo da requisição
no JavaScript é necessário uma verificação*/
xhr.onreadystatechange = function() {

    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }

}