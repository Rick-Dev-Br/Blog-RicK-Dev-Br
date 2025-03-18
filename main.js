  // Seleciona a imagem pelo ID
$(function() {
  console.log('O dom esta pronto')
});

$('#zoom-1').on('click', function() {
    console.log('imagem clicada');
  $(this).toggleClass('zoomed');
});
  // Seleciona a imagem pelo ID
  $('#zoom-2').on('click', function() { // $ chama o documento html. O .on é msm coisa que o addeventlistener.
  //'click' é a ação do evento. function chama a ação do click para o sistema 
    console.log('imagem clicada'); // Mensagem ao devtools ao clicar na imagem
  $(this).toggleClass('zoomed'); //nesse caso o this refere-se a imagem zoom-. toggleClass add ou remove uma class
});

$('#imagem-naruto').on('click', function() {
  console.log('imagem naruto');
  $(this).toggleClass('zoomed'); 
});

$('#resident-evil').on('click', function() {
  $(this).toggleClass('zoomed');
});

