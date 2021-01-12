let a;

function idfk() {
    if(!a) {
        document.getElementById('change').innerHTML = 'WHY DID YOU CLICK ME, DO IT AGAIN';
        a = true;
    } else {
        document.getElementById('change').innerHTML = 'THANK YOU';
        alert('aaaaaaaaaaaaaaaaaaaaaa')
        a = false;
    }
}