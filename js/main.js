$(document).ready(function(){
  var player = 1;
  var table = $('table');
  var result = $('.result');
  var turn = $('.turn');
  nextGame(turn, player);
  
  $('td').click(function() {
    td=$(this);
    var status = is_full(td);
    if(!status) {
      var icon = iconPlayer(player);
      setNewStatus(td, icon);
      if(playWinner(table, icon)) {
        result.html('<img src="css/catdance.gif" alt="Ganaste!!"> </br> Ganó el jugador número ' + player);
        turn.html("");
      } else {
        player = setNextGame(player);
        nextGame(turn, player);
      }
    } else {
      false;
    }
  });
  
  $('.reset').click(function() {
    player = 1;
    result.html('');
    reset(table);
    nextGame(turn, player);
  });
  
});

function is_full(td) {
  if(td.hasClass('iconX') || td.hasClass('iconO')) {
    return 1;
  } else {
    return 0;
  }
}
function setNewStatus(td, icon) {
  return td.addClass(icon);
}
function iconPlayer(player) {
  if(player == 1) {
    return 'iconX';
  } else {
    return 'iconO';
  }
}
function setNextGame(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}
function nextGame(turn, player) {
  turn.html('Turno para jugador : '+ player);
}
function playWinner(table, icon) {
  var winner = 0;
  if(table.find('.square1').hasClass(icon) && table.find('.square2').hasClass(icon) && table.find('.square3').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square1').hasClass(icon) && table.find('.square4').hasClass(icon) && table.find('.square7').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square1').hasClass(icon) && table.find('.square5').hasClass(icon) && table.find('.square9').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square4').hasClass(icon) && table.find('.square5').hasClass(icon) && table.find('.square6').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square7').hasClass(icon) && table.find('.square8').hasClass(icon) && table.find('.square9').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square2').hasClass(icon) && table.find('.square5').hasClass(icon) && table.find('.square8').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square3').hasClass(icon) && table.find('.square6').hasClass(icon) && table.find('.square9').hasClass(icon)) {
    winner = 1;
  } else if (table.find('.square3').hasClass(icon) && table.find('.square5').hasClass(icon) && table.find('.square7').hasClass(icon)) {
    winner = 1;
  }
  return winner;
}
function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('iconO').removeClass('iconX');
  });
}
