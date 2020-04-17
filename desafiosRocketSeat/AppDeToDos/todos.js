var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];




/* quando usar o for de vetores o primeiro elemento dele é onde ele armazena
a informação que ele pegou naquela passagem pelo vetor */
function renderTodos(){

    /*primeiro limpa o html e puxa a ultima informação obtida, então
    se limpa da maneira descrita a seguir*/

    listElement.innerHTML='';

    /*Pronto*/

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        /*para excluir um ToDo*/
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');

        var linkText = document.createTextNode('Excluir');
        /* lembrando que o tem que usar o appendchild
        no elemento que deseja selecionar para isso*/

        linkElement.appendChild(linkText);



        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);


        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    /* Para adicionar um item a parte final de um array basta usar
    o PUSH */

    todos.push(todoText);
    inputElement.value='';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


/*Salvar ToDo*/
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}