var numeroSecreto = Math.ceil(Math.random() * 1000); 
var tentativas = 8; 
var limite = 0; 


function adivinhar(){
  var  chute = document.getElementById('chute').value;
  chute = parseInt(chute);
  var mensagemDiv = document.getElementById('mensagem');

  document.getElementById('chute').value = '';

  if(isNaN(chute) || chute < 1 || chute > 1000){
    mensagemDiv.innerHTML = 'Por favor, digite um número valido entre 1 e 1000!';
    return;
  }
tentativas--;

if(chute === numeroSecreto) {
  mensagemDiv.innerHTML = 'Parabéns, você acertou o número em ' + ( 8 - tentativas) + ' tentativas!';
  reiniciar();
}
else if(chute > numeroSecreto) {
  mensagemDiv.innerHTML = 'O número secreto é menor que ' + chute + '! <br>';
  if(tentativas > 0){
    mensagemDiv.innerHTML += 'Você ainda tem ' + tentativas + (tentativas === 1 ? ' tentativa!' : ' tentativas!');
  }
}
else if(chute < numeroSecreto) {
  mensagemDiv.innerHTML = 'O número secreto é maior que ' + chute + '! <br>';
  if (tentativas > 0) {
  mensagemDiv.innerHTML += 'Você ainda tem ' + tentativas + (tentativas === 1 ? ' tentativa!' : ' tentativas!'); 
  }
}
if(tentativas <= 0) {
  var reiniciarJogo = confirm('Acabaram as tentativas. O número secreto era ' + numeroSecreto + '\nDeseja reiniciar o jogo?');
  if(reiniciarJogo) {
    reiniciar();
  }
  else{
    mensagemDiv.innerHTML += '<br> Jogo encerrado.'
  }
}
}
function reiniciar(){
  numeroSecreto = Math.ceil(Math.random() * 1000);
  tentativas = 8;
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.innerHTML = ''
  document.getElementById('chute').focus();
}

document.getElementById('chute').addEventListener('keyup', function(KeyboardEvent) {
  if (KeyboardEvent.keyCode === 13) {
    adivinhar();
  }
});



