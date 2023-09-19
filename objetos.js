class Pessoa {                  //Classe sempre com a 1 letra maiuscula
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade ;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {          //o metodo dentro da classe nao precisa usar o function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log('os dois tem a mesma idade')
    }
}

const breno = new Pessoa('Breno',20);
const vitoria = new Pessoa('vitoria', 19);
compararPessoas(vitoria,breno);





































//breno.nome = 'Breno Lopes';
//breno.idade = 20;
//const susi = new Pessoa();
//susi.nome = 'Susi Lopes';
//susi.idade = 56;
//breno.descrever();
// const breno = {
//   nome: 'Breno Lopes' , //! este é um exemplo de coleção de dados
//   idade: 20
//};
// console.log(breno.nome) ; 
// console.log(breno.idade) ; 
// console.log(breno) ; 

// breno.altura = 1.76; //! Aqui é um exemplo de incremento ao objeto no caso o objeto breno
// delete breno.idade ; //! Aqui um exemplo de retirar um incremento do objeto
// console.log(breno) ;

//const atributo ='idade';
//console.log(pessoa['nome'])
//pessoa['nome'] = 'teste'; Texto que sobrepoe outro texto
