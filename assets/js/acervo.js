$(document).ready(function(){
    $('.video-section .video, .video-section .itens').hover(function(){
        $('.description').hide();
    });

    $('.video-section .video, .video-section .itens').mouseleave(function(){
        $('.description').show();
    });
});

/************** CARREGA A PLAYLIST DE ID 14  ***************/

$(function(){
    $.ajax({
        type: 'GET',
        url: 'https://publicador.everstreamplay.com/ws/playlist/get_content',
        data: {id: null, callback: 'getData'},
        async: false,
        jsonpCallback: 'getData',
        dataType: 'jsonp',
        success: function(data){

        },
        error: function(e){
            console.log(e)
        }
    });

});


function getData(data){
    var result = data.playlistresult
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            playlist_title = '',
            content_title = '',
            content_description = '',
            content_date = '',
            first_file = '',
            first_cover = '',
            k = 0;

            var content = result[14].content;

            content_date = content[0].content_date;
            playlist_title  = content[0].playlist_title;
            content_title   = content[0].content_title;
            content_description = content[0].content_resume;
            first_file = content[0].video_src;
            first_cover = content[0].content_cover;

            for(i = 1; i <= 12; i++){
                jwplayer('myVideo-'+i).setup({
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
                    "height":"100%",
                    //"aspectratio":"16:9",
                    "autostart":"false"
                });

                $('#contents-'+i).html(html);
                $('#acervo_date_'+i).html(content_date)
                $('#acervo_title_'+i).html(playlist_title);
                $('#content_title-'+i).html(content_title);
                $('#content_description-'+i).html(content_description);
            }
        }

}


$(function(){
    $.ajax({
        type: 'GET',
        url: 'https://publicador.everstreamplay.com/ws/playlist/get_content',
        data: {id: 23, callback: 'playlist'},
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
    var result = data.playlistresult
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            playlist_title = '',
            content_title = '',
            content_description = '',
            first_file = '',
            first_cover = '',
            k = 0;

        for(i in result){
                var content = result[i].content;
                for(j in content){
                    if(j == 0){
                        html += '<div class="content active" id="content-'+j+'">'
                        html += '   <a href=javascript:loadVideo("'+content[j].video_src+'","'+ content[j].content_cover+'","'+j+'","'+k+'")>';
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
                        html += '   <a href=javascript:loadVideo("'+content[j].video_src+'","'+ content[j].content_cover+'","'+j+'","'+k+'")>';
                        html += '       <p class="date">'+content[j].content_date+'</p>'
                        html += '       <p class="link">'+content[j].content_title+'</p>'
                        html += '       <p class="hide-description hide">'+content[j].content_description+'</p>';
                        html += '   </a>';
                        html += '</div>';
                    }
                }
                delete result[i];
                $('#contents').html(html);
                $('#playlist_title-'+k).html('[ '+playlist_title+' ]');
                $('#content_title-'+k).html(content_title);
                $('#content_description-'+k).html(content_description);
                html = '';
                jwplayer('myVideo-'+k).setup({
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
                    "height":"364",
                    "aspectratio":"16:9",
                    "autostart":"true"
                });

            jwplayer('myVideo-0').onComplete(function () {
                var active = $('#contents .content.active');
                var next = active.next();
                var href = next.find('a').first().prop('href');
                eval(href)
            });

            jwplayer('myVideo-0').onDisplayClick(function () {
                jwplayer().play();
            });
        }
    }

}

function loadVideo(file, image, id_active, id_content ) {
    var playerInstance = jwplayer("myVideo-"+id_content);
    playerInstance.load([{
        file: file,
        image: image
    }]);
    playerInstance.play();

    $('#contents-'+id_content+' .content').each(function(){
        el = $(this);
        if(el.attr('id') == 'content-'+id_active && !el.hasClass('active')){
            el.addClass('active')
        }else if(el.attr('id') != 'content-'+id_active){
            el.removeClass('active')
        }
        $('#content_title').html($('#'+id_active+' .link').text());
        $('#content_description').html($('#'+id_active+' p.hide-description').text());
    })


}