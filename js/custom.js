function showPass(){

    const pass = document.getElementById('pass-lock');
    if(pass.type !== 'password'){
        pass.type = 'password';
    } else {
        pass.type = 'text';
    }
}

function showPass2(){

    const pass = document.getElementById('pass-lock2');
    if(pass.type !== 'password'){
        pass.type = 'password';
    } else {
        pass.type = 'text';
    }
}