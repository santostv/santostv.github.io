$(document).ready(function(){
    $('.video-section .video, .video-section .itens').hover(function(){
        $('.description').hide();
    });

    $('.video-section .video, .video-section .itens').mouseleave(function(){
        $('.description').show();
    });
});

/************** CARREGA A PLAYLIST DE ID 14  ***************/
var head = document.head;
var script = document.createElement("script");
script.setAttribute('src','http://publicador.everstreamplay.com/ws/playlist/get_content/14/getData');
head.appendChild(script);
function getData(data){
    var result = data.playlistresult
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            playlist_title = '',
            content_title = '',
            content_description = '',
            first_file = '',
            first_cover = '';

        for(i in result){
            var content = result[i].content;
            for(j in content){
                if(j == 0){
                    html += '<div class="content active" id="content-'+j+'">'
                    html += '   <a href=javascript:loadVideo("'+content[j].video_src+'","'+ content[j].content_cover+'","content-'+j+'")>';
                    html += '       <p class="date">'+content[j].content_date+'</p>'
                    html += '       <p class="link">'+content[j].content_title+'</p>'
                    html += '       <p class="hide-description hide">'+content[j].content_description+'</p>';
                    html += '   </a>';
                    html += '</div>';
                    playlist_title  = content[0].playlist_title;
                    content_title   = content[0].content_title;
                    content_description = content[0].content_resume;
                    first_file = content[0].video_src;
                    first_cover = content[0].content_cover;
                }else{
                    html += '<div class="content" id="content-'+j+'">'
                    html += '   <a href=javascript:loadVideo("'+content[j].video_src+'","'+ content[j].content_cover+'","content-'+j+'")>';
                    html += '       <p class="date">'+content[j].content_date+'</p>'
                    html += '       <p class="link">'+content[j].content_title+'</p>'
                    html += '       <p class="hide-description hide">'+content[j].content_description+'</p>';
                    html += '   </a>';
                    html += '</div>';
                }

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
        $('#playlist_title').html(playlist_title);
        $('#content_title').html(content_title);
        $('#content_description').html(content_description);

        jwplayer('myVideo').setup({
            "key":"3q3t8iIybSxKCGGz24tDJPg0q1eMN2UwljLScelSCPY=",
            "abouttext":"produzido por everstream.com.br",
            "aboutlink":"http:\/\/www.everstream.com.br",
            "skin":{
                "name":"Everstream",
                "active":"#fdb000",
                "inactive":"#c0c0c0",
                "background":"#fdb000"
            },
            "flashplayer":"\/\/ssl.p.jwpcdn.com\/player\/v\/7.6.1\/jwplayer.flash.swf",
            "androidhls":true,
            "hlshtml":false,
            "sources":{"file": first_file},
            "image":first_cover,
            "sharing":{
                "code":"%3Ciframe%20src%3D%22http%3A\/\/content.jwplatform.com\/players\/MEDIAID-ROkXCTWe.html%22%20width%3D%22480%22%20height%3D%22270%22%20frameborder%3D%220%22%20scrolling%3D%22auto%22%3E%3C\/iframe%3E",
                "heading":"Compartilhar",
                "link":null,
                "sites":["facebook","twitter","googleplus"]
            },
            "width":"100%",
            "aspectratio":"16:9",
            "autostart":"false"
        });
    }

}


function loadVideo(file, image, id_active) {
    var playerInstance = jwplayer("myVideo");
    playerInstance.load([{
        file: file,
        image: image
    }]);

    $('#contents .content').each(function(){
        el = $(this);
        if(el.attr('id') == id_active && !el.hasClass('active')){
            el.addClass('active')
        }else if(el.attr('id') != id_active){
            el.removeClass('active')
        }
        $('#content_title').html($('#'+id_active+' .link').text());
        $('#content_description').html($('#'+id_active+' p.hide-description').text());
    })

    playerInstance.play();
    $('html, body').animate({scrollTop:0}, 'slow');
}