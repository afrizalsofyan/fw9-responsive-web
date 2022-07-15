function showPass(){

    const pass = document.getElementById('pass-lock');
    if(pass.type !== 'password'){
        pass.type = 'password';
    } else {
        pass.type = 'text';
    }
}