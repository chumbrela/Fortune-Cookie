const randonPhrasses = [
"A vida é uma jornada, não um destino.",
"Os maiores desafios trazem as maiores recompensas.",
"Seu esforço será reconhecido e recompensado.",
"A felicidade é encontrada nos pequenos momentos.",
"Mantenha a mente aberta e o coração leve.",
"Grandes mudanças estão a caminho.",
"A sorte favorece os corajosos.",
"Acredite em si mesmo e o sucesso seguirá.",
"Cada dia é uma nova oportunidade para brilhar.",
"O futuro pertence àqueles que acreditam em seus sonhos.",
"Confie no processo e grandes coisas acontecerão.",
"O amor e a amizade são seus maiores tesouros.",
"O melhor ainda está por vir.",
"A persistência é a chave para o sucesso.",
"Você tem a força para superar qualquer obstáculo.",
"Siga seu coração e nunca se arrependerá.",
"Cada passo em direção ao seu sonho conta.",
"A sorte está no ar; respire fundo e aproveite.",
"A magia acontece quando você menos espera.",
"Seja grato pelas pequenas coisas e grandes coisas virão.",
]

function generateSentences(randonPhrasses){
  const randon = Math.floor(Math.random() * randonPhrasses.length);
  return randonPhrasses[randon]
}
function seeMyLuck(event) {
  event.preventDefault();

  let phrasseReturn = document.getElementById('res');
  let phrasse = generateSentences(randonPhrasses);

  phrasseReturn.textContent = phrasse;

  document.querySelector(".screen1").classList.add('hide');
  document.querySelector(".screen2").classList.remove('hide');

}
function resetForm(){
  document.querySelector(".screen1").classList.remove('hide');
  document.querySelector(".screen2").classList.add('hide');
}

