class Usuario{
    constructor(email,senha){
        var email = email;
        var senha = senha;
    }
    isAdmin(){
        if(this.admin === true){
            return this.admin;   
        }
        else{
            return this.admin = false;
        }
    }
}



class Admin extends Usuario{
    constructor(email,senha){

        super().admin=true;
        

    }
    
    
}

const User1 = new Usuario('email@teste.com1', 'senha123');
const Adm1 = new Admin('email@teste.com2', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
