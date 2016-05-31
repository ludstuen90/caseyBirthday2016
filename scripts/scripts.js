$(document).ready(function(){
  $('#dogs').click(function() {
    $('#dogpound').toggleClass('hidden');
  });


  $('#giftgiver').click(function() {
    var guess = $('.resizedtexbox').val();
    if (guess == 'Casey') {
      $('#game').toggleClass('hidden');

    }
    else {
      alert("Hmm, sorry. Only Casey can see the present.");
    }
  });

});
