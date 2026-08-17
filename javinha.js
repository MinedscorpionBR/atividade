let tentativas = 2;
let tempoRestante = 300; 
let intervaloTempo = null;

function verificarFormulario() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let spanTentativas = document.getElementById("tentativas");
    let mensagem = document.getElementById("mensagem");
   if (tentativas > 0) {
        if (login === "aluno" && senha === "1234") {
            mensagem.innerHTML = "Você foi aprovado, bem-vindo ao sistema!";
            mensagem.style.color = "green";
        } else {
            tentativas--; 
            mensagem.innerHTML = "Você errou a senha, Tentativas restantes: " + tentativas;}
        }

         else {
         mensagem.innerHTML = "Você esgotou suas tentativas, tente novamente mais tarde.";
         document.querySelector("button").disabled = true;
         document.getElementById("login").disabled = true;
        document.getElementById("senha").disabled = true;
        mensagem.style.color = "red";
        iniciarBloqueio();
         }
       
         function iniciarBloqueio() {
    tempoRestante = 3;
    let spanTentativas = document.getElementById("tentativas");

    intervaloTempo = setInterval(function() {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;

        let minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
        let segundosFormatados = segundos < 10 ? "0" + segundos : segundos;

        spanTentativas.innerHTML = `Tente novamente em: ${minutosFormatados}:${segundosFormatados}`;

        if (tempoRestante <= 0) {
            clearInterval(intervaloTempo);
            liberarSistema();
        }

        tempoRestante--;
    }, 1000); 
}

function liberarSistema() {
    tentativas = 300;
    let mensagem = document.getElementById("mensagem");
    let spanTentativas = document.getElementById("tentativas");

    mensagem.innerHTML = "O bloqueio acabou. Você pode tentar novamente!";
    mensagem.style.color = "blue";
    spanTentativas.innerHTML = "";

    // Reabilita os campos e o botão
    document.querySelector("button").disabled = false;
    document.getElementById("login").disabled = false;
    document.getElementById("senha").disabled = false;
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
        }
    }