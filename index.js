let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

//função para resetar a página puxando com o onclick() no botão de new game no html
function newGame() {
    window.location.reload()
}

//Iniciando uma função logo que a página é carregada fazendo com que ela escolha e armazene um número na variável
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1) //Como o random escolhe a partir de 0 ele pararia em 99 entao pode ser adicionar +1 ou 101
    //console.log(computerNumber)
}

//Essa função vai ser chamada pelo onchange="compareNumbers()" no input que recebe o número do usuário
function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber) //pegue o valor do userNumber e coloque na array da userNumbers, colocando aspas e espaço para dar espaço na página
   document.getElementById('guesses').innerHTML = userNumbers //retornando para a página a array

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too hight!'
            document.getElementById('inputBox').value = '' //resetando o valor da caixa que recebe valores a cada digitação
            attempts++ //adicionando mais 1 a cada tentativa caso esse if seja executado
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!!! Right!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //adicionando um atributo que deixa a caixa somente como leitura sem poder digitar
        }
   }
   else {
    document.getElementById('textOutput').innerHTML = 'You Loose! The computer numbers was ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
   }
   
}