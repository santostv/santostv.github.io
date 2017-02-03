/************** CARREGA A PLAYLIST DE ID 14  ***************/
var head = document.head;
var script = document.createElement("script");
script.setAttribute('src','http://publicador.everstreamplay.com/ws/playout/get_playout/playout');
//script.setAttribute('src','http://localhost/everstream/ws/playout/get_playout/list/playout');
head.appendChild(script);
var seek = 0;
function playout(data){
    var contents = data.playoutresult.contents;
    var video = data.playoutresult.video;
    if(data.error){
        alert(data.error);
    }else{
        var html = '',
            playlist_title = '',
            content_title = '',
            content_description = '',
            content_date = '',
            first_file = '',
            first_cover = '';


        //console.log(video);
        content_date        = contents.date;
        content_title       = contents.title;
        content_description = contents.description;
        first_file          = video.file;
        first_cover         = contents.cover;
        seek                = video.seeking;

        $('#content_date').html(content_date);
        $('#content_title').html(content_title);
        $('#content_description').html(content_description);

        var playerInstance = jwplayer('myVideo').setup({
            "key":"3q3t8iIybSxKCGGz24tDJPg0q1eMN2UwljLScelSCPY=",
            "ga":{"label":"title"},
            "abouttext":"produzido por everstream.com.br",
            "aboutlink":"http:\/\/www.everstream.com.br",
            "title":null,
            "skin":{"name":"Everstream","active":"#eaeaea","inactive":"#c0c0c0","background":"#ebebeb"},
            "flashplayer":"\/\/ssl.p.jwpcdn.com\/player\/v\/7.6.1\/jwplayer.flash.swf",
            "androidhls":true,
            "hlshtml":false,
            "sources":{"file":first_file},
            "image":first_cover,
            "width":"100%",
            "aspectratio":"16:9",
            "autostart":"true"
        });

        playerInstance.on('ready', function(event){
            jwplayer().play();
        });

        jwplayer('myVideo').on('firstFrame', function() {
            jwplayer().seek(seek)
        });

        jwplayer('myVideo').onComplete(function () {
            location.reload();
        });

        jwplayer('myVideo').onError(function () {
            location.reload();
        });

        jwplayer('myVideo').onDisplayClick(function () {
            jwplayer().play();
        });
    }
}