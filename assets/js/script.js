$(document).ready(function(){
    $('.video-section').hover(function(){
        $('.description').hide();
    });

    $('.video-section').mouseout(function(){
        $('.description').show();
    });
});

/************** CARREGA A PLAYLIST DE ID 7  ***************/
var head = document.head;
var script = document.createElement("script");
script.setAttribute('src','http://publicador.everstream.com.br/ws/playlist/get_content/14/?callback=?');
head.appendChild(script);

function getData(data){
    var result = data.playlistresult
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            playlist_title = '',
            content_title = '',
            content_description = '';

        for(i in result){
            var content = result[i].content;
            for(j in content){
                html += '<div class="content">'
                html += '   <p class="date">18.01.2017</p>'
                html += '   <p class="link">';
                html += '       <a href="#pid='+content[j].content_id+'">'+content[j].content_title+'</a>';
                html += '   </p>';
                html += '</div>';

                playlist_title  = content[j].content_title;
                content_title   = content[j].content_title;
                content_description = content[j].content_resume;

                /*html += '<td><p>'+content[j].content_cover+'</p></td>';
                 html += '<td><p>'+content[j].content_description+'</p></td>';
                 html += '<td><p>'+content[j].content_id+'</p></td>';
                 html += '<td><p>'+content[j].content_resume+'</p></td>';
                 html += '<td><p>'+content[j].content_title+'</p></td>';
                 html += '<td><p>'+content[j].playlist_id+'</p></td>';
                 html += '<td><p>'+content[j].playlist_title+'</p></td>';
                 html += '<td><p>'+content[j].video_id+'</p></td>';
                 html += '<td><p>'+content[j].video_src+'</p></td>';
                 html += '</tr>';*/
            }
        }
        $('#contents').html(html);
    }
}
