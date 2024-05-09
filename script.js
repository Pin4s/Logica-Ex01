

alert('Informe dois numeros')

//verificar se o primeiro valor informado é um número
let numberOne = prompt('Informe o primeiro número')
while(numberOne == "" || isNaN(numberOne)){
    alert("ERRO: O valor informado não é um número!");
    numberOne = prompt('Informe o primeiro número')
}


//verificar se o segundo valor informado é um número
let numberTwo = prompt('Informe o segundo número')
while(numberTwo == "" || isNaN(numberTwo)){
    alert("ERRO: O valor informado não é um número!");
    numberTwo = prompt('Informe o segundo número')
}


//transformando os dados em tipo Number
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
    

//realizando operações e atribuindo os resultados a variaveis
let sum = numberOne + numberTwo; 
let subtraction = numberOne - numberTwo;
let division = numberOne / numberTwo;
let multiplication = numberOne * numberTwo;
let restOfDivision = numberOne % numberTwo;


//mostrando os resultados das operações ao usuario
alert(`A soma entre ${numberOne} e ${numberTwo} é igual a ${sum}`)
alert(`A subtração entre ${numberOne} e ${numberTwo} é iguala ${subtraction}`)
alert(`A divisão entre ${numberOne} e ${numberTwo} é igual a ${division}`)
alert(`A multiplicação entre ${numberOne} e ${numberTwo} é igual a ${multiplication}`)
alert(`O resto da divisão de ${numberOne} por ${numberTwo} é ${restOfDivision}`)


//Verificar se é par ou impar com if e else
if (restOfDivision == 0) {
    alert(`A soma dos números ${numberOne} e ${numberTwo} resulta em ${sum}, que é um número par`)
    } else {
    alert(`A soma dos números ${numberOne} e ${numberTwo} resulta em ${sum}, que é um número ímpar`)
}  

     
//verificar se os valores inseridos são iguais com switch
switch(numberOne == numberTwo){
    case true:
        alert("Os dois números são  iguais");
        break;
    default:
        alert("Os dois números são diferentes");
}


//finalizando o programa
alert("Obrigado por usar o programa!")