function cliqueiNoBotao() {
  var inputCidade = document.querySelector('.input-cidade');
  var cidade = inputCidade.value;
  var url = 'https://api.adviceslip.com/advice';

  fetch(url)
      .then(response => response.json())
      .then(data => {
          var conselho = data.slip.advice;
          return fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=${encodeURIComponent(conselho)}`);
      })
      .then(response => response.json())
      .then(data => {
          document.querySelector('.cidade').textContent = `Conselho para vida `;
          document.querySelector('.temp').textContent = data[0][0][0];
          mudarBackground();
      })
      .catch(error => {
          console.error('Ocorreu um erro ao obter o conselho:', error);
      });
}

function mudarBackground() {
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?landscape&${randomNumber}")`;
}
