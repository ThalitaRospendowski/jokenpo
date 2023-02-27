var iniciarjogo = confirm("Deseja iniciar um novo jogo?");
var pontoJogador = 0;
var pontomaquina = 0;  
var jogador = 0;

//let jogador = Number(prompt("O que você deseja jogar? 1 - Pedra, 2 - Papel, 3 - Tesoura"));



document.getElementById("fist").addEventListener("click",function(){
    Jogar(1);
});

document.getElementById("openhand").addEventListener("click",function(){
    Jogar(2);
});

document.getElementById("scissors").addEventListener("click",function(){
    Jogar(3);
});
  

function VerificarGanhador(sjogador, smaquina) {

    if (sjogador === 1 && smaquina === 2) {
        pontomaquina = pontomaquina + 1;
        alert('Você perdeu!');
    }

    else if (sjogador === 1 && smaquina === 3) {
        pontoJogador = pontoJogador + 1;
        alert('Você ganhou!');
    }
    else if (sjogador === 1 && smaquina === 1) {
        alert('Empate!');
    }
    else if (sjogador === 2 && smaquina === 1) {
        pontoJogador = pontoJogador + 1;
        alert('Você ganhou!');
    }
    else if (sjogador === 2 && smaquina === 2) {
        alert('Empate!');
    }
    else if (sjogador === 2 && smaquina === 3) {
        pontomaquina = pontomaquina + 1;
        alert('Você perdeu!');
    }
    else if (sjogador === 3 && smaquina === 1) {
        pontomaquina = pontomaquina + 1;
        alert('Você perdeu!');
    }
    else if (sjogador === 3 && smaquina === 2) {
        pontoJogador = pontoJogador + 1;
        alert('Você ganhou!');
    }
    else if (sjogador === 2 && smaquina === 3) {
        alert('Empate!');
    }

}


function CalculaPontos(){
   console.log('Pontos Jogador:' + pontoJogador);
   console.log('Pontos Maquina:' + pontomaquina);

    if (pontoJogador === 2)  {
        alert('Parabéns você ganhou!');
        iniciarjogo  = false;
        pontoJogador = 0;
        iniciarjogo = confirm("Deseja jogar novamente?");
    }
    else if (pontomaquina === 2 ) {
        alert('Não foi desta vez.... tente denovo!!');
        iniciarjogo  = false;
        pontomaquina = 0;
    } 
}



function Jogar(jogador) {

    //let jogador = Number(prompt("O que você deseja jogar? 1 - Pedra, 2 - Papel, 3 - Tesoura"));

    console.log('Passou pela função Jogar')
    let img = document.getElementById("computer");

    console.log(jogador);

    let maquina = Math.floor(Math.random() * 3) + 1;

    console.log(maquina);

    if (maquina == 1){
        img.innerHTML="<img src='/img/fist.png' height ='90' width='90'/>"
    }
    else if (maquina == 2){
        img.innerHTML="<img src='/img/open-hand.png' height ='90' width='90'/>"
    }
    else if (maquina == 3){
        img.innerHTML="<img src='/img/scissors.png' height ='90' width='90'/>"
    }    
    


    switch (jogador) {
        case 1:
        case 2:
        case 3:
            VerificarGanhador(jogador, maquina);
        break;
        default:
            alert("Informe um valor válido: 1 - Pedra, 2 - Papel, 3 - Tesoura");
    }

    CalculaPontos();


}




