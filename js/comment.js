$(document).ready(function() {

    $("#btn5").click(function() {
        $.ajax({
        type : 'GET',
        url : 'http://test-ta.herokuapp.com/games/1/comments',
        data : {tipo:'0'},
        dataType : 'json',
        success : function(data) {
           console.log(JSON.stringify(data));
           $.each(data, function(i,item) {
            console.log(item);
                update(data);
            });
        },
            
    });
    });
    function update(info)
    {
      $('#listComment').html(' <div class="panels panel-white post panel-shadow"><div class="post-heading"><div class="pull-left image">   <img src="img/bob1.jpg" class="img-circle avatar" alt="user profile image"><div class="pull-left meta"><div class="title h5"><a id="name"><b>'+info[0].name+'</<b></a> dice: </div> <h6 class="text-muted time">1 minute ago</h6> </div> </div> <div class="post-description"> <p>'+info[0].content +'</p> <div class="stats"> <a href="#" class="btn btn-default stat-item"> <i class="fa fa-thumbs-up icon"></i>2 </a> <a href="#" class="btn btn-default stat-item"> <i class="fa fa-thumbs-down icon"></i>12 </a> </div> </div> </div>');
    }  