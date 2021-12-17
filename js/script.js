// VARIÁVEIS
let variavel = "valor";
let variavel = 1;
// forma mais antiga
var variavel = 2;
// nomeação padrão camelCase
let dadosPessoais = "dados";
//várias variaveis juntas:
let idade,nome,id = 123

//CONSTATES
let valor = 10; 
valor = 20;
// let permite que o valor da variavel seja redefinido
const preco = 20;
//const não deixa o valor ser alterado (usado em valores fixos)
//é preferivel usar const ao invés de let. (usar let apenas se precisar alterar o valor da variável)

//TIPOS PRIMITIVOS
//existem dois tipos: de referencia e de valores
//string de referencia:
    let nome = "excel"; //string literal
    let idade = 23.4; //number literal
    let aprovado = true; //boolean (faz regras)
    let sobrenome ; //undefined
    let cor = null // redefinir valor

    //OBJETO
    let pessoa = { 
        nome: 'excel',
        idade: 23,
        aprovado: true,
        sobrenome: 'exemplo'
    };
  
        //ARRAY
        //conjunto de dados
        let idade = [26,'jaco',45,true,51,65];

    //FUNCTINS
    //padrão para nomeçao: verbo + substantivo
    let corSite = "azul";
    function resetaCor(cor, tom){
        corSite = cor + ' ' + tom;
    };
    resetaCor("vermelho", "escuro");