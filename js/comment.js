$(document).ready(function(){
    var comments=$('comments');
    $("#btn5").click(function(){
        $.ajax({
          type:'GET',
          url: "http://test-ta.herokuapp.com/games/:game_id/comments", 
          success: function(data){
            console.log('success', data);
        }});
    });
});

//
/*/function addComment() {

  var containerComentarios = document.getElementById('sendComment');
  var nombrePersona = document.getElementById('name3').value;
  var contenidoComentario = document.getElementById('boxComent').value;
  var nuevoComentario = document.createElement('div');
  var contenedorNombre = document.createElement('strong');
  var contenedorPost = document.createElement('p');
  var division = document.createElement('hr');
  var nodoNombre = document.createTextNode(nombrePersona + ' dice:');
  var nodoPosteo = document.createTextNode(contenidoComentario);


  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);

  //agregando nuevos comentarios
  nuevoComentario.appendChild(contenedorNombre);
  nuevoComentario.appendChild(contenedorPost);
  nuevoComentario.appendChild(division);
  nuevoComentario.setAttribute('class', 'well');
  containerComentarios.appendChild(nuevoComentario);

  //reseteando campos
  document.getElementById('name3').value = "";
  document.getElementById('boxComment').value = "";
}