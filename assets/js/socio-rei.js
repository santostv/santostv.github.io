var user = window.sessionStorage.getItem('user');
if(!user) {
    window.location.href = 'index.html#registro';
}