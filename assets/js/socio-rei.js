window.onload = function() {
    var user = window.sessionStorage.getItem('user');
    if(!user) {
        window.location.href = 'index.html#registro';
    }else{
        var body = document.getElementsByTagName('body')[0].style.display = '';
    }
};