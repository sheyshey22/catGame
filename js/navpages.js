$(document).ready(function(){
  $('#btn1').click(function(){
    $('#welcome').hide();
    $('#player').show();
  });
  $('#btn2').click(function(){
    var name1 = $('#name1').val();
    var name2 = $('#name2').val();
    if (name1 === "" || name2 === ""){
      alert('¡Error! Los campos son obligatorios');
    }
    else{
      $('#player').hide();
      $('#gamestart').show();
    }
  });
  $('#btn4').click(function(){
    $('#gamestart').hide();
    $('#historial').show();
  });
});
