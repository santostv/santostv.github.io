/************** CARREGA A PLAYLIST DE ID 23  ***************/
$(function(){
    $.ajax({
        type: 'GET',
        url: 'https://publicador.everstreamplay.com/ws/playlist/get_content',
        data: {id: 24, callback: 'playlist'},
        async: false,
        jsonpCallback: 'playlist',
        dataType: 'jsonp',
        success: function(data){
        },
        error: function(e){
            console.log(e)
        }
    });

});


function playlist(data){
    var result = data.playlistresult;
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            k = 0;
        for(i in result){
            var content = result[i].content;

            for(j in content){
                html += '<div class="imprensa">';
                html += '    <div class="">';
                html += '       <h3 id="playlist_title-0" class="imprensa-title"> [ ' + content[j].content_title + ' ]</h3>';
                html += '    </div>';
                html += '    <div class="itens">';
                html += '       <div class="thumb">';
                html += '           <img src="' + content[j].content_cover + '" width="325" height="201" alt="" title="">';
                html += '       </div>';
                html += '       <div class="description">';
                html += '           <p>' + content[j].content_description + '</p>';
                html += '           <p class="download"><a href="#"><i class="fa fa-download" aria-hidden="true"></i> </a> </p>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
                html += '<div clas="clear-fix"></div>';
            }
            delete result[i];
            $('#imprensa').html(html);
            html = '';
        }
    }
}