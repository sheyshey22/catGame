$(document).ready(function(){  
var round="x";
var player1=[]; 
var player2=[];  
var win1 = [1,5,9];
var win2 = [1,4,7];
var win3 = [1,2,3];
var win4 = [4,5,6];     
var win5 = [7,8,9];
var win6 = [2,5,8];
var win7 = [3,6,9];
var win8 = [3,5,7];
var wins = [win1, win2, win3, win4, win5, win6, win7, win8];
var score1 = 0;
var score2=0;
var startGame=function(){
 player1 = [];
 player2 = [];
$(".square").each(function(){
$(this).text("");
});
wins=[win1, win2, win3, win4, win5, win6, win7, win8];
round="x";
}
$(".clickable").click(function(){
var celltext=$(this).text();
if(celltext==""){
  if(round=="x"){
      $(this).text("x");
      player1.push($(this).data("val"));
      round="o";
  }
  else{
      $(this).text("o");
      player2.push($(this).data("val"));
       round="x"; 
      }
      $.each(wins, function(i,v){
        if(player1.length>=3){
          var flag = true;
          $.each(v,function(key,value){
              if($.inArray(value,player1)==-1){
                flag = false;
              }
          })
          if(flag == true){
            alert("player1 win!");
             score1++ ;
            $("#score1").text("X: SCORE="+score1);    
            return;                                                     
          }
        }
        if(player2.length>=3){
          var flag = 1;
          $.each(v,function(key,value){
              if($.inArray(value,player2)==-1){
                flag = 2;
         }
        })
          if(flag == 1){
            alert("player2 win!");
             score2++ ;                  
            $("#score2").text("O: SCORE="+score2);
            return;  
          }
        }
     });
  };
});
$("#startagain").click(function(){
            startGame();                    
});
});
//result.html('<img src="css/catdance.gif" alt="Ganaste!!"> </br> Ganó el jugador número ' + player);
